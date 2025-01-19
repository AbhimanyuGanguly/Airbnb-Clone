mapboxgl.accessToken = mapToken;
const coordinates = [-74.0060, 40.7128];
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});
const el = document.createElement('div');
el.className = 'fa-regular fa-compass';

const marker = new mapboxgl.Marker(el)
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    "<p>Exact location provided after booking.</p>"
)
)
.addTo(map);