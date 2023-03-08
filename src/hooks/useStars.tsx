import { useQuery } from 'react-query'

type RepositoryMetadata = {
    name: string
    stars: number
}

type RepositoriesMetadata = Record<string, RepositoryMetadata>

export function useRepositories() {
    const data = useQuery<RepositoriesMetadata>({
        queryKey: ['tophat/repos'],
        queryFn: async () => {
            const response = await fetch(
                'https://api.github.com/orgs/tophat/repos?type=public',
                {
                    headers: {
                        accept: 'application/vnd.github+json',
                    },
                },
            )

            if (response.ok) {
                const json = await response.json()
                return Object.fromEntries(
                    json.map((repo: any): [string, RepositoryMetadata] => [
                        repo.name,
                        {
                            name: repo.name,
                            stars: repo.stargazers_count,
                        },
                    ]),
                )
            }

            throw new Error('Unable to fetch stars.')
        },
    })

    return data
}
