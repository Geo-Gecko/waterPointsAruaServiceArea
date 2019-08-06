//function that set the style of the layer 
var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
      highlightLayer.setStyle({
        color: '#ffff00',
      });
    } else {
      highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
      });
    }
}

//setting the bounds of the map
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[2.4979350457607756,30.331945295818453],[3.350069827691966,31.952800514424613]]);
var hash = new L.Hash(map);
map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
var overlay_Positron_0 = L.tileLayer('http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 1.0
});
overlay_Positron_0.addTo(map);
map.addLayer(overlay_Positron_0);
function pop_counts_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    //setting the popup content in the table 
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['type'] !== null ? Autolinker.link(String(feature.properties['type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? Autolinker.link(String(feature.properties['id'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lon'] !== null ? Autolinker.link(String(feature.properties['lon'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['timestamp'] !== null ? Autolinker.link(String(feature.properties['timestamp'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['version'] !== null ? Autolinker.link(String(feature.properties['version'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['changeset'] !== null ? Autolinker.link(String(feature.properties['changeset'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['user'] !== null ? Autolinker.link(String(feature.properties['user'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uid'] !== null ? Autolinker.link(String(feature.properties['uid'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity'] !== null ? Autolinker.link(String(feature.properties['tags/amenity'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/man_made'] !== null ? Autolinker.link(String(feature.properties['tags/man_made'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name'] !== null ? Autolinker.link(String(feature.properties['tags/name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operational_status'] !== null ? Autolinker.link(String(feature.properties['tags/operational_status'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump'] !== null ? Autolinker.link(String(feature.properties['tags/pump'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:block'] !== null ? Autolinker.link(String(feature.properties['tags/addr:block'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:district'] !== null ? Autolinker.link(String(feature.properties['tags/addr:district'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:parish'] !== null ? Autolinker.link(String(feature.properties['tags/addr:parish'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:settlement'] !== null ? Autolinker.link(String(feature.properties['tags/addr:settlement'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr:subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:zone'] !== null ? Autolinker.link(String(feature.properties['tags/addr:zone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator:type'] !== null ? Autolinker.link(String(feature.properties['tags/operator:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:wheelchair'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:wheelchair'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/natural'] !== null ? Autolinker.link(String(feature.properties['tags/natural'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water'] !== null ? Autolinker.link(String(feature.properties['tags/water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/fee'] !== null ? Autolinker.link(String(feature.properties['tags/fee'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator'] !== null ? Autolinker.link(String(feature.properties['tags/operator'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:village'] !== null ? Autolinker.link(String(feature.properties['tags/addr:village'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:country'] !== null ? Autolinker.link(String(feature.properties['tags/addr:country'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:type'] !== null ? Autolinker.link(String(feature.properties['tags/pump:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:access'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:access'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:county'] !== null ? Autolinker.link(String(feature.properties['tags/addr:county'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lit'] !== null ? Autolinker.link(String(feature.properties['tags/lit'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/unisex'] !== null ? Autolinker.link(String(feature.properties['tags/unisex'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source'] !== null ? Autolinker.link(String(feature.properties['tags/source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/comment'] !== null ? Autolinker.link(String(feature.properties['tags/comment'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:style'] !== null ? Autolinker.link(String(feature.properties['tags/pump:style'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/Comments'] !== null ? Autolinker.link(String(feature.properties['tags/Comments'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/start_date'] !== null ? Autolinker.link(String(feature.properties['tags/start_date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:point'] !== null ? Autolinker.link(String(feature.properties['tags/addr:point'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_source'] !== null ? Autolinker.link(String(feature.properties['tags/water_source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/drought_prone'] !== null ? Autolinker.link(String(feature.properties['tags/drought_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/flood_prone'] !== null ? Autolinker.link(String(feature.properties['tags/flood_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source:form'] !== null ? Autolinker.link(String(feature.properties['tags/source:form'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/tank_outlet:present'] !== null ? Autolinker.link(String(feature.properties['tags/tank_outlet:present'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water:distribution'] !== null ? Autolinker.link(String(feature.properties['tags/water:distribution'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name:en'] !== null ? Autolinker.link(String(feature.properties['tags/name:en'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:street'] !== null ? Autolinker.link(String(feature.properties['tags/addr:street'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity_water'] !== null ? Autolinker.link(String(feature.properties['tags/amenity_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/date'] !== null ? Autolinker.link(String(feature.properties['tags/date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/facility_nature'] !== null ? Autolinker.link(String(feature.properties['tags/facility_nature'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored'] !== null ? Autolinker.link(String(feature.properties['tags/monitored'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored_by'] !== null ? Autolinker.link(String(feature.properties['tags/monitored_by'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/owner_water'] !== null ? Autolinker.link(String(feature.properties['tags/owner_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_communities'] !== null ? Autolinker.link(String(feature.properties['tags/water_communities'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_drying'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_drying'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_flooding'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_flooding'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr_subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr_subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lighting_operational'] !== null ? Autolinker.link(String(feature.properties['tags/lighting_operational'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/wash_lighting'] !== null ? Autolinker.link(String(feature.properties['tags/wash_lighting'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NUMPOINTS'] !== null ? Autolinker.link(String(feature.properties['NUMPOINTS'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
//function to set the style of the feature and properties of the map
function style_counts_1_0(feature) {
    if (feature.properties['NUMPOINTS'] >= 0.000000 && feature.properties['NUMPOINTS'] <= 85.000000 ) {
        return {
        pane: 'pane_counts_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(247,251,255,1.0)',
    }
    }
    if (feature.properties['NUMPOINTS'] >= 85.000000 && feature.properties['NUMPOINTS'] <= 241.000000 ) {
        return {
        pane: 'pane_counts_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(200,221,240,1.0)',
    }
    }
    if (feature.properties['NUMPOINTS'] >= 241.000000 && feature.properties['NUMPOINTS'] <= 483.000000 ) {
        return {
        pane: 'pane_counts_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(115,179,216,1.0)',
    }
    }
    if (feature.properties['NUMPOINTS'] >= 483.000000 && feature.properties['NUMPOINTS'] <= 934.000000 ) {
        return {
        pane: 'pane_counts_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(40,121,185,1.0)',
    }
    }
    if (feature.properties['NUMPOINTS'] >= 934.000000 && feature.properties['NUMPOINTS'] <= 2258.000000 ) {
        return {
        pane: 'pane_counts_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(8,48,107,1.0)',
    }
    }
}
map.createPane('pane_counts_1');
map.getPane('pane_counts_1').style.zIndex = 401;
map.getPane('pane_counts_1').style['mix-blend-mode'] = 'normal';
var layer_counts_1 = new L.geoJson(json_counts_1, {
    attribution: '<a href=""></a>',
    pane: 'pane_counts_1',
    onEachFeature: pop_counts_1,
    style: style_counts_1_0,
});
bounds_group.addLayer(layer_counts_1);
// map.addLayer(layer_counts_1);

//getting information from the geojson file 
var datalayer;
$.getJSON('data/all.geojson', function(data){
            datalayer = L.geoJson(data, {
                pointToLayer :  (feature, latlng) => {
                    var geojsonMarkerOptions = {
                radius: 2,
                fillColor: "#000",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };
                return L.circleMarker(latlng, geojsonMarkerOptions);}	
            }).addTo(map)
            }); 
function pop_Waterpoints__NON_operational_2(feature, layer) {
    layer.on({
        mouseout: (e) => {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    //showing the content in a tabla formate 
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['type'] !== null ? Autolinker.link(String(feature.properties['type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? Autolinker.link(String(feature.properties['id'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lon'] !== null ? Autolinker.link(String(feature.properties['lon'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['timestamp'] !== null ? Autolinker.link(String(feature.properties['timestamp'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['version'] !== null ? Autolinker.link(String(feature.properties['version'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['changeset'] !== null ? Autolinker.link(String(feature.properties['changeset'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['user'] !== null ? Autolinker.link(String(feature.properties['user'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uid'] !== null ? Autolinker.link(String(feature.properties['uid'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity'] !== null ? Autolinker.link(String(feature.properties['tags/amenity'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/man_made'] !== null ? Autolinker.link(String(feature.properties['tags/man_made'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name'] !== null ? Autolinker.link(String(feature.properties['tags/name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operational_status'] !== null ? Autolinker.link(String(feature.properties['tags/operational_status'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump'] !== null ? Autolinker.link(String(feature.properties['tags/pump'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:block'] !== null ? Autolinker.link(String(feature.properties['tags/addr:block'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:district'] !== null ? Autolinker.link(String(feature.properties['tags/addr:district'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:parish'] !== null ? Autolinker.link(String(feature.properties['tags/addr:parish'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:settlement'] !== null ? Autolinker.link(String(feature.properties['tags/addr:settlement'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr:subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:zone'] !== null ? Autolinker.link(String(feature.properties['tags/addr:zone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator:type'] !== null ? Autolinker.link(String(feature.properties['tags/operator:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:wheelchair'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:wheelchair'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/natural'] !== null ? Autolinker.link(String(feature.properties['tags/natural'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water'] !== null ? Autolinker.link(String(feature.properties['tags/water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/fee'] !== null ? Autolinker.link(String(feature.properties['tags/fee'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator'] !== null ? Autolinker.link(String(feature.properties['tags/operator'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:village'] !== null ? Autolinker.link(String(feature.properties['tags/addr:village'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:country'] !== null ? Autolinker.link(String(feature.properties['tags/addr:country'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:type'] !== null ? Autolinker.link(String(feature.properties['tags/pump:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:access'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:access'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:county'] !== null ? Autolinker.link(String(feature.properties['tags/addr:county'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lit'] !== null ? Autolinker.link(String(feature.properties['tags/lit'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/unisex'] !== null ? Autolinker.link(String(feature.properties['tags/unisex'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source'] !== null ? Autolinker.link(String(feature.properties['tags/source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/comment'] !== null ? Autolinker.link(String(feature.properties['tags/comment'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:style'] !== null ? Autolinker.link(String(feature.properties['tags/pump:style'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/Comments'] !== null ? Autolinker.link(String(feature.properties['tags/Comments'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/start_date'] !== null ? Autolinker.link(String(feature.properties['tags/start_date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:point'] !== null ? Autolinker.link(String(feature.properties['tags/addr:point'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_source'] !== null ? Autolinker.link(String(feature.properties['tags/water_source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/drought_prone'] !== null ? Autolinker.link(String(feature.properties['tags/drought_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/flood_prone'] !== null ? Autolinker.link(String(feature.properties['tags/flood_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source:form'] !== null ? Autolinker.link(String(feature.properties['tags/source:form'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/tank_outlet:present'] !== null ? Autolinker.link(String(feature.properties['tags/tank_outlet:present'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water:distribution'] !== null ? Autolinker.link(String(feature.properties['tags/water:distribution'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name:en'] !== null ? Autolinker.link(String(feature.properties['tags/name:en'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:street'] !== null ? Autolinker.link(String(feature.properties['tags/addr:street'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity_water'] !== null ? Autolinker.link(String(feature.properties['tags/amenity_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/date'] !== null ? Autolinker.link(String(feature.properties['tags/date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/facility_nature'] !== null ? Autolinker.link(String(feature.properties['tags/facility_nature'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored'] !== null ? Autolinker.link(String(feature.properties['tags/monitored'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored_by'] !== null ? Autolinker.link(String(feature.properties['tags/monitored_by'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/owner_water'] !== null ? Autolinker.link(String(feature.properties['tags/owner_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_communities'] !== null ? Autolinker.link(String(feature.properties['tags/water_communities'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_drying'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_drying'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_flooding'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_flooding'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr_subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr_subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lighting_operational'] !== null ? Autolinker.link(String(feature.properties['tags/lighting_operational'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/wash_lighting'] !== null ? Autolinker.link(String(feature.properties['tags/wash_lighting'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
//function for waterpoints on the operational 2.0
function style_Waterpoints__NON_operational_2_0() {
    return {
        pane: 'pane_Waterpoints__NON_operational_2',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(246,0,4,1.0)',
    }
}
map.createPane('pane_Waterpoints__NON_operational_2');
map.getPane('pane_Waterpoints__NON_operational_2').style.zIndex = 402;
map.getPane('pane_Waterpoints__NON_operational_2').style['mix-blend-mode'] = 'normal';
var layer_Waterpoints__NON_operational_2 = new L.geoJson(json_Waterpoints__NON_operational_2, {
    attribution: '<a href=""></a>',
    pane: 'pane_Waterpoints__NON_operational_2',
    onEachFeature: pop_Waterpoints__NON_operational_2,
    pointToLayer:  (feature, latlng) => {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Waterpoints__NON_operational_2_0(feature));
    },
});
bounds_group.addLayer(layer_Waterpoints__NON_operational_2);
function pop_Waterpoints_operational_3(feature, layer) {
    layer.on({
        mouseout: (e) => {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    //showing the information in a tabla formarte using the popup 
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['type'] !== null ? Autolinker.link(String(feature.properties['type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? Autolinker.link(String(feature.properties['id'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['lon'] !== null ? Autolinker.link(String(feature.properties['lon'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['timestamp'] !== null ? Autolinker.link(String(feature.properties['timestamp'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['version'] !== null ? Autolinker.link(String(feature.properties['version'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['changeset'] !== null ? Autolinker.link(String(feature.properties['changeset'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['user'] !== null ? Autolinker.link(String(feature.properties['user'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uid'] !== null ? Autolinker.link(String(feature.properties['uid'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity'] !== null ? Autolinker.link(String(feature.properties['tags/amenity'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/man_made'] !== null ? Autolinker.link(String(feature.properties['tags/man_made'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name'] !== null ? Autolinker.link(String(feature.properties['tags/name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operational_status'] !== null ? Autolinker.link(String(feature.properties['tags/operational_status'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump'] !== null ? Autolinker.link(String(feature.properties['tags/pump'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:block'] !== null ? Autolinker.link(String(feature.properties['tags/addr:block'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:district'] !== null ? Autolinker.link(String(feature.properties['tags/addr:district'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:parish'] !== null ? Autolinker.link(String(feature.properties['tags/addr:parish'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:settlement'] !== null ? Autolinker.link(String(feature.properties['tags/addr:settlement'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr:subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:zone'] !== null ? Autolinker.link(String(feature.properties['tags/addr:zone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator:type'] !== null ? Autolinker.link(String(feature.properties['tags/operator:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:wheelchair'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:wheelchair'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/natural'] !== null ? Autolinker.link(String(feature.properties['tags/natural'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water'] !== null ? Autolinker.link(String(feature.properties['tags/water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/fee'] !== null ? Autolinker.link(String(feature.properties['tags/fee'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/operator'] !== null ? Autolinker.link(String(feature.properties['tags/operator'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:village'] !== null ? Autolinker.link(String(feature.properties['tags/addr:village'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:country'] !== null ? Autolinker.link(String(feature.properties['tags/addr:country'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:type'] !== null ? Autolinker.link(String(feature.properties['tags/pump:type'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/toilets:access'] !== null ? Autolinker.link(String(feature.properties['tags/toilets:access'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:county'] !== null ? Autolinker.link(String(feature.properties['tags/addr:county'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lit'] !== null ? Autolinker.link(String(feature.properties['tags/lit'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/unisex'] !== null ? Autolinker.link(String(feature.properties['tags/unisex'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source'] !== null ? Autolinker.link(String(feature.properties['tags/source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/comment'] !== null ? Autolinker.link(String(feature.properties['tags/comment'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/pump:style'] !== null ? Autolinker.link(String(feature.properties['tags/pump:style'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/Comments'] !== null ? Autolinker.link(String(feature.properties['tags/Comments'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/start_date'] !== null ? Autolinker.link(String(feature.properties['tags/start_date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:point'] !== null ? Autolinker.link(String(feature.properties['tags/addr:point'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_source'] !== null ? Autolinker.link(String(feature.properties['tags/water_source'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/drought_prone'] !== null ? Autolinker.link(String(feature.properties['tags/drought_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/flood_prone'] !== null ? Autolinker.link(String(feature.properties['tags/flood_prone'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/source:form'] !== null ? Autolinker.link(String(feature.properties['tags/source:form'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/tank_outlet:present'] !== null ? Autolinker.link(String(feature.properties['tags/tank_outlet:present'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water:distribution'] !== null ? Autolinker.link(String(feature.properties['tags/water:distribution'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/name:en'] !== null ? Autolinker.link(String(feature.properties['tags/name:en'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr:street'] !== null ? Autolinker.link(String(feature.properties['tags/addr:street'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/amenity_water'] !== null ? Autolinker.link(String(feature.properties['tags/amenity_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/date'] !== null ? Autolinker.link(String(feature.properties['tags/date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/facility_nature'] !== null ? Autolinker.link(String(feature.properties['tags/facility_nature'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored'] !== null ? Autolinker.link(String(feature.properties['tags/monitored'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/monitored_by'] !== null ? Autolinker.link(String(feature.properties['tags/monitored_by'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/owner_water'] !== null ? Autolinker.link(String(feature.properties['tags/owner_water'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_communities'] !== null ? Autolinker.link(String(feature.properties['tags/water_communities'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_drying'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_drying'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/water_point_flooding'] !== null ? Autolinker.link(String(feature.properties['tags/water_point_flooding'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/addr_subcounty'] !== null ? Autolinker.link(String(feature.properties['tags/addr_subcounty'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/lighting_operational'] !== null ? Autolinker.link(String(feature.properties['tags/lighting_operational'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['tags/wash_lighting'] !== null ? Autolinker.link(String(feature.properties['tags/wash_lighting'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
//function fpr styling the waterpoints operational 3.0
function style_Waterpoints_operational_3_0() {
    return {
        pane: 'pane_Waterpoints_operational_3',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(9,204,2,1.0)',
    }
}
map.createPane('pane_Waterpoints_operational_3');
map.getPane('pane_Waterpoints_operational_3').style.zIndex = 403;
map.getPane('pane_Waterpoints_operational_3').style['mix-blend-mode'] = 'normal';
var layer_Waterpoints_operational_3 = new L.geoJson(json_Waterpoints_operational_3, {
    attribution: '<a href=""></a>',
    pane: 'pane_Waterpoints_operational_3',
    onEachFeature: pop_Waterpoints_operational_3,
    pointToLayer: (feature, latlng) => {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Waterpoints_operational_3_0(feature));
    },
});
bounds_group.addLayer(layer_Waterpoints_operational_3);
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="legend/Waterpoints_operational_3.png" /> Waterpoints_operational': layer_Waterpoints_operational_3,'<img src="legend/Waterpoints__NON_operational_2.png" /> Waterpoints__NON_operational': layer_Waterpoints__NON_operational_2,'Service Areas<br /><table><tr><td style="text-align: center;">&emsp;&emsp;<img src="legend/counts_1_0850.png" /></td><td> 0 - 85 </td></tr><tr><td style="text-align: center;">&emsp;&emsp;<img src="legend/counts_1_852411.png" /></td><td> 85 - 241 </td></tr><tr><td style="text-align: center;">&emsp;&emsp;<img src="legend/counts_1_2414832.png" /></td><td> 241 - 483 </td></tr><tr><td style="text-align: center;">&emsp;&emsp;<img src="legend/counts_1_4839343.png" /></td><td> 483 - 934 </td></tr><tr><td style="text-align: center;">&emsp;&emsp;<img src="legend/counts_1_93422584.png" /></td><td> 934 - 2258 </td></tr></table>': layer_counts_1,"Positron": overlay_Positron_0,},{collapsed:false}).addTo(map);
setBounds();
