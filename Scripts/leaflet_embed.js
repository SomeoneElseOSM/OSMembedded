// A very simple leaflet-based map based on the example at:
// http://switch2osm.org/using-tiles/getting-started-with-leaflet/
//
// See also:
// http://leafletjs.com/examples.html

var map;

function initmap() {
    // Tiles layers embedded in the application, in "documents" in device memory, 
    // on the SD Card, and read from the OSM standard map on the web.

    // Layers for device memory and on the SD card are currently commented out (here and below)
    // as they're not present by default

    var embUrl='images/osm_tiles/{z}/{x}/{y}.png';
    var devUrl='file:///accounts/1000/shared/documents/osm_tiles/{z}/{x}/{y}.png';
//    var sdcUrl='file:///accounts/1000/removable/sdcard/documents/osm_tiles/{z}/{x}/{y}.png';
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    var osmAttrib='Map data &copy; OpenStreetMap contributors';

    // maxZoom is restricted to 16 on the embedded layer as we haven't packaged zoom levels
    // more that that within the application.  The later MatlockMap had up to 18.
    // devLayer is also up to 16 only.

    var embLayer = new L.TileLayer(embUrl, {minZoom: 6, maxZoom: 16, attribution: osmAttrib});
    var devLayer = new L.TileLayer(devUrl, {minZoom: 6, maxZoom: 16, attribution: osmAttrib});
//    var sdcLayer = new L.TileLayer(sdcUrl, {minZoom: 6, maxZoom: 18, attribution: osmAttrib});
    var osmLayer = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 18, attribution: osmAttrib});

    var placesLayer = new L.LayerGroup();

    // Create a map centred on Matlock.
    // There's no need for a zoom control as we can use pinch to zoom.

    var map = new L.Map('map', {
	    center: new L.LatLng(53.1374, -1.5530),
	    zoom: 15,
	    layers: [ embLayer ],
	    zoomControl: false,
	    attributionControl: false
	});

    var attrib = new L.Control.Attribution;
    attrib.setPrefix( "Uses switch2osm, Leaflet" );
    attrib.removeAttribution( "Map data &copy; OpenStreetMap contributors" );
    attrib.addAttribution( "Data &copy; OpenStreetMap contributors" );
    map.addControl( attrib );

    var baseMaps = {
	"In App":       embLayer,
	"On Device":    devLayer,
//	"SD Card":      sdcLayer,
    };

    var layersControl = new L.Control.Layers( baseMaps );

// It's possible to add layers programatically, 
// but not easy to check if directories exist before doing so:

    layersControl.addBaseLayer( osmLayer, "OSM Online" );
    map.addControl(layersControl);

}
