"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "../css/sidebarSpecification/sidebarSpecification.css";
import { caminhoneData } from "../content/caminhoneData";
import { SidebarSpecificationProps, FiltersState } from "../types/components/sidebarSpecification";

export default function SidebarSpecification({ filters, setFilters }: SidebarSpecificationProps) {
  const sidebarTruck = "/sidebartruck.png";
  const iconKg = "/icons/kg.svg";
  const iconWheel = "/icons/wheel.svg";

  const linksData = [
    {
      title: "Lei da balança",
      icon: iconKg,
      link: "/lei-da-balanca",
    },
    {
      title: "Eixos e pesos",
      icon: iconWheel,
      link: "/eixos-e-pesos",
    },
  ];

  const eixosUnicos = Array.from(
    new Set(caminhoneData.map((item) => item.totalDeEixos))
  ).sort((a, b) => a - b);

  const [localFilters, setLocalFilters] = useState<FiltersState>({
    tipoCaminhao: filters.tipoCaminhao,
    combinacaoVeiculos: filters.combinacaoVeiculos,
    numeroEixos: filters.numeroEixos,
  });

  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  function handleFiltroChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  }

  function handleBuscar() {
    setFilters(localFilters);
  }

  function toggleMobileExpand() {
    setIsMobileExpanded((prev) => !prev);
  }

  return (
    <>
      <div className="hidden lg:flex bg-white w-[25rem] shadow-md overflow-y-auto flex-col gap-6 sidebar-desktop">
        <div className="specification-green flex items-center p-6">
          <h3 className="text-white text-center mb-2">
            Especificações
            <br />
            do caminhão
          </h3>
          <Image src={sidebarTruck} alt="Truck" width={200} height={200} />
        </div>

        <div className="flex flex-col p-4">
          <div className="flex flex-col gap-4">
            <h4 className="sidebar-title">Tipo de caminhão</h4>
            <select
              className="sidebar-select"
              name="tipoCaminhao"
              onChange={handleFiltroChange}
              value={localFilters.tipoCaminhao}
            >
              <option value="">Selecione o tipo</option>
              <option value="caminhao">Caminhão</option>
              <option value="carreta">Carreta</option>
              <option value="cavalo">Cavalo Mecânico</option>
            </select>

            <h4 className="sidebar-title">Veículos ou combinações</h4>
            <select
              className="sidebar-select"
              name="combinacaoVeiculos"
              onChange={handleFiltroChange}
              value={localFilters.combinacaoVeiculos}
            >
              <option value="">Selecione a combinação</option>
              <option value="caminhao">Caminhão (único)</option>
              <option value="carreta">Carreta (reboque)</option>
              <option value="cavalo">Cavalo + Reboque</option>
            </select>

            <h4 className="sidebar-title">Número de eixos</h4>
            <select
              className="sidebar-select"
              name="numeroEixos"
              onChange={handleFiltroChange}
              value={localFilters.numeroEixos}
            >
              <option value="all">Todos</option>
              {eixosUnicos.map((eixo) => (
                <option key={eixo} value={String(eixo)}>
                  {eixo} eixos
                </option>
              ))}
            </select>

            <button className="sidebar-button flex items-center gap-2 justify-center" onClick={handleBuscar}>
              Consultar
              <Image src="/icons/search.svg" alt="Ícone Pesquisar" width={18} height={18} />
            </button>

            <div className="sidebar-links flex flex-col gap-3 mt-4">
              {linksData.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="flex items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  <Image src={link.icon} alt={link.title} width={20} height={20} />
                  <span className="text-gray-700 font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`
          lg:hidden
          fixed bottom-0 left-0 right-0 
          bg-gray-50 shadow-lg rounded-t-2xl 
          px-4 py-4 z-50 
          transition-all
        `}
        style={{
          height: isMobileExpanded ? "75vh" : "25vh",
        }}
      >
        <motion.div
          className="w-12 h-1 bg-gray-300 mx-auto rounded-full mb-4 cursor-pointer"
          onDragEnd={(event, info) => {
            if (info.offset.y < -50) setIsMobileExpanded(true);
            else if (info.offset.y > 50) setIsMobileExpanded(false);
          }}
          onClick={toggleMobileExpand}
        />

        <div className="space-y-4 overflow-auto h-full pb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">
              Especificações do caminhão
            </h3>
            <Image src={sidebarTruck} alt="Truck" width={100} height={100} />
          </div>
          <h4 className="sidebar-title">Tipo de caminhão</h4>
          <select
            className="sidebar-select"
            name="tipoCaminhao"
            onChange={handleFiltroChange}
            value={localFilters.tipoCaminhao}
          >
            <option value="">Selecione o tipo</option>
            <option value="caminhao">Caminhão</option>
            <option value="carreta">Carreta</option>
            <option value="cavalo">Cavalo Mecânico</option>
          </select>

          <h4 className="sidebar-title">Veículos ou combinações</h4>
          <select
            className="sidebar-select"
            name="combinacaoVeiculos"
            onChange={handleFiltroChange}
            value={localFilters.combinacaoVeiculos}
          >
            <option value="">Selecione a combinação</option>
            <option value="caminhao">Caminhão (único)</option>
            <option value="carreta">Carreta (reboque)</option>
            <option value="cavalo">Cavalo + Reboque</option>
          </select>

          <h4 className="sidebar-title">Número de eixos</h4>
          <select
            className="sidebar-select"
            name="numeroEixos"
            onChange={handleFiltroChange}
            value={localFilters.numeroEixos}
          >
            <option value="all">Todos</option>
            {eixosUnicos.map((eixo) => (
              <option key={eixo} value={String(eixo)}>
                {eixo} eixos
              </option>
            ))}
          </select>

          <button className="sidebar-button flex items-center gap-2 justify-center" onClick={handleBuscar}>
            Consultar
            <Image src="/icons/search.svg" alt="Ícone Pesquisar" width={18} height={18} />
          </button>

          <div className="sidebar-links flex flex-col gap-3 mt-4">
            {linksData.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="flex items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Image src={link.icon} alt={link.title} width={20} height={20} />
                <span className="text-gray-700 font-medium">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
