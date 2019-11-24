// const loc = [-87.61694, 41.86625]; // chicago
const loc = [-89.395184, 43.073394]; //rk
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29jb29uNDYxMyIsImEiOiJjazNjY3MxdWkwajNoM2hxaXFpMWVvd3dxIn0.xjONCxuZnuVionvYzOArVQ";
var map = new mapboxgl.Map({
  container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
  // style: "mapbox://styles/mapbox/dark-v10",
  center: loc,
  zoom: 15
  //   pitch: 40,
  //   bearing: 20,
  //   anitialias: true
});

map.on("load", function() {
  map.setPaintProperty("building", "fill-color", [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    15,
    "#e2714b",
    22,
    "#eee695"
  ]);

  map.setPaintProperty("building", "fill-opacity", [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    15,
    0,
    22,
    1
  ]);
});

document.getElementById("zoom-btn").addEventListener("click", function() {
  map.jumpTo({
    center: loc,
    zoom: 15
  });
  map.zoomTo(17, { duration: 5000 });
});

// Add the marker
var marker = new mapboxgl.Marker().setLngLat(loc).addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());