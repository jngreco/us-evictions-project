// Set Up Variables 
var northAmericaCoords = [54.5260 -105.2551];
var mapZoomLevel = 3.5;
var birdMap 
var url = "___"
let local_url = 'http://127.0.0.1:5000/api/v1.0/all_data_dates/2015-01-01/2015-05-01'

// Create the createMap function.
function createMap(birdSpecies) {

  // Create the tile layer that will be the background of our map.
  const streetmap = L.tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(birdMap);

  // Create a baseMaps object to hold the lightmap layer.
const baseMaps = {
  "Street Map": streetmap,
};

  // Create an overlayMaps object to hold the birdSpecies layer.
const overlayMaps = {
  "Birds": birdSpecies,
}

  // Create the map object with options.
  var birdMap = L.map("map", {
    center: northAmericaCoords,
    zoom: mapZoomLevel,
    layers: [baseMaps, overlayMaps]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addtTo(birdMap);
};

d3.json(local_url).then((data)=>{
  //let lats = data.Latitude;
  console.log(data);
});
// // Create the createMarkers function.
// function createMarkers (reponse) {

//   // Pull the "stations" property from response.data.
//   let stations = response.data.stations;

//   // Initialize an array to hold the bike markers.
//   bikeMarkers = [];

//   // Loop through the stations array.
//   for (let b = 0; b < stations.length; b++) {
//     if (stations[b].lat) {
//       // For each station, create a marker, and bind a popup with the station's name.
//       let bikeMarker = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");
//       // Add the marker to the bikeMarkers array.
//       bikeMarkers.push(bikeMarker);
//     }
//     // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
//     createMap(L.layerGroup(bikeMarkers));
//   }
// }
  
// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);