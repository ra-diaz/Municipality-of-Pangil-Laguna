var size = 0;
var placement = 'point';

var style_Pangil_Hazard_Flood_100yr_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
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
    
        function rules_Pangil_Hazard_Flood_100yr_6(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Pangil_Hazard_Flood_100yr_6rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(192,216,241,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pangil_Hazard_Flood_100yr_6rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(77,175,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pangil_Hazard_Flood_100yr_6rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,72,146,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Pangil_Hazard_Flood_100yr_6(feature, value);
        ;

    return style;
};
