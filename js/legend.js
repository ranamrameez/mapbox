map.on('load', function() {
    const targets = {
        'pipeline': 'Pipeline',
        'pipeline_annotation': 'Pipeline Label', 
    };
    map.addControl(new MapboxLegendControl(targets, {
        showDefault: true, 
        showCheckbox: true, 
        onlyRendered: true,
        reverseOrder: true
    }), 'top-right');
})