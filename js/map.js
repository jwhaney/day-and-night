//create var bounds
var northWest = L.latLng(70, -141),
	southEast = L.latLng(-53, 170),
	bounds = L.latLngBounds(northWest, southEast);

//create map and use stamen terrain base
var layer = new L.StamenTileLayer("toner-lite");
var map = new L.Map("map", {
    zoom: 3,
	minZoom: 3
});

map.addLayer(layer);

map.fitBounds(bounds);

/*
load terminator and use script to auto udpate every 0.5 seconds;
credit to Jorg Dietrich's example at joergdietrich.github.io/Leaflet.Terminator/
*/
var t = L.terminator();

t.addTo(map);
setInterval(function(){updateTerminator(t)}, 500);
function updateTerminator(t) {
  	var t2 = L.terminator();
  	t.setLatLngs(t2.getLatLngs());
  	t.redraw();
}

//custom easy button control, zoom to var bounds
L.easyButton('fa-globe fa-lg', function(){
    map.fitBounds(bounds)
}).addTo(map);
