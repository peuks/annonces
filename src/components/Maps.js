import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { v4 as uuid4 } from "uuid";
import mapsPoint from "../images/mapsPoint.svg";
// Variables
const libraries = ["places"];
console.log(mapsPoint);
const Maps = ({ properties, centerMap }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const [markers, setMarkers] = useState({ lat: 48.584614, lng: 7.7507127 });

  console.log();
  useEffect(() => {
    if (centerMap) {
      setMarkers({ lat: centerMap.lat, lng: centerMap.lon });
    }
  }, [centerMap]);

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={markers}>
      {properties &&
        properties.map(() => {
          return (
            <Marker
              key={uuid4()}
              icon={{
                url: mapsPoint,
                scaledSize: new window.google.maps.Size(72, 72),
              }}
              position={markers}
            />
          );
        })}
    </GoogleMap>
  );
};

// Style
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export default Maps;
