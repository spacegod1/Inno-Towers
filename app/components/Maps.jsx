"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "24.5rem",
  height: "24.5rem",
};

const center = {
  lat: 5.601259,
  lng: -0.142612,
};

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA514qlhNoneum7iH_-DIRdatEOMwiu70o",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: 5.601259, lng: -0.142612 }} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

("AIzaSyBDySjc-P6skhOiipbjNoTdH8e7Xnt4KjQ");
("lat: 5.601259, lng: -0.142612");
