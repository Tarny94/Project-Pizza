import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapStyle.scss";

const mapStyles = {
  width: "100%",
  height: "400px",
  borderTop: "0.5px solid gray",
  marginTop: "5rem",
};

const MapContainer = (props) => (
  <div className="map-container">
    {" "}
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.531827, lng: 25.548195 }}
    >
      <Marker position={{ lat: 47.531, lng: 25.548 }} />
    </Map>
  </div>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyDBAZ2kyJpoJnBrgtmUykSG3mNwbCpIjuE",
})(MapContainer);
