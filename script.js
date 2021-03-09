// 'map' refers to the div in index file where map is to be rendered.
let map;

// this initMap function is called in script file in index
function initMap() {
	// thats the place where map is going to be rendered
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53, lng: -6 },
    zoom: 9,
  });
}