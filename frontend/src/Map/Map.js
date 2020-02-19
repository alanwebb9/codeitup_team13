import React, {Component} from 'react';
import { Map, Marker, Popup, Polyline, TileLayer } from 'react-leaflet';
import L from 'leaflet';

export default function MapComp() {
  const mapbox_url =
   "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg"

  const map_bounds = [
    [51.360007, -10.743767],
    [55.391440, -5.497318]
  ]
  
  const map = (
  <Map minZoom={7} bounds={map_bounds} maxBounds={map_bounds}
       ref={  (mapElm) => _getLeafletMapElement(mapElm) }>
    <TileLayer
      url={mapbox_url}
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
  </Map>
  )

  return (
    <div id="map-container">
      { map }
    </div> 
  )
}

function _getLeafletMapElement(mapElm) {
  const elm = mapElm.leafletElement;
  return elm;
}

function addCircleMarker(latLng) {
  L.circleMarker(latLng).addTo(_getLeafletMapElement);
}