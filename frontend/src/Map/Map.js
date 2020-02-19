import React, {Component} from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

export default function MapComp() {
  const mapbox_url =
   "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg"

  const position = [51.505, -0.09]
  const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      url={mapbox_url}
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
  )

  return (
    <div id="map-container">
      { map }
    </div> 
  )
}