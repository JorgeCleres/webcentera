"use client";

import { useState } from "react";

interface CalculateRouteOptions {
  origem: google.maps.LatLngLiteral;
  destino: google.maps.LatLngLiteral;
  calcularVolta: boolean;
}

interface UseDirectionsReturn {
  calculateRoute: (opts: CalculateRouteOptions) => Promise<google.maps.DirectionsResult[]>;
  loading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
}

export default function useDirections(): UseDirectionsReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateRoute = async ({ origem, destino, calcularVolta }: CalculateRouteOptions) => {
    if (!window.google) {
      setError("Google Maps não disponível");
      return [];
    }

    setLoading(true);
    setError(null);

    const directionsService = new google.maps.DirectionsService();

    const requestIda: google.maps.DirectionsRequest = {
      origin: origem,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING
    };

    try {
      const [resultIda] = await Promise.all([
        directionsService.route(requestIda)
      ]);

      const results: google.maps.DirectionsResult[] = [resultIda];

      if (calcularVolta) {
        const requestVolta: google.maps.DirectionsRequest = {
          origin: destino,
          destination: origem,
          travelMode: google.maps.TravelMode.DRIVING
        };
        const resultVolta = await directionsService.route(requestVolta);
        results.push(resultVolta);
      }

      setLoading(false);
      return results;
    } catch (err) {
      console.error(err);
      setError("Erro ao calcular rota");
      setLoading(false);
      return [];
    }
  }

  return { calculateRoute, loading, error, setError };
}
