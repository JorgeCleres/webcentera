"use client";

import React, { useState } from "react";
import CardCaminhao from "./CardCaminhao";
import { caminhoneData } from "../content/caminhoneData";
import { Filters, ListaCaminhoesProps } from "../types/components/listaCaminhoes";

import '../css/listaCaminhoes/listaCaminhoes.css';

function isSearchDone(filters: Filters) {
  return (
    filters.tipoCaminhao !== "" ||
    filters.combinacaoVeiculos !== "" ||
    filters.numeroEixos !== "all"
  );
}

export default function ListaCaminhoes({ filters }: ListaCaminhoesProps) {
  const [mostrarCaminhao, setMostrarCaminhao] = useState(true);

  const hasSearched = isSearchDone(filters);

  const dataFiltrada = caminhoneData.filter((caminhao) => {
    if (filters.numeroEixos !== "all") {
      const totalEixosString = caminhao.totalDeEixos.toString();
      if (totalEixosString !== filters.numeroEixos) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="p-4 mb-[10rem] lg:mb-10">
      <div className="flex flex-col gap-4 justify-center items-center">
        {!hasSearched ? (
          <div className="flex justify-center">
            <p className="search-title max-w-[30rem]">
              Selecione os filtros ao lado e clique em consultar
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="search-title">Resultado da consulta</h2>
            <p className="search-subtitle">
              Caminhão Total com{" "}
              {filters.numeroEixos === "all"
                ? "todos os eixos"
                : `${filters.numeroEixos} eixos`}
            </p>
          </div>
        )}
        <div className="flex gap-2 justify-center">
          <button
            className={`px-4 py-2 mr-2 rounded-lg ${
              mostrarCaminhao
                ? "btn-list-truck-active"
                : "btn-list-truck-inactive"
            }`}
            onClick={() => setMostrarCaminhao(true)}
          >
            Caminhões
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              !mostrarCaminhao
                ? "btn-list-truck-active"
                : "btn-list-truck-inactive"
            }`}
            onClick={() => setMostrarCaminhao(false)}
          >
            Eixos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {mostrarCaminhao ? (
          // Modo Caminhões: renderiza os cards normalmente
          dataFiltrada.map((caminhao) => (
            <CardCaminhao
              key={caminhao.codigo}
              caminhao={caminhao}
              mostrarCaminhao={mostrarCaminhao}
            />
          ))
        ) : (
          // Modo Eixos: filtra imagens duplicadas mantendo a mesma estrutura e estilização
          (() => {
            const uniqueEixosMap = new Map<
              string,
              { eixo: { tipo: string; img: string }; caminhao: typeof caminhoneData[number] }
            >();

            dataFiltrada.forEach((caminhao) => {
              caminhao.eixoImg.forEach((eixo) => {
                if (!uniqueEixosMap.has(eixo.img)) {
                  uniqueEixosMap.set(eixo.img, { eixo, caminhao });
                }
              });
            });

            const uniqueEixos = Array.from(uniqueEixosMap.values());

            return uniqueEixos.map((item, index) => {
              const { eixo, caminhao } = item;
              return (
                <div key={index} className="card-caminhao-container">
                  <div className="flex flex-col md:flex-row gap-2 mt-4">
                    <div className="flex flex-col items-start w-full gap-4">
                      <img
                        src={eixo.img}
                        alt={`Imagem de eixo tipo ${eixo.tipo} do código ${caminhao.codigo}`}
                        className="w-full object-contain mb-2 max-w-[35rem] max-h-[10rem] flex-1"
                      />
                      <div className="flex flex-col md:flex-row w-full gap-1 items-start">
                        <p className="micro-cards">
                          <strong>Código:</strong> <span>{caminhao.codigo}</span>
                        </p>
                        <p className="micro-cards">
                          <strong>CMT Mínimo:</strong> {caminhao.cmtMinimo}
                        </p>
                        <p className="micro-cards">
                          <strong>Peso Máximo por Eixo:</strong> {caminhao.pesoMaximoPorEixo.tipo}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start w-full md:w-[70%] gap-1">
                      <div className="flex w-full gap-1">
                        <p className="micro-cards">
                          <strong>Total de Eixos:</strong> {caminhao.totalDeEixos}
                        </p>
                        <p className="micro-cards">
                          <strong>PBT:</strong> {caminhao.pbt}
                        </p>
                      </div>
                      <p className="micro-cards">
                        <strong>Precisa de AET:</strong> {caminhao.precisaDeAET}
                      </p>
                      <div className="flex w-full gap-1">
                        <p className="micro-cards">
                          <strong>Comprimento Minimo:</strong> {caminhao.comprimentoMinimo}
                        </p>
                        <p className="micro-cards">
                          <strong>Comprimento Máximo:</strong> {caminhao.comprimentoMaximo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          })()
        )}
      </div>
    </div>
  );
}
