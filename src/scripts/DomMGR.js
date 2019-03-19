const nationalParks = document.querySelector("#display-container");

const createNationalParksVisited = (parkObject) => {
    console.log(parkObject)
    return `
        <article class="true">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.state}</p>

        </article>
         `

}
const createNationalParksNotVisited = (parkObject) => {
    console.log(parkObject)
    return `
        <article class="false">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.state}</p>

        </article>
    `

}

// const renderParks = (parks) => {
//     parks.forEach(parkObject => {
//         if (parkObject.visited) {
//             nationalParks.innerHTML += createNationalParksVisited(parkObject)

<<<<<<< HEAD
//         } else {
//             nationalParks.innerHTML += createNationalParksNotVisited(parkObject)
//         }
//     })
// }

const renderParks = (parks) => {
    parks.forEach(parkObject => {
         
        if (parkObject.visited)  {
            nationalParks.innerHTML += createNationalParksVisited(parkObject)
        } else {
            nationalParks.innerHTML += createNationalParksNotVisited(parkObject)
        }
    })
}
=======
const renderParks = (parks) => {
    parks.forEach(parkObject => {
        if (parkObject.visited) {
            nationalParks.innerHTML += createNationalParksVisited(parkObject)
>>>>>>> 93477c92bafdd24448a9a32fd97b5c03264a71af

        } else {
            nationalParks.innerHTML += createNationalParksNotVisited(parkObject)
        }
    })
}