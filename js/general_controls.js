// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");
map.addControl(new mapboxgl.FullscreenControl(), "top-left");
map.addControl(new mapboxgl.ScaleControl(), "bottom-left");
// Add geolocate control to the map.
map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true,
		},
		// When active the map will receive updates to the device's location as it changes.
		trackUserLocation: true,
		// Draw an arrow next to the location dot to indicate which direction the device is heading.
		showUserHeading: true,
	}),
	"top-left"
);

var popup = {};
var marker = new mapboxgl.Marker();
function showPopup(coordinates, description) {
	// Create a marker and add it to the map.
	// marker = new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
	marker.setLngLat(coordinates).addTo(map);

	popup = new mapboxgl.Popup()
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
}
