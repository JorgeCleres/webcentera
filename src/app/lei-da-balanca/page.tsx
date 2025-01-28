import SidebarInsticionais from "../components/SidebarInsticionais";

import '../css/institucionais/institucionais.css'

const sections = [
  {
    title: "O que é Lei da Balança",
    text: [
      `A chamada "Lei da balança" é, na verdade, um conjunto de documentos legais formado pelo Código de Trânsito Brasileiro – CTB (Lei nº 9.503, de 23 de setembro de 1997) e diversas Resoluções e Portarias do CONTRAN, do DENATRAN, assim como dos OEER (órgãos e entidades executivos rodoviários da União, dos Estados, do Distrito Federal e dos Municípios).`,
      `Nesse sentido, os principais regramentos a serem observados, com relação à conformidade dos veículos e combinações de veículos são a Resolução do CONTRAN 882/2021, que estabelece os limites de pesos e dimensões, assim como a Portaria SENATRAN 268/22, que homologa mais de uma centena de veículos e combinações de veículos, com indicação clara das configurações permitidas, dos tipos de eixo, dos limites de peso por eixo e por conjunto de eixos, assim como dos comprimentos máximos e mínimos permitidos.`,
    ],
  },
  {
    title: "Nota",
    text: [
      `1. As combinações do tipo caminhão trator + Semirreboque com comprimento inferior a 16,00m ficam limitadas ao PBT máximo de 45,0t.`,
      `2. As combinações de veículos com duas unidades, do tipo caminhão e reboque, e comprimento inferior a 17,50m ficam limitadas ao PBT máximo de 45,0t.`,
      `3. As combinações de veículos com duas unidades, do tipo caminhão e reboque, e comprimento igual ou superior a 17,50m ficam limitadas ao PBT máximo de 57,0t.`,
      `4. É permitida a circulação de Combinações de Veículos de Carga com PBTC igual ou inferior a 57t e comprimento superior a 19,80m e máximo de 30,00m, mediante obtenção de AET;`,
      `5. Nas Combinações com Peso Bruto Total Combinado - PBTC igual ou inferior a 57t, o cavalo mecânico poderá ser de tração simples e equipado com 3º eixo.`,
    ],
  },
  {
    title: "Tolerâncias ao Excesso de Peso",
    text: [
      `Com a publicação da Resolução do CONTRAN 882/2021, na fiscalização de peso dos veículos por balança rodoviária, passam a ser admitidas as seguintes tolerâncias:`,
      `1. 5% sobre os limites de pesos regulamentares para o peso bruto total (PBT) e peso bruto total combinado (PBTC);`,
      `2. 12,5% sobre os limites de peso regulamentares por eixo de veículos transmitidos à superfície das vias públicas.`,
      `Nota: no carregamento dos veículos, a tolerância máxima prevista neste artigo não pode ser incorporada aos limites de peso previstos em regulamentação fixada pelo CONTRAN.`,
      `5. Nas Combinações com Peso Bruto Total Combinado - PBTC igual ou inferior a 57t, o cavalo mecânico poderá ser de tração simples e equipado com 3º eixo.`,
    ],
  },
];

export default function LeiDaBalanca() {
  return (
    <div className="flex w-full mb-[15rem] md:mb-0">
      <SidebarInsticionais />
      <div className="flex flex-col container mx-auto max-w-[46rem] py-10 py-10 px-4 md:px-0">
        {sections.map((section, index) => (
          <div key={index} className="w-full flex flex-col gap-6">
            <h2 className="institucionais-title">{section.title}</h2>
            {section.text.map((paragraph, pIndex) => (
              <p key={pIndex} className="institucionais-text">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
