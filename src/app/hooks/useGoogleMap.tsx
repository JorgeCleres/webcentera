"use client";

import { useEffect, useRef, useState } from "react";

const useGoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [originAutocomplete, setOriginAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const initMap = (lat: number, lng: number) => {
    if (!window.google || !mapRef.current) return;

    const mapInstance = new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 14,
    });

    setMap(mapInstance);
  };

  const setupAutocomplete = (inputId: string, callback: (place: google.maps.places.PlaceResult | null) => void) => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        callback(place);
      });
      return autocomplete;
    }
    return null;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      initMap(-23.55052, -46.633307); // Fallback para São Paulo

      setOriginAutocomplete(
        setupAutocomplete("origin-input", (place) => {
          console.log("Origem selecionada:", place);
        })
      );

      setDestinationAutocomplete(
        setupAutocomplete("destination-input", (place) => {
          console.log("Destino selecionado:", place);
        })
      );
    }
  }, []);

  return { mapRef, map, originAutocomplete, destinationAutocomplete };
};

export default useGoogleMap;
