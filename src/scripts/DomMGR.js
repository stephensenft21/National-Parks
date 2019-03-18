const nationalParks = document.querySelector("#display-container");

const createNationalParksVisited = (parkObject) => {
    return `
        <article class="true">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.state}</p>

        </article>
    `
}
const createNationalParksNotVisited = (parkObject) => {
    return `
        <article class="false">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.state}</p>

        </article>
    `

}


const renderParks = (parks) => {
    parks.forEach(parkObject => {
        if (parkObject.visited) {
            nationalParks.innerHTML += createNationalParksVisited(parkObject)

        } else {
            nationalParks.innerHTML += createNationalParksNotVisited(parkObject)
        }
    })
}