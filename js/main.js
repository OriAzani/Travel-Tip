console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'


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
            fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyC5PQRy3g0RF1dODi4z8AwJ3bfxQ4lmJ-g')
            .then(pos => {
                console.log(pos)
        })
        })

})
