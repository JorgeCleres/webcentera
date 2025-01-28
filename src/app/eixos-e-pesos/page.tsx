import SidebarInsticionais from "../components/SidebarInsticionais";
import Image from "next/image";

import "../css/institucionais/institucionais.css";

const sections = [
  {
    title: "Tipos de Eixos e Pesos Máximos",
    subtitle: "Qual a diferença entre bitrem e rodotrem?",
    text: [
      `Bitrem (vide figura abaixo) é uma combinação de veículos de carga composta por um total de sete eixos, que permite o transporte de um peso bruto total combinado PBTC de 57 toneladas. Os Semirreboques dessa combinação são interligados por um engate do tipo B (quinta-roda) e podem ser tracionados por um cavalo-mecânico 6x2 (trucado).`,
    ],
    image: "/rodotrem-bitrem.png",
  },
  {
    title: "",
    subtitle: "O que é um tri-trem?",
    text: [
      `É uma combinação de veículo de carga - CVC - formada por três Semirreboques interligados através de quinta roda, ou seja com engates do tipo B, como acontece na combinação bi-trem. Esta CVC possibilita um PBTC de 74 toneladas, a mesma do rodotrem, mas, devido às características específicas, são desenvolvidas especialmente para o transporte florestal e canavieiro.`,
    ],
    image: "/tritem.png",
  },
];

export default function EixosePesos() {
  return (
    <div className="flex w-full mb-[15rem] md:mb-0">
      <SidebarInsticionais />
      <div className="flex flex-col container mx-auto max-w-[46rem] py-10 px-4 md:px-0">
        {sections.map((section, index) => (
          <div key={index} className="w-full flex flex-col gap-6">
            {section.title && <h1 className="institucionais-title">{section.title}</h1>}
            <h2 className="institucionais-title">{section.subtitle}</h2>
            {section.text.map((paragraph, pIndex) => (
              <p key={pIndex} className="institucionais-text">{paragraph}</p>
            ))}
            {section.image && (
              <Image
                src={section.image}
                alt={section.subtitle}
                width={800}
                height={400}
                className="rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
