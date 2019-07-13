import React from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Map.css";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const position = [51.505, -0.09]

    const hotels = [
      { position: [51.505, -0.09] },
      { position: [51.508, -0.11] },
      { position: [51.505, -0.08] }
    ];


    return (
      <LeafletMap center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        {hotels.map(hotel => {
          return (
            <Marker position={hotel.position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          );
        })}






      </LeafletMap>
    )
  }
}