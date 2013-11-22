OSMembedded
===========

A switch2osm example packaged as a BlackBerry WebWorks application, including access to local tile sources

It uses "Leaflet" to display tiles, and is based on the canonical example here:
http://switch2osm.org/using-tiles/getting-started-with-leaflet/

A tile source "images/osm_tiles/{z}/{x}/{y}.png" has been added as the default, and a series of tiles generated externally (on a server set up as per http://switch2osm.org/serving-tiles/manually-building-a-tile-server-12-04/).  There's also a tile source defined for external OSM "Standard map" tiles.  

A version of this called "MatlockMap" (with tiles generated around Matlock, Derbyshire) has been uploaded to Blackberry World and will shortly be available at http://appworld.blackberry.com/webstore/content/35139898 .

See the comments inside "leaflet_embed.js" for more information about what tile layers would work, including how to access tiles store in the device memory external to the application, or on the SD card.

Although this is a Blackberry WebWorks example, other than the commented-out file paths in the JavaScript, there's no Blackberry-specific code in it - it should be relatively straightforward to package for other platforms using PhoneGap or similar.


