"use client";

import { useEffect, useRef } from "react";
import useGoogleMap from "../hooks/useGoogleMap";

interface MapProps {
  directions?: google.maps.DirectionsResult | null;
}

export default function Map({ directions }: MapProps) {
  const { mapRef, map } = useGoogleMap();
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );

  useEffect(() => {
    if (map) {
      if (!directionsRendererRef.current) {
        directionsRendererRef.current = new google.maps.DirectionsRenderer();
        directionsRendererRef.current.setMap(map);
      }

      if (directions) {
        directionsRendererRef.current.setDirections(directions);
      } else {
        directionsRendererRef.current.setDirections({
          routes: [],
        } as unknown as google.maps.DirectionsResult);
      }
    }
  }, [map, directions]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}
