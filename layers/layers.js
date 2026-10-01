ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102454").setExtent([324719.392590, 1585929.259127, 343948.443156, 1601365.181910]);
var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MunicipalBoundary_3 = new ol.format.GeoJSON();
var features_MunicipalBoundary_3 = format_MunicipalBoundary_3.readFeatures(json_MunicipalBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_MunicipalBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalBoundary_3.addFeatures(features_MunicipalBoundary_3);
var lyr_MunicipalBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalBoundary_3, 
                style: style_MunicipalBoundary_3,
                popuplayertitle: 'Municipal Boundary',
                interactive: false,
                title: '<img src="styles/legend/MunicipalBoundary_3.png" /> Municipal Boundary'
            });
var format_BarangayBoundary_4 = new ol.format.GeoJSON();
var features_BarangayBoundary_4 = format_BarangayBoundary_4.readFeatures(json_BarangayBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_BarangayBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayBoundary_4.addFeatures(features_BarangayBoundary_4);
var lyr_BarangayBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayBoundary_4, 
                style: style_BarangayBoundary_4,
                popuplayertitle: 'Barangay Boundary',
                interactive: true,
                title: '<img src="styles/legend/BarangayBoundary_4.png" /> Barangay Boundary'
            });
var format_Pangil_Hazard_Landslide_5 = new ol.format.GeoJSON();
var features_Pangil_Hazard_Landslide_5 = format_Pangil_Hazard_Landslide_5.readFeatures(json_Pangil_Hazard_Landslide_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Pangil_Hazard_Landslide_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pangil_Hazard_Landslide_5.addFeatures(features_Pangil_Hazard_Landslide_5);
var lyr_Pangil_Hazard_Landslide_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pangil_Hazard_Landslide_5, 
                style: style_Pangil_Hazard_Landslide_5,
                popuplayertitle: 'Pangil_Hazard_Landslide',
                interactive: true,
    title: 'Pangil_Hazard_Landslide<br />\
    <img src="styles/legend/Pangil_Hazard_Landslide_5_0.png" /> Low<br />\
    <img src="styles/legend/Pangil_Hazard_Landslide_5_1.png" /> Medium<br />\
    <img src="styles/legend/Pangil_Hazard_Landslide_5_2.png" /> High<br />' });
var format_Pangil_Hazard_Flood_100yr_6 = new ol.format.GeoJSON();
var features_Pangil_Hazard_Flood_100yr_6 = format_Pangil_Hazard_Flood_100yr_6.readFeatures(json_Pangil_Hazard_Flood_100yr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Pangil_Hazard_Flood_100yr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pangil_Hazard_Flood_100yr_6.addFeatures(features_Pangil_Hazard_Flood_100yr_6);
var lyr_Pangil_Hazard_Flood_100yr_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pangil_Hazard_Flood_100yr_6, 
                style: style_Pangil_Hazard_Flood_100yr_6,
                popuplayertitle: 'Pangil_Hazard_Flood_100yr',
                interactive: true,
    title: 'Pangil_Hazard_Flood_100yr<br />\
    <img src="styles/legend/Pangil_Hazard_Flood_100yr_6_0.png" /> Low Hazard (0–0.5 m)<br />\
    <img src="styles/legend/Pangil_Hazard_Flood_100yr_6_1.png" /> Medium Hazard (>0.5–1.5 m)<br />\
    <img src="styles/legend/Pangil_Hazard_Flood_100yr_6_2.png" /> High Hazard (>1.5 m)<br />' });
var format_Pangil_LCM_2025_7 = new ol.format.GeoJSON();
var features_Pangil_LCM_2025_7 = format_Pangil_LCM_2025_7.readFeatures(json_Pangil_LCM_2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Pangil_LCM_2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pangil_LCM_2025_7.addFeatures(features_Pangil_LCM_2025_7);
var lyr_Pangil_LCM_2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pangil_LCM_2025_7, 
                style: style_Pangil_LCM_2025_7,
                popuplayertitle: 'Pangil_LCM_2025',
                interactive: true,
    title: 'Pangil_LCM_2025<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_0.png" /> Annual Crop<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_1.png" /> Brush/Shrubs<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_2.png" /> Built-up<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_3.png" /> Grassland<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_4.png" /> Inland Water<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_5.png" /> Open Forest<br />\
    <img src="styles/legend/Pangil_LCM_2025_7_6.png" /> Perennial Crop<br />' });
