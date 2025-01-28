"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "../css/resultSidebar/resultSidebar.css";

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

interface ResultSidebarProps {
  onClose: () => void;
  routeData: RouteData;
}

export default function ResultSidebar({
  onClose,
  routeData,
}: ResultSidebarProps) {
  const iconClose = "/icons/close.svg";
  const iconSearch = "/icons/search.svg";

  const handleViewOnMaps = () => {
    const origin = encodeURIComponent(routeData.origem);
    const destination = encodeURIComponent(routeData.destino);
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 bottom-0 md:w-[25rem] w-full bg-white shadow-lg p-4 flex flex-col gap-4 z-[9999999999] overflow-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onClose}
          className="bg-[#23252F] p-2 rounded-md cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <Image src={iconClose} alt="Close" width={24} height={24} />
        </button>
        <h2 className="resultsidebar-title">Sua Rota</h2>
        <div className="p-2 rounded-md cursor-pointer w-8 h-8 flex items-center justify-center">
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="destination-text">
            {routeData.origem} | {routeData.destino}
          </p>
          <p className="kilometer-text">
            <span className="text-black">
              {routeData.distanciaKm.toFixed(2)} Km – {routeData.tempoTexto}
            </span>
          </p>
        </div>
        <button className="destination-button" onClick={onClose}>
          Editar
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="result-table-title">Combustível e distância</h3>
        <div className="border border-[#ECECEC] rounded-lg p-2 flex flex-col gap-3">
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Total da Distância:</p>
            <p>{routeData.distanciaKm.toFixed(2)} Km</p>
          </div>
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Tempo Estimado:</p>
            <p>{routeData.tempoTexto}</p>
          </div>
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Preço do Litro:</p>
            <p>R$ {routeData.precoLitro.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="result-table-subtext">Gasto com combustível:</p>
            <p className="result-table-value">
              R$ {routeData.gastoCombustivel.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Pedágios */}
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="result-table-title">Gastos aproximados com Pedágios</h3>
        <div className="border border-[#ECECEC] rounded-lg p-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="result-table-subtext">Pedágio estimado:</p>
            <p className="result-table-value">
              R$ {routeData.custoPedagios.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Valor total */}
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="result-table-title">Valor total</h3>
        <div className="border border-[#ECECEC] rounded-lg p-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="result-table-subtext">Total estimado:</p>
            <p className="result-table-value">
              R${" "}
              {(routeData.gastoCombustivel + routeData.custoPedagios).toFixed(
                2
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Frete e Resultado */}
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="result-table-title">Frete e Resultado</h3>
        <div className="border border-[#ECECEC] rounded-lg p-2 flex flex-col gap-3">
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Frete Proposto:</p>
            <p>R$ {routeData.freteProposto.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Volume de Carga:</p>
            <p>
              {routeData.volumeCarga.toLocaleString("pt-BR")}{" "}
              {routeData.unidadeMedida}
            </p>
          </div>
          <div className="flex justify-between border-b border-[#ECECEC] pt-1 result-table-subtext">
            <p>Frete por Volume:</p>
            <p>
              R$ {routeData.fretePorVolume.toFixed(2).replace(".", ",")} /{" "}
              {routeData.unidadeMedida}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="result-table-subtext">Resultado Estimado:</p>
            <p className="result-table-value">
              R$ {routeData.lucroLiquido.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div>
        <a
          className="text-base underline text-gray-500 font-normal"
          href="https://anttlegis.datalegis.inf.br/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=RES&numeroAto=00006034&seqAto=000&valorAno=2024&orgao=DG/ANTT/MT&cod_modulo=161&cod_menu=8557"
        >
          Resolução Nº 6.034, de 18 de Janeiro de 2024
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-4">
        <button
          className="sidebar-button flex justify-center items-center gap-2"
          onClick={handleViewOnMaps}
        >
          Visualizar no Maps
          <Image
            src={iconSearch}
            alt="Ícone Visualizar no Maps"
            width={18}
            height={18}
          />
        </button>
        <button className="finalize-route" onClick={onClose}>
          Finalizar rota
        </button>
      </div>
    </motion.div>
  );
}
