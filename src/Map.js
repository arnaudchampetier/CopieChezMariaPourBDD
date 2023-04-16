import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 45.767735,
    lng: 4.855177,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = (map) => {
    setMap(map);
    setMarkerPosition({ lat: 45.767735, lng: 4.855177 });
    console.log("Map loaded successfully");
  };

  if (!isLoaded) return <div>Loading...</div>;

  const markerOptions = {
    url: "./assets/images/marker.png",
    scaledSize: new window.google.maps.Size(50, 50),
  };

  console.log("markerPosition", markerPosition);
  console.log("markerOptions", markerOptions);
  console.log("map", map);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
        center={markerPosition}
        zoom={16}
        onLoad={onLoad}
      >
        {map && (
          <MarkerF
            key={new Date().getTime()}
            title="My position"
            position={markerPosition}
            icon={markerOptions}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
