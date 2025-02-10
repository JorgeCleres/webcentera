"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalOverlay from "./ModalOverlay";
import useDirections from "../hooks/useDirections";
import ReactGooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";

import "../css/sidebar/sidebar.css";

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

interface SidebarProps {
  onDirectionsComputed: (
    directions: google.maps.DirectionsResult,
    data: RouteData
  ) => void;
}

interface PlaceSelectOption {
  label: string;
  value: {
    place_id: string;
    description?: string;
  };
}

export default function Sidebar({ onDirectionsComputed }: SidebarProps) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [calcularVolta, setCalcularVolta] = useState(false);
  const [tipoEixo, setTipoEixo] = useState<string>("");
  const [valorCombustivel, setValorCombustivel] = useState<string>("");
  const [consumoPorLitro, setConsumoPorLitro] = useState<string>("");

  const [freteProposto, setFreteProposto] = useState<string>("");
  const [unidadeMedida, setUnidadeMedida] = useState<string>("Toneladas");
  const [volumeCarga, setVolumeCarga] = useState<string>("");

  const [origemValue, setOrigemValue] = useState<PlaceSelectOption | null>(
    null
  );
  const [destinoValue, setDestinoValue] = useState<PlaceSelectOption | null>(
    null
  );

  const { calculateRoute, loading, error, setError } = useDirections();

  const handleCloseModal = () => {
    setError(null);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function computeTollCost(
    origin: { lat: number; lng: number },
    destination: { lat: number; lng: number }
  ): Promise<{ tollCount: number; tollCost: number }> {
    try {
      // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const apiKey = 'AIzaSyBaXfQqauCl75h3YVNBw6OcTSx5SnWwM-8';
      const requestData = {
        origins: [
          {
            waypoint: {
              location: {
                latLng: { latitude: origin.lat, longitude: origin.lng },
              },
            },
            routeModifiers: {
              vehicleInfo: { emissionType: "GASOLINE" },
              tollPasses: [],
            },
          },
        ],
        destinations: [
          {
            waypoint: {
              location: {
                latLng: {
                  latitude: destination.lat,
                  longitude: destination.lng,
                },
              },
            },
          },
        ],
        travelMode: "DRIVE",
        extraComputations: ["TOLLS"],
      };

      const response = await fetch(
        "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey ?? "",
            "X-Goog-FieldMask":
              "originIndex,destinationIndex,travel_advisory.tollInfo,duration,distanceMeters,status",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        console.error("Erro ao obter pedágios:", response.statusText);
        return { tollCount: 0, tollCost: 0 };
      }

      const data = await response.json();
      const result = data[0];

      if (result?.travelAdvisory?.tollInfo) {
        const { tollInfo } = result.travelAdvisory;
        let totalToll = 0;
        if (tollInfo.estimatedPrice && tollInfo.estimatedPrice.length > 0) {
          for (const price of tollInfo.estimatedPrice) {
            const units = parseFloat(price.units || "0");
            const nanos = (price.nanos ?? 0) / 1e9;
            totalToll += units + nanos;
          }
        }
        const tollCount = tollInfo.tollPasses?.length || 0;
        return { tollCount, tollCost: totalToll };
      }
      return { tollCount: 0, tollCost: 0 };
    } catch (error) {
      console.error("Erro geral ao obter pedágios:", error);
      return { tollCount: 0, tollCost: 0 };
    }
  }

  const handleSearchRoute = async () => {
    if (!origemValue?.value?.place_id || !destinoValue?.value?.place_id) {
      alert("Selecione uma origem e destino válidos.");
      return;
    }

    try {
      const origemResults = await geocodeByPlaceId(origemValue.value.place_id);
      const origemLatLng = await getLatLng(origemResults[0]);
      const destinoResults = await geocodeByPlaceId(
        destinoValue.value.place_id
      );
      const destinoLatLng = await getLatLng(destinoResults[0]);

      const routes = await calculateRoute({
        origem: origemLatLng,
        destino: destinoLatLng,
        calcularVolta,
      });

      if (routes.length > 0) {
        const directions = routes[0];
        if (directions && directions.routes && directions.routes[0].legs) {
          const legs = directions.routes[0].legs;
          let totalDistance = 0;
          let totalDuration = 0;
          for (const leg of legs) {
            totalDistance += leg.distance?.value ?? 0;
            totalDuration += leg.duration?.value ?? 0;
          }

          if (calcularVolta) {
            totalDistance *= 2;
            totalDuration *= 2;
          }

          const distanciaKm = totalDistance / 1000;
          const days = Math.floor(totalDuration / (3600 * 24));
          const hours = Math.floor((totalDuration % (3600 * 24)) / 3600);
          const minutes = Math.floor((totalDuration % 3600) / 60);

          const tempoTexto =
            `${days > 0 ? days + " dias " : ""}` +
            `${hours > 0 ? hours + "h " : ""}` +
            `${minutes > 0 ? minutes + "min" : ""}`.trim();

          const origem = legs[0].start_address || "Origem não encontrada";
          const destino =
            legs[legs.length - 1].end_address || "Destino não encontrado";

          const tolls = await computeTollCost(origemLatLng, destinoLatLng);
          let { tollCount } = tolls;
          const { tollCost } = tolls;

          if (calcularVolta) {
            tollCount *= 2;
          }

          const precoLitro = parseFloat(valorCombustivel) || 0;
          const consumoL = parseFloat(consumoPorLitro) || 0;
          let gastoCombustivel =
            consumoL > 0 ? (distanciaKm / consumoL) * precoLitro : 0;

          if (calcularVolta) {
            gastoCombustivel *= 1;
          }

          let custoPedagiosAjustado = tollCost * (parseInt(tipoEixo) || 0);
          if (calcularVolta) {
            custoPedagiosAjustado *= 2;
          }

          const valorFreteProposto = parseFloat(freteProposto) || 0;
          const valorVolume = parseFloat(volumeCarga) || 0;

          const volumeConvertidoEmToneladas =
            unidadeMedida === "Kg" ? valorVolume / 1000 : valorVolume;

          const fretePorVolume =
            volumeConvertidoEmToneladas > 0
              ? valorFreteProposto * volumeConvertidoEmToneladas
              : 0;

          const gastoTotal = gastoCombustivel + custoPedagiosAjustado;
          const lucroLiquido = fretePorVolume - gastoTotal;

          const newRouteData: RouteData = {
            origem,
            destino,
            distanciaKm,
            tempoTexto,
            precoLitro,
            gastoCombustivel,
            pedagios: tollCount,
            custoPedagios: custoPedagiosAjustado,
            freteProposto: valorFreteProposto,
            volumeCarga: valorVolume, // Valor original digitado
            unidadeMedida,            // "Kg" ou "Toneladas"
            fretePorVolume,
            lucroLiquido,
          };

          onDirectionsComputed(directions, newRouteData);
        }
      }
    } catch (err) {
      console.error("Erro ao obter rotas:", err);
      alert("Não foi possível obter as rotas. Tente novamente.");
    }
  };

  const toggleMobileExpand = () => setIsMobileExpanded((prev) => !prev);

  if (!isClient) return null;

  return (
    <>
      {loading && (
        <ModalOverlay>
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center w-[280px]">
            <div className="w-8 h-8 border-4 border-t-[#4CAF50] border-gray-200 rounded-full animate-spin mb-4"></div>
            <span className="text-lg font-semibold text-black">Aguarde...</span>
          </div>
        </ModalOverlay>
      )}

      {error && (
        <ModalOverlay>
          <div className="bg-white p-6 rounded-2xl shadow-md w-[22.5rem] flex flex-col gap-4 text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="error-modal-title">Ops!</h3>
            <p className="error-modal-texto">
              Não foi possível realizar sua consulta. Tente novamente mais
              tarde!
            </p>
            <button onClick={handleCloseModal} className="error-modal-button">
              Voltar
            </button>
          </div>
        </ModalOverlay>
      )}

      {/* Sidebar Desktop */}
      <div className="hidden lg:flex bg-white w-[25rem] px-6 py-6 shadow-md overflow-y-auto flex-col gap-2 sidebar-desktop">
        <div className="scrollable-sidebar-content flex flex-col gap-4">
          <div className="flex flex-col gap-2 py-4">
            <h3 className="sidebar-title">Para onde quer ir?</h3>
            <div className="relative">
              <ReactGooglePlacesAutocomplete
                selectProps={{
                  value: origemValue,
                  onChange: setOrigemValue,
                  placeholder: "Origem",
                }}
              />
            </div>
            <div className="relative">
              <ReactGooglePlacesAutocomplete
                selectProps={{
                  value: destinoValue,
                  onChange: setDestinoValue,
                  placeholder: "Destino",
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-[0.875rem]">
            <span className="sidebar-title">Calcular a volta?</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={calcularVolta}
                onChange={(e) => setCalcularVolta(e.target.checked)}
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#91BA4A]
                after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                peer-checked:after:translate-x-full"
              ></div>
            </label>
          </div>

          <div className="w-full flex flex-col">
            <div>
              <label className="sidebar-title mb-2">Quantidade de Eixos</label>
              <input
                type="number"
                value={tipoEixo}
                placeholder="Quantidade de eixos"
                onChange={(e) => setTipoEixo(e.target.value)}
                className="sidebar-input"
              />
            </div>
          </div>

          <div>
            <label className="sidebar-title mb-2">
              Valor do combustível (R$)
            </label>
            <input
              type="number"
              value={valorCombustivel}
              onChange={(e) => setValorCombustivel(e.target.value)}
              placeholder="Ex.: 5.00"
              className="sidebar-input"
            />
          </div>

          <div className="py-[0.875rem]">
            <label className="sidebar-title mb-2">
              Consumo combustível (km/L)
            </label>
            <input
              type="number"
              value={consumoPorLitro}
              onChange={(e) => setConsumoPorLitro(e.target.value)}
              placeholder="Ex.: 5.0"
              className="sidebar-input"
            />
          </div>

          <div>
            <label className="sidebar-title mb-2">Frete Proposto (R$)</label>
            <input
              type="number"
              value={freteProposto}
              onChange={(e) => setFreteProposto(e.target.value)}
              placeholder="Ex.: 5000"
              className="sidebar-input"
            />
          </div>

          <div>
            <label className="sidebar-title mb-2">Unidade de Medida</label>
            <select
              value={unidadeMedida}
              onChange={(e) => setUnidadeMedida(e.target.value)}
              className="sidebar-input"
            >
              <option value="Toneladas">Toneladas</option>
              <option value="Kg">Kg</option>
            </select>
            <p className="text-sm text-gray-600 mt-1">
              Se escolher &quot;Toneladas&quot;, digite o volume em toneladas
              (ex.: 10 = 10 toneladas). Se escolher &quot;Kg&quot;, digite em
              quilogramas (ex.: 1000 = 1000 kg).
            </p>
          </div>

          <div>
            <label className="sidebar-title mb-2">Volume de Carga</label>
            <input
              type="number"
              value={volumeCarga}
              onChange={(e) => setVolumeCarga(e.target.value)}
              placeholder="Ex.: 100"
              className="sidebar-input"
            />
            <p className="text-sm text-gray-600 mt-1">
              Volume de carga será multiplicado pelo valor do frete proposto.
            </p>
          </div>

          <button className="sidebar-button" onClick={handleSearchRoute}>
            Estimar Rota
            <Image
              src="/icons/search.svg"
              alt="Ícone Pesquisar"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <motion.div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-2xl px-4 py-4 z-50 transition-all
    ${isMobileExpanded ? "h-[75vh]" : "h-[30vh]"} 
    overflow-y-auto
  `}
      >
        <motion.div
          onDragEnd={(event, info) => {
            if (info.offset.y < -50) setIsMobileExpanded(true);
            else if (info.offset.y > 50) setIsMobileExpanded(false);
          }}
          onClick={toggleMobileExpand}
          className="w-12 h-1 bg-gray-300 mx-auto rounded-full mb-2 cursor-pointer"
        />
        <div className="space-y-4">
          <h3 className="sidebar-title">Para onde quer ir?</h3>
          <div className="relative">
            <ReactGooglePlacesAutocomplete
              selectProps={{
                value: origemValue,
                onChange: setOrigemValue,
                placeholder: "Origem",
              }}
            />
          </div>
          <div className="relative">
            <ReactGooglePlacesAutocomplete
              selectProps={{
                value: destinoValue,
                onChange: setDestinoValue,
                placeholder: "Destino",
              }}
            />
          </div>

          {isMobileExpanded && (
            <>
              <div className="flex items-center justify-between">
                <span className="sidebar-title">Calcular a volta?</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcularVolta}
                    onChange={(e) => setCalcularVolta(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#91BA4A]
                    after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                    after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                    peer-checked:after:translate-x-full"
                  ></div>
                </label>
              </div>

              <div>
                <label className="sidebar-title mb-2">
                  Quantidade de Eixos
                </label>
                <input
                  type="number"
                  value={tipoEixo}
                  onChange={(e) => setTipoEixo(e.target.value)}
                  className="sidebar-input"
                  placeholder="Quantidade de eixos"
                />
              </div>

              <div>
                <label className="sidebar-title mb-2">
                  Valor do combustível (R$)
                </label>
                <input
                  type="number"
                  value={valorCombustivel}
                  onChange={(e) => setValorCombustivel(e.target.value)}
                  placeholder="Ex.: 5.00"
                  className="sidebar-input"
                />
              </div>
              <div>
                <label className="sidebar-title mb-2">
                  Consumo combustível (km/L)
                </label>
                <input
                  type="number"
                  value={consumoPorLitro}
                  onChange={(e) => setConsumoPorLitro(e.target.value)}
                  placeholder="Ex.: 5.0"
                  className="sidebar-input"
                />
              </div>

              <div>
                <label className="sidebar-title mb-2">
                  Frete Proposto (R$)
                </label>
                <input
                  type="number"
                  value={freteProposto}
                  onChange={(e) => setFreteProposto(e.target.value)}
                  placeholder="Ex.: 5000"
                  className="sidebar-input"
                />
              </div>

              <div>
                <label className="sidebar-title mb-2">Unidade de Medida</label>
                <select
                  value={unidadeMedida}
                  onChange={(e) => setUnidadeMedida(e.target.value)}
                  className="sidebar-input"
                >
                  <option value="Toneladas">Toneladas</option>
                  <option value="Kg">Kg</option>
                </select>
                <p className="text-sm text-gray-600 mt-1">
                  Se escolher &quot;Toneladas&quot;, digite o volume em
                  toneladas (ex.: 10 = 10 toneladas). Se escolher
                  &quot;Kg&quot;, digite em quilogramas (ex.: 1000 = 1000 kg).
                </p>
              </div>

              <div>
                <label className="sidebar-title mb-2">Volume de Carga</label>
                <input
                  type="number"
                  value={volumeCarga}
                  onChange={(e) => setVolumeCarga(e.target.value)}
                  placeholder="Ex.: 100"
                  className="sidebar-input"
                />
              </div>

              <button
                className="sidebar-button flex justify-center items-center gap-2"
                onClick={handleSearchRoute}
              >
                Estimar Rota
                <Image
                  src="/icons/search.svg"
                  alt="Ícone Pesquisar"
                  width={18}
                  height={18}
                />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
