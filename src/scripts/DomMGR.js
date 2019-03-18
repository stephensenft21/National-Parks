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


const renderParks = parks => {
 parks.foreach(parkObject => {})
 if (parkObjects)
}

// const nationalParksContainer = document.querySelector("#display-container")
// nationalParksContainer.innerHTML = createNationalParks()

