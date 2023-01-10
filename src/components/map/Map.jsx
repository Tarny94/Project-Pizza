import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapStyle.scss";


const MapContainer = (props) => {
  console.log("map", props);
  return (
    <div className="map-container">
      {" "}
      <Map
        google={props.google}
        zoom={props.zoom}
        style={props.mapStyles}
        initialCenter={props.initialPosition}
      >
        <Marker position={props.position} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDBAZ2kyJpoJnBrgtmUykSG3mNwbCpIjuE",
})(MapContainer);
