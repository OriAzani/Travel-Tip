export const weatherService = {
    getWeather
}


function getWeather(pos) {
    console.log('ifdfdfdffdfdfdn');
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=98985ae11d7eeb84361c1b2570f2629f`)
        .then(pos => {
<<<<<<< HEAD

=======
           
>>>>>>> 92a468c237708a38f35873562fe5c7f51e069824
            return pos.data
        })
}