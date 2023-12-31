/* <div class="calculation-box">
	<p>Click the map to draw a polygon.</p>
	<div id="calculated-area"></div>
</div> */
const draw = new MapboxDraw({
	displayControlsDefault: false,
	// Select which mapbox-gl-draw control buttons to add to the map.
	controls: {
		polygon: true,
		trash: true,
	},
	// Set mapbox-gl-draw to draw by default.
	// The user does not have to click the polygon control button first.
	defaultMode: "draw_polygon",
});
map.addControl(draw, "top-left");

map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);

function updateArea(e) {
	const data = draw.getAll();
	const answer = document.getElementById("calculated-area");
	if (data.features.length > 0) {
		const area = turf.area(data);
		// Restrict the area to 2 decimal points.
		const rounded_area = Math.round(area * 100) / 100;
		answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
	} else {
		answer.innerHTML = "";
		if (e.type !== "draw.delete") alert("Click the map to draw a polygon.");
	}
}
