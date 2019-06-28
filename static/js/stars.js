function fetchRepoDataBlob() {
    const endpoint = 'https://api.github.com/orgs/tophat/repos'
    let http = new XMLHttpRequest()
    http.open('GET', endpoint, true)
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            const responseData = JSON.parse(http.response)
            const starCount = gatherStargazerData(responseData)
            insertStargazerBadges(starCount)
        }
    }
    http.send()
}

function gatherStargazerData(response) {
    return response.reduce(function (acc, project) {
        const { name, stargazers_count: stars } = project
        acc[name] = stars
        return acc
    }, {})
}

function insertStargazerBadges(starCounts) {
    Object.entries(starCounts).forEach(function([project, item]) {
        const badge = document.querySelector(".project-stars[data-project='" + project +"']")

        if (badge) {
            const count = badge.querySelector('.count')
            count.innerText = item
            badge.style.opacity = 1
        }
    })
}

fetchRepoDataBlob()
