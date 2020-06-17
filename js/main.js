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
            console.log(pos)
            mapService.panTo(pos.coords.latitude, pos.coords.longitude);
            mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            mapService.getAddressName(pos)
                .then(res => {
                    console.log(res);
                    var strHtml = res;
                    document.querySelector('.address-name').innerText = strHtml

                })
                axios.get(`api.openweathermap.org/data/2.5/weather?lat=32.0749831&lon=34.9120554&appid=98985ae11d7eeb84361c1b2570f2629f`)  
                .then(pos => {
                        console.log('weather print',pos.)
                        // return pos.data.results[0].formatted_address
                    })
        })


})
