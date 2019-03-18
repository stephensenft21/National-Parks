const nationalParksCall = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
        .then(parks =>  {
            renderParks(parks)

        });
};

nationalParksCall()