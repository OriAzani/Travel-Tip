
export const weatherService = {
 getWeather,
}


function getWeather() {
console.log('in');

    // return axios.get(`api.openweathermap.org/data/2.5/weather?lat={${pos.coords.latitude}}&lon={${pos.coords.longitude}}&appid={98985ae11d7eeb84361c1b2570f2629f}`)
    axios.get(`api.openweathermap.org/data/2.5/weather?lat={139.6917}&lon={139.6917}&appid={98985ae11d7eeb84361c1b2570f2629f}`)  
    .then(pos => {
            console.log('weather print',pos)
            // return pos.data.results[0].formatted_address
        })
}
