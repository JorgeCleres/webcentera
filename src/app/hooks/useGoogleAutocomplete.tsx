"use client";

import { useEffect, useState } from "react";

interface UseGoogleAutocompleteProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function useGoogleAutocomplete({ inputRef }: UseGoogleAutocompleteProps) {
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.google || !inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      // Remova ou ajuste as restrições para mais sugestões
      // types: ['(cities)'],
      // componentRestrictions: { country: 'br' }
    });

    autocomplete.addListener('place_changed', () => {
      const selectedPlace = autocomplete.getPlace();
      if (selectedPlace && selectedPlace.geometry) {
        setPlace(selectedPlace);
      } else {
        setPlace(null);
      }
    });
  }, [inputRef]);

  return { place };
}
