"use client";

import Image from "next/image";
import '../../css/home/transportadora.css';
import Footer from '../../components/Footer';
import Duvidas from '../../components/Duvidas';
import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

type TransportadoraInfo = {
  titulo: string;
  imagem: string;
  banner: string;
  contato: {
    telefone: string;
    telefone2: string;
    email: string;
    endereco: string;
  };
};

const transportadorasInfo: Record<string, TransportadoraInfo> = {
  "pianetto": {
    titulo: "INFORMAÇÕES PARA TRANSPORTADORA ESPECÍFICA",
    imagem: "/img-transportadora.png",
    banner: "/pianetto.png",
    contato: {
      telefone: "+55 (64) 3050 2875",
      telefone2: "+55 (64) 9 9903 2381",
      email: "contato@pianettotransportes.com.br",
      endereco: "Rua 29, QD.20, LT.08, Nº 1000, SL.139 Vila Rocha - Rio Verde - Goiás CEP: 75905-836",
    },
  },
};

const informacaoPadrao: TransportadoraInfo = {
  titulo: "DISPOSIÇÕES GERAIS PARA SEU EMBARQUE",
  imagem: "/img-transportadora.png",
  banner: "/transpostadora.png",
  contato: {
    telefone: "",
    telefone2: "",
    email: "",
    endereco: "",
  },
};

// Componente que usa useSearchParams
function TransportadoraContent() {
  const searchParams = useSearchParams();
  const params = useParams();
  const slug = searchParams.get('slug') || params.slug || '';
  const [info, setInfo] = useState<TransportadoraInfo>(informacaoPadrao);

  useEffect(() => {
    setInfo(transportadorasInfo[slug[0]] || informacaoPadrao);
  }, [slug]);

  return (
    <>
      <div
        className="banner-transportadora"
        style={{
          backgroundImage: `linear-gradient(270deg, #555555c0, #858585b5), url(${info.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2>Transportadora {slug && `- ${slug[0].charAt(0).toUpperCase() + slug.slice(1)}`}</h2>
      </div>

      <div className="transportadora">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h3>{info.titulo}</h3>
            <p>Fique atento a todas as informações</p>
            <p>O prazo previsto para realização do procedimento de carga da mercadoria, está descrito detalhamento na Ordem de Carregamento liberada. Em caso de comparecimento espontâneo do motorista em dia e horário definido na Ordem de Carregamento marcado anterior ao estipulado acima não há incidência de quaisquer tarifas ou encargos adicionais;</p>
            <p>Motorista e/ou proprietário ficam cientes que a autorização de carregamento não gera a obrigatoriedade de embarque, e que, decorrida a data prevista para embarque, sem a efetivação de carregamento, motorista e/ou proprietário ficam liberados do encargo;</p>
            <p>Excedido o referido prazo para a realização da carga (nos casos em que efetivado o carregamento) ou descarga da mercadoria, será devida a quantia de R$ 0,45 por tonelada a cada hora parada, contando-se as horas paradas a partir da 24:00 horas após o devido registro de chegada do veículo no destino;</p>
            <p>Demais informações estão apresentado no contrato passa a vigorar a partir da sua apresentação para embarque. </p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <Image
              src={info.imagem}
              alt=""
              width={800}
              height={800}
              priority
            />
          </div>
        </div>

        <div className="contato-transportadora mt-10 p-6 bg-gray-100 rounded shadow">
          <h4 className="text-xl font-semibold mb-4">Entre em contato com a transportadora</h4>
          <p><strong>Telefone:</strong> {info.contato.telefone}</p>
          <p><strong>Telefone:</strong> {info.contato.telefone2}</p>
          <p><strong>Email:</strong> {info.contato.email}</p>
          <p><strong>Endereço:</strong> {info.contato.endereco}</p>
        </div>
      </div>

      <Duvidas />
      <Footer />
    </>
  );
}

// Componente principal com Suspense
export default function TransportadoraDinamicaPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <TransportadoraContent />
    </Suspense>
  );
}