var format_LandParcels_8 = new ol.format.GeoJSON();
var features_LandParcels_8 = format_LandParcels_8.readFeatures(json_LandParcels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_LandParcels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandParcels_8.addFeatures(features_LandParcels_8);
var lyr_LandParcels_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandParcels_8, 
                style: style_LandParcels_8,
                popuplayertitle: 'Land Parcels',
                interactive: true,
                title: '<img src="styles/legend/LandParcels_8.png" /> Land Parcels'
            });
var format_RoadNetwork_9 = new ol.format.GeoJSON();
var features_RoadNetwork_9 = format_RoadNetwork_9.readFeatures(json_RoadNetwork_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_RoadNetwork_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_9.addFeatures(features_RoadNetwork_9);
var lyr_RoadNetwork_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_9, 
                style: style_RoadNetwork_9,
                popuplayertitle: 'Road Network',
                interactive: true,
                title: '<img src="styles/legend/RoadNetwork_9.png" /> Road Network'
            });
var format_AgriMachineryLocation_10 = new ol.format.GeoJSON();
var features_AgriMachineryLocation_10 = format_AgriMachineryLocation_10.readFeatures(json_AgriMachineryLocation_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_AgriMachineryLocation_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriMachineryLocation_10.addFeatures(features_AgriMachineryLocation_10);
cluster_AgriMachineryLocation_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AgriMachineryLocation_10
});
var lyr_AgriMachineryLocation_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AgriMachineryLocation_10, 
                style: style_AgriMachineryLocation_10,
                popuplayertitle: 'Agri-Machinery Location',
                interactive: true,
                title: '<img src="styles/legend/AgriMachineryLocation_10.png" /> Agri-Machinery Location'
            });
var group_LCM2025 = new ol.layer.Group({
                                layers: [lyr_Pangil_LCM_2025_7,],
                                fold: 'close',
                                title: 'LCM 2025'});
var group_HazardMap = new ol.layer.Group({
                                layers: [lyr_Pangil_Hazard_Landslide_5,lyr_Pangil_Hazard_Flood_100yr_6,],
                                fold: 'close',
                                title: 'Hazard Map'});

