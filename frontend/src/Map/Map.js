import React, {Component} from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

export default function MapComp() {
  // const myMap = L.map('mapid', {
  //   center: [37.7749, -122.4194],
  //    zoom: 13
  //  })

  const position = [51.505, -0.09]
  const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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