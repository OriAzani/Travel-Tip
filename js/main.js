console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'
import { weatherService } from './services/weather.service.js';


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {

            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
        })
        .catch(console.log('INIT MAP ERROR'));

    locService.getPosition()
        .then(pos => {

            console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})

document.querySelector('.my-location-btn').addEventListener('click', (ev) => {

    console.log('Aha!', ev.target);
    locService.getPosition()
        .then(pos => {

            mapService.panTo(pos.coords.latitude, pos.coords.longitude);
            mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            mapService.getAddressName(pos)
                .then(res => {

                    var strHtml = (`Location: ${res}`)
                    document.querySelector('.address-name').innerText = strHtml

                })
            weatherService.getWeather(pos)
                .then(res => {
                    console.log(res);

                    var temp = (res.main.temp-273).toFixed(2)
                    var minTemp = (res.main.temp_min - 273).toFixed(2)
                    var maxTemp = (res.main.temp_max - 273).toFixed(2)
                    var windSpeed = res.wind.speed
                    var weatherInfo =  `<span>${temp}</span> temperature from ${minTemp} to ${maxTemp} C, wind ${windSpeed} m/s. `
                    console.log(weatherInfo);
                    document.querySelector('.weather-info').innerHTML = weatherInfo
                })
        })


})
