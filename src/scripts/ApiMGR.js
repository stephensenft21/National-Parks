const nationalParksCall = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
        .then(parks =>  {
            renderParks(parks)

        });
};

const getWeather = (lat, long) => {
    return fetch (`https://api.darksky.net/forecast/5da22c7f3fbcf8e25298c7b7611f068d/${lat},${long}`)
    .then (response => response.json())    
}







