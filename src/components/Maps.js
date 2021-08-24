import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { v4 as uuid4 } from "uuid";
// Variables
const libraries = ["places"];

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const [markers, setMarkers] = useState([]);

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  let towns = {
    erstein: { lat: 48.4277162, lng: 7.6616846 },
    strasbourg: { lat: 48.584614, lng: 7.7507127 },
  };

  let towns2 = [
    { erstein: { lat: 48.4277162, lng: 7.6616846 } },
    { strasbourg: { lat: 48.584614, lng: 7.7507127 } },
  ];

  console.log(Marker);
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={towns.strasbourg}
    >
      <Marker
        key={uuid4()}
        position={{ lat: towns.erstein.lat, lng: towns.erstein.lng }}
      />
    </GoogleMap>
  );
};

// Style
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export default Maps;
