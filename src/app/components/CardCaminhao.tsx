import React from "react";
import { CardCaminhaoProps } from "../types/components/cardCaminhao";
import "../css/cardCaminhao/cardCaminhao.css";

export default function CardCaminhao({ caminhao, mostrarCaminhao }: CardCaminhaoProps) {
  if (mostrarCaminhao) {
    return (
      <div className="card-caminhao-container">
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="flex flex-col items-start w-full gap-4">
            <img
              src={caminhao.caminhaoImg}
              alt={`Imagem de caminhão do código ${caminhao.codigo}`}
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
  } else {
    return (
      <>
        {caminhao.eixoImg.map((eixo, index) => (
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
        ))}
      </>
    );
  }
}
