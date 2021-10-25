import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

/* container style */
const containerStyle = {
  width: "400px",
  height: "400px",
};
/* --------------- */

const TestComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "***************************",
  });

  const [center, setCenter] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let newPosition = {};
      newPosition.lat = position.coords.latitude;
      newPosition.lng = position.coords.longitude;

      setCenter(newPosition);

      console.log(newPosition);
    });
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      ></GoogleMap>
    )
  );
};

export default TestComponent;
