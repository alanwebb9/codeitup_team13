import React, {Component, useState, useEffect} from 'react';
import { Map, Marker, Popup, Polyline, TileLayer } from 'react-leaflet';
import L from 'leaflet';

export default function MapComp() {

  const mapbox_url =
   "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg"

  const map_bounds = [
    [51.360007, -10.743767],
    [55.391440, -5.497318]
  ]
  
  useEffect(() => {
    // create map
    L.map('map', {
      center: [53, -7],
      zoom: 7,
      minZoom: 7,
      bounds: map_bounds,
      maxBounds: map_bounds,
      layers: [
        L.tileLayer(mapbox_url, {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  return (
    <div id="map"></div> 
  )
}



function _getLeafletMapElement(mapElm) {
  // setMapElm(mapElm.leafletElement);
  // return elm;
}

function addCircleMarker(latLng) {
  L.circleMarker(latLng).addTo(_getLeafletMapElement);
}

// export default class MapComp extends React.Component {

//   componenetDidMount() {
//     this.mapbox_url =
//       "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg"

//     this.map_center = [53.428822, -7.759530]
    
//     this.map_bounds = [
//       [51.360007, -10.743767],
//       [55.391440, -5.497318]
//     ]

//     this.map = (
//       <Map minZoom={7} bounds={this.map_bounds} maxBounds={this.map_bounds}
//           ref={  (mapElm) => this._getLeafletMapElement(mapElm) }>
//         <TileLayer
//           url={this.mapbox_url}
//           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />
//       </Map>
//     )

//     this.leafletelement = this.map.Map.leafletElement
//   }

//   _getLeafletMapElement = (mapElm) => {
//     this.leafletMapElm = mapElm.leafletElement;
//   }

//   render() {
//     // return (<div id="map-container"> { this.map } </div> 
//     return (
//         <div class="leaflet-container">{this.map}</div>
//         // <Map center={this.map_center} zoom={13} minZoom={7} bounds={this.map_bounds} maxBounds={this.map_bounds}
//         //   ref={  (mapElm) => this._getLeafletMapElement(mapElm) }>
//         //   <TileLayer
//         //     url={this.mapbox_url}
//         //     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         //   />
//         // </Map>
//     )
    
//   }
// }