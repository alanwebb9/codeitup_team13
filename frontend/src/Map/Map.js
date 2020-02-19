import React, { useEffect, useRef } from "react";
import L from "leaflet";

  const style = {
    width: "100%",
    height: "300px"
  };

  const mapbox_url =
   "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg"

  const map_bounds = [
    [51.360007, -10.743767],
    [55.391440, -5.497318]
  ]

function Map({ markerPosition }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [53, -7],
      zoom: 7,
      minZoom: 7,
      bounds: map_bounds,
      maxBounds: map_bounds,
      layers: [
        L.tileLayer(mapbox_url, {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add marker
  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(markerPosition);
    } else {
      markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
    }
  }, [markerPosition]);

  // request stop location
  useEffect( () => {
    const fetchProperty = () => {
      const request = new XMLHttpRequest();
      request.addEventListener("load", () => {
        console.log(request.responseText);
      });
      request.open("GET", "http://127.0.0.1:5000/generateStop");
      request.send();
    };
    fetchProperty();
  }, [])

  return <div id="map" style={style} />;
}

export default Map;
