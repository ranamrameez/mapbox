map.on("load", () => {
	map.addLayer({
		id: "terrain-data",
		type: "line",
		source: {
			type: "vector",
			url: "mapbox://mapbox.mapbox-terrain-v2",
		},
		"source-layer": "contour",
	});
	// map.addLayer({
	// 	"id": "dynamic-demo",
	// 	"type": "raster",
	// 	"minzoom": 0,

	// 	"maxzoom": 22,
	// 	"imageSR": "3857",
	// 	"bboxSR": "3857",
	// 	"source": {
	// 		"type": "raster",
	// 		"tiles": [
	// 			'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
	// 		],
	// 		// "tiles": ["http://map3.urbanunit.gov.pk:6080/arcgis/rest/services//PAHP/PB_pahp_hmis_db84_20230804/MapServer"],
	// 		// "tiles": ["http://map3.urbanunit.gov.pk:6080/arcgis/rest/services/PAHP/PB_pahp_hmis_db84_20230804/MapServer/export?bbox=69.06299769499601%2C31.417041417308397%2C76.7308107862841%2C33.671580720332585&bboxSR=&layers=&layerDefs=&size=&imageSR=&format=png&transparent=false&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&datumTransformations=&layerParameterValues=&mapRangeValues=&layerRangeValues=&f=image"],
	// 		"tileSize": 256,
	// 		"imageSR": "3857",
	// 		"bboxSR": "3857"
	// 	}
	// });
});