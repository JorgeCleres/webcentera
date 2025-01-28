"use client";

import { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import ResultSidebar from "../components/ResultSidebar";

import '../css/home/home.css';

interface RouteData {
  origem: string;
  destino: string;
  distanciaKm: number;
  tempoTexto: string;
  precoLitro: number;
  gastoCombustivel: number;
  pedagios: number;
  custoPedagios: number;
  freteProposto: number;
  volumeCarga: number;
  unidadeMedida: string;
  fretePorVolume: number;
  lucroLiquido: number;
}

export default function HomePage() {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDirectionsComputed = (directionsResult: google.maps.DirectionsResult, data: RouteData) => {
    setDirections(directionsResult);
    setRouteData(data);
    setShowResult(true);
  };

  const closeResultSidebar = () => setShowResult(false);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", overflow: "hidden" }}>
      <Sidebar onDirectionsComputed={handleDirectionsComputed} />
      <Map directions={directions} />
      {showResult && routeData && (
        <ResultSidebar onClose={closeResultSidebar} routeData={routeData} />
      )}
    </div>
  );
}