lyr_EsriDarkGray_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_MunicipalBoundary_3.setVisible(true);lyr_BarangayBoundary_4.setVisible(true);lyr_Pangil_Hazard_Landslide_5.setVisible(false);lyr_Pangil_Hazard_Flood_100yr_6.setVisible(false);lyr_Pangil_LCM_2025_7.setVisible(false);lyr_LandParcels_8.setVisible(false);lyr_RoadNetwork_9.setVisible(false);lyr_AgriMachineryLocation_10.setVisible(false);
var layersList = [lyr_EsriDarkGray_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,lyr_MunicipalBoundary_3,lyr_BarangayBoundary_4,group_HazardMap,group_LCM2025,lyr_LandParcels_8,lyr_RoadNetwork_9,lyr_AgriMachineryLocation_10];
lyr_MunicipalBoundary_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'MUN': 'MUN', });
lyr_BarangayBoundary_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'MUN': 'MUN', 'BRGY': 'BRGY', 'BRGY_CODE': 'BRGY_CODE', 'AREA_HAS': 'AREA_HAS', 'REG_VOTERS': 'REG_VOTERS', 'POPULATION': 'POPULATION', });
lyr_Pangil_Hazard_Landslide_5.set('fieldAliases', {'fid': 'fid', 'LH': 'LH', 'Class': 'Class', });
lyr_Pangil_Hazard_Flood_100yr_6.set('fieldAliases', {'fid': 'fid', 'Var': 'Var', 'Class': 'Class', });
lyr_Pangil_LCM_2025_7.set('fieldAliases', {'fid': 'fid', 'PSGC_C': 'PSGC_C', 'REGION': 'REGION', 'PROVINCE': 'PROVINCE', 'SERIES': 'SERIES', 'ENR_CLCODE': 'ENR_CLCODE', 'LCM_CLASS': 'LCM_CLASS', 'AREA_HA': 'AREA_HA', 'SOURCE': 'SOURCE', 'REMARKS': 'REMARKS', });
lyr_LandParcels_8.set('fieldAliases', {'fid': 'fid', 'Municipality': 'Municipality', 'Barangay': 'Barangay', 'Section': 'Section', 'TDtieup': 'TDtieup', 'fullname': 'fullname', 'Claimant Last Name': 'Claimant Last Name', 'Claimant First Name': 'Claimant First Name', 'Actual Area (sqm)': 'Actual Area (sqm)', 'Lot No.': 'Lot No.', 'Computed Area (sqm)': 'Computed Area (sqm)', 'REMARKS': 'REMARKS', 'Classification': 'Classification', });
lyr_RoadNetwork_9.set('fieldAliases', {'fid': 'fid', 'ROAD NAME': 'ROAD NAME', 'PSGC CODE': 'PSGC CODE', 'REGION': 'REGION', 'PROVINCE': 'PROVINCE', 'CITY/MUNIC': 'CITY/MUNIC', 'DISTRICT': 'DISTRICT', 'BARANGAY': 'BARANGAY', 'ROAD CLASS': 'ROAD CLASS', 'ROAD TYPE': 'ROAD TYPE', 'ROAD CONDI': 'ROAD CONDI', 'ROAD IMPRO': 'ROAD IMPRO', 'REMARKS': 'REMARKS', 'LENGTH (m)': 'LENGTH (m)', });
lyr_AgriMachineryLocation_10.set('fieldAliases', {'fid': 'fid', 'NAME OF OWNER / ASSOCIATION': 'NAME OF OWNER / ASSOCIATION', 'BARANGAY': 'BARANGAY', 'AGRICULTURAL MACHINERY / EQUIPMENT': 'AGRICULTURAL MACHINERY / EQUIPMENT', 'NO. OF UNITS': 'NO. OF UNITS', 'YEAR ACQUIRED': 'YEAR ACQUIRED', 'MOTOR BRAND': 'MOTOR BRAND', 'RATED POWER (hp)': 'RATED POWER (hp)', 'FUND SOURCE': 'FUND SOURCE', 'COMMODITY': 'COMMODITY', 'FARM OPERATION': 'FARM OPERATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MunicipalBoundary_3.set('fieldImages', {'fid': '', 'ID': '', 'MUN': '', });
lyr_BarangayBoundary_4.set('fieldImages', {'fid': '', 'ID': '', 'MUN': '', 'BRGY': '', 'BRGY_CODE': '', 'AREA_HAS': '', 'REG_VOTERS': '', 'POPULATION': '', });
lyr_Pangil_Hazard_Landslide_5.set('fieldImages', {'fid': 'TextEdit', 'LH': 'TextEdit', 'Class': 'TextEdit', });
lyr_Pangil_Hazard_Flood_100yr_6.set('fieldImages', {'fid': 'TextEdit', 'Var': 'TextEdit', 'Class': 'TextEdit', });
lyr_Pangil_LCM_2025_7.set('fieldImages', {'fid': 'TextEdit', 'PSGC_C': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCE': 'TextEdit', 'SERIES': 'TextEdit', 'ENR_CLCODE': 'TextEdit', 'LCM_CLASS': 'TextEdit', 'AREA_HA': 'TextEdit', 'SOURCE': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_LandParcels_8.set('fieldImages', {'fid': 'TextEdit', 'Municipality': 'TextEdit', 'Barangay': 'TextEdit', 'Section': 'TextEdit', 'TDtieup': 'TextEdit', 'fullname': 'TextEdit', 'Claimant Last Name': 'TextEdit', 'Claimant First Name': 'TextEdit', 'Actual Area (sqm)': 'TextEdit', 'Lot No.': 'TextEdit', 'Computed Area (sqm)': 'TextEdit', 'REMARKS': '', 'Classification': 'TextEdit', });
lyr_RoadNetwork_9.set('fieldImages', {'fid': '', 'ROAD NAME': '', 'PSGC CODE': '', 'REGION': '', 'PROVINCE': '', 'CITY/MUNIC': '', 'DISTRICT': '', 'BARANGAY': '', 'ROAD CLASS': '', 'ROAD TYPE': '', 'ROAD CONDI': '', 'ROAD IMPRO': '', 'REMARKS': '', 'LENGTH (m)': '', });
lyr_AgriMachineryLocation_10.set('fieldImages', {'fid': '', 'NAME OF OWNER / ASSOCIATION': '', 'BARANGAY': '', 'AGRICULTURAL MACHINERY / EQUIPMENT': '', 'NO. OF UNITS': '', 'YEAR ACQUIRED': '', 'MOTOR BRAND': '', 'RATED POWER (hp)': '', 'FUND SOURCE': '', 'COMMODITY': '', 'FARM OPERATION': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_MunicipalBoundary_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'MUN': 'hidden field', });
lyr_BarangayBoundary_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'MUN': 'hidden field', 'BRGY': 'inline label - visible with data', 'BRGY_CODE': 'hidden field', 'AREA_HAS': 'inline label - visible with data', 'REG_VOTERS': 'inline label - visible with data', 'POPULATION': 'inline label - visible with data', });
lyr_Pangil_Hazard_Landslide_5.set('fieldLabels', {'fid': 'hidden field', 'LH': 'hidden field', 'Class': 'inline label - visible with data', });
lyr_Pangil_Hazard_Flood_100yr_6.set('fieldLabels', {'fid': 'hidden field', 'Var': 'hidden field', 'Class': 'inline label - visible with data', });
lyr_Pangil_LCM_2025_7.set('fieldLabels', {'fid': 'hidden field', 'PSGC_C': 'hidden field', 'REGION': 'hidden field', 'PROVINCE': 'hidden field', 'SERIES': 'hidden field', 'ENR_CLCODE': 'hidden field', 'LCM_CLASS': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', 'SOURCE': 'hidden field', 'REMARKS': 'hidden field', });
lyr_LandParcels_8.set('fieldLabels', {'fid': 'hidden field', 'Municipality': 'inline label - visible with data', 'Barangay': 'inline label - visible with data', 'Section': 'hidden field', 'TDtieup': 'hidden field', 'fullname': 'hidden field', 'Claimant Last Name': 'inline label - visible with data', 'Claimant First Name': 'inline label - visible with data', 'Actual Area (sqm)': 'inline label - visible with data', 'Lot No.': 'hidden field', 'Computed Area (sqm)': 'hidden field', 'REMARKS': 'hidden field', 'Classification': 'inline label - visible with data', });
lyr_RoadNetwork_9.set('fieldLabels', {'fid': 'hidden field', 'ROAD NAME': 'inline label - visible with data', 'PSGC CODE': 'hidden field', 'REGION': 'hidden field', 'PROVINCE': 'hidden field', 'CITY/MUNIC': 'hidden field', 'DISTRICT': 'hidden field', 'BARANGAY': 'hidden field', 'ROAD CLASS': 'inline label - visible with data', 'ROAD TYPE': 'inline label - visible with data', 'ROAD CONDI': 'inline label - visible with data', 'ROAD IMPRO': 'hidden field', 'REMARKS': 'inline label - visible with data', 'LENGTH (m)': 'inline label - visible with data', });
lyr_AgriMachineryLocation_10.set('fieldLabels', {'fid': 'hidden field', 'NAME OF OWNER / ASSOCIATION': 'inline label - visible with data', 'BARANGAY': 'inline label - visible with data', 'AGRICULTURAL MACHINERY / EQUIPMENT': 'inline label - visible with data', 'NO. OF UNITS': 'hidden field', 'YEAR ACQUIRED': 'inline label - visible with data', 'MOTOR BRAND': 'inline label - visible with data', 'RATED POWER (hp)': 'inline label - visible with data', 'FUND SOURCE': 'inline label - visible with data', 'COMMODITY': 'inline label - visible with data', 'FARM OPERATION': 'inline label - visible with data', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', });
lyr_AgriMachineryLocation_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});