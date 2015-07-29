L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    {
        type: 'Feature',
        properties: {
            title: 'Home Sweet Home',
            description: 'livin in sin',
            'marker-color': '#000000',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.62153640000002, 41.8852906]
        }
    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the points to the map

// Makes sure that map's initial zoom contains all of the points
map.on('ready', function() {
    map.fitBounds(myLayer.getBounds());
});
