function fetchRepoDataBlob() {
    const endpoint = 'https://api.github.com/orgs/tophat/repos'
    let http = new XMLHttpRequest()
    http.open('GET', endpoint, true)
    http.onreadystatechange = function() {
        if (http.readyState !== 4) return

        if (http.status === 200 && http.response) {
            const responseData = JSON.parse(http.response)
            const starCount = gatherStargazerData(responseData)
            const starCountSortedDesc = _sortByStarCount(starCount)
            insertStargazerBadges(starCountSortedDesc)
        } else {
            disableStargazerBadges()
        }
    }
    http.send()
}

function _sortByStarCount(gazers) {
    return gazers.sort(function(first, second) {
        const firstCount = first[1].stars
        const secondCount = second[1].stars
        return secondCount - firstCount
    })
}

function _sortByLastPush(gazers) {
    return Object.entries(gazers).sort(function(first, second) {
        const firstActive = new Date(first[1].active)
        const secondActive = new Date(second[1].active)
        if (firstActive < secondActive) return 1
        else if (firstActive > secondActive) return -1
        else return 0
    })
}

function gatherStargazerData(response) {
    const gazers = response.reduce(function (acc, project) {
        const { name, stargazers_count: stars, pushed_at:active } = project
        acc[name] = { stars, active }
        return acc
    }, {})
    return _sortByLastPush(gazers)
}

function insertStargazerBadges(starCounts) {
    const projectContainerElement = document.querySelector('#projects')
    starCounts.forEach(function([project, item], index) {
        const projectElement = document.querySelector(`#${project}`)
        if (projectElement) {
            projectContainerElement.appendChild(projectElement)
        }
        const badge = document.querySelector(`.project-stars[data-project='${project}']`)
        if (badge) {
            const count = badge.querySelector('.count')
            count.innerText = item.stars
            badge.style.opacity = 1
        }
    })
}

function disableStargazerBadges() {
   [...document.getElementsByClassName('project-stars')].forEach(item => item.remove())
}

fetchRepoDataBlob()
