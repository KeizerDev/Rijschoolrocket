var map = L.map('map', { zoomControl:false }).setView([51.49, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
}).addTo(map);


map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();

var circle = L.circle([51.505, -0.09], 200, {
    color: '#CF000F',
    fillColor: '#F22613',
    fillOpacity: 0.5
}).addTo(map);
