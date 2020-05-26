var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Luftpumpenstationen_1 = new ol.format.GeoJSON();
var features_Luftpumpenstationen_1 = format_Luftpumpenstationen_1.readFeatures(json_Luftpumpenstationen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luftpumpenstationen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luftpumpenstationen_1.addFeatures(features_Luftpumpenstationen_1);cluster_Luftpumpenstationen_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Luftpumpenstationen_1
});
var lyr_Luftpumpenstationen_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Luftpumpenstationen_1, 
                style: style_Luftpumpenstationen_1,
                interactive: true,
                title: '<img src="styles/legend/Luftpumpenstationen_1.png" /> Luftpumpenstationen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Luftpumpenstationen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Luftpumpenstationen_1];
lyr_Luftpumpenstationen_1.set('fieldAliases', {'fid': 'fid', 'name': 'Adresse', 'betreiber': 'betreiber', 'kontakt': 'kontakt', 'anmerkungen': 'E_bike_Lademöglichkeit', });
lyr_Luftpumpenstationen_1.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'betreiber': 'Hidden', 'kontakt': 'Hidden', 'anmerkungen': 'TextEdit', });
lyr_Luftpumpenstationen_1.set('fieldLabels', {'name': 'inline label', 'anmerkungen': 'inline label', });
lyr_Luftpumpenstationen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});