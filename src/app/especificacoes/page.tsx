"use client";

import { useState } from "react";
import SidebarSpecification from "../components/SidebarSpecification";
import ListaCaminhoes from "../components/ListaCaminhoes";

export default function Especificacoes() {
  const [filters, setFilters] = useState({
    tipoCaminhao: "",
    combinacaoVeiculos: "",
    numeroEixos: "all",
  });

  return (
    <div className="flex h-screen">
      <SidebarSpecification filters={filters} setFilters={setFilters} />

      <div className="flex-grow p-4 overflow-auto">
        <ListaCaminhoes filters={filters} />
      </div>
    </div>
  );
}
