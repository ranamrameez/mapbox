/*<div id="basemap-menu" class="mt-2">
	<input id="streets-v11" type="radio" name="rtoggle" value="streets-v11" checked="checked" />
	<label for="streets-v11">Streets</label>
	<input id="light-v11" type="radio" name="rtoggle" value="light" />
	<label for="light-v11">Light</label>
	<input id="dark-v11" type="radio" name="rtoggle" value="dark" />
	<label for="dark-v11">Dark</label>
	<input id="streets-v12" type="radio" name="rtoggle" value="streets" />
	<label for="streets-v12">Open Streets</label>
	<input id="outdoors-v12" type="radio" name="rtoggle" value="outdoors" />
	<label for="outdoors-v12">Outdoors</label>
</div>*/

const layerList = document.getElementById("basemap-menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
	input.onclick = (layer) => {
		const layerId = layer.target.id;
		map.setStyle("mapbox://styles/mapbox/" + layerId);
	};
}
