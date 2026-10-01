var size = 0;
var placement = 'point';
function categories_Pangil_LCM_2025_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Annual Crop':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,254,132,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Brush/Shrubs':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,223,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Built-up':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Grassland':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,177,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland Water':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,135,209,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Open Forest':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(12,109,12,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perennial Crop':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,237,173,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Pangil_LCM_2025_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("LCM_CLASS");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Pangil_LCM_2025_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
