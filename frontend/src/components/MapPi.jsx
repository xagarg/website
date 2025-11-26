// src/components/MapPin.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Replace with your desired location
const location = {
  lat: 37.7749, // latitude
  lng: -122.4194, // longitude
};

function MapPi() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15} // zoom closer to the pin
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapPi;
