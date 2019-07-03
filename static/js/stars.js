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

function _sortByStarCount(gazers) {
    return Object.entries(gazers).sort(function(first, second) {
        const firstCount = first[1]
        const secondCount = second[1]

        if (firstCount < secondCount) return -1
        else if (firstCount > secondCount) return 1
        else return 0
    })
}

function gatherStargazerData(response) {
    const gazers = response.reduce(function (acc, project) {
        const { name, stargazers_count: stars } = project
        acc[name] = stars
        return acc
    }, {})
    return _sortByStarCount(gazers)
}

function insertStargazerBadges(starCounts) {
    starCounts.forEach(function([project, item], index) {
        const badge = document.querySelector(".project-stars[data-project='" + project +"']")
       
        if (badge) {
            const projectBox = badge.parentNode
            const count = badge.querySelector('.count')
            count.innerText = item
            badge.style.opacity = 1
            projectBox.style.order = index
        }
    })
}

fetchRepoDataBlob()
