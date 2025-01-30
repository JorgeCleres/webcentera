import { useState } from 'react';
import '../css/home/home.css';

const DUVIDAS = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleCollapse = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="duvidas">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-5 flex flex-col justify-center bloco">
                    <h3>Tem alguma dúvida? Contate nosso suporte.</h3>
                </div>

                <div className="col-span-12 md:col-span-7 flex flex-col text">
                    <h6>Precisa de mais informações?</h6>
                    <h3>Perguntas frequentes sobre nossos serviços:</h3>
                    <p>Entendemos que, por se tratar de uma solução inovadora, possa haver dúvidas com relação aos nossos processos. Confira abaixo algumas das perguntas mais frequentes que recebemos, a resposta que você procura pode estar logo abaixo.</p>

                    <section className="faq bg-gray-100 py-6">
                        <div className="container mx-auto text-center">
                            <div className="mx-auto space-y-6">
                                <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                                    <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(1)} >
                                        Como funciona o processo de automação?
                                    </button>

                                    <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p>A automação de processos permite que você integre e agilize todas as etapas da logística, desde a coleta até a entrega final, reduzindo custos e aumentando a eficiência.</p>
                                    </div>
                                </div>

                                <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                                    <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(2)}>
                                        Como vocês ajudam a reduzir os custos do transporte?
                                    </button>
                                    <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p>Nossas soluções automatizam processos, otimizam o fluxo logístico e oferecem negociações transparentes para contratos de transporte, eliminando ineficiências e reduzindo despesas.</p>
                                    </div>
                                </div>

                                <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                                    <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(3)} >
                                        Quais tipos de transporte vocês atendem?
                                    </button>

                                    <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} >
                                        <p>Atendemos operações logísticas diversas, incluindo transporte agropecuário e de cargas gerais, sempre adaptando as soluções às necessidades específicas de cada cliente.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DUVIDAS;
