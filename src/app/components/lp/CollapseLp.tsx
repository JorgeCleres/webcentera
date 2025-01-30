import { useState } from 'react';

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleCollapse = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="faq bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Dúvidas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                        <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(1)} >
                            Como funciona o processo de automação?
                        </button>

                        <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' }`}>
                            <p>A automação de processos permite que você integre e agilize todas as etapas da logística, desde a coleta até a entrega final, reduzindo custos e aumentando a eficiência.</p>
                        </div>
                    </div>

                    <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                        <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(2)}>
                            Como vocês ajudam a reduzir os custos do transporte?
                        </button>
                        <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' }`}>
                            <p>Nossas soluções automatizam processos, otimizam o fluxo logístico e oferecem negociações transparentes para contratos de transporte, eliminando ineficiências e reduzindo despesas.</p>
                        </div>
                    </div>

                    <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                        <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(3)} >
                            Quais tipos de transporte vocês atendem?
                        </button>

                        <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' }`} >
                            <p>Atendemos operações logísticas diversas, incluindo transporte agropecuário e de cargas gerais, sempre adaptando as soluções às necessidades específicas de cada cliente.</p>
                        </div>
                    </div>

                    <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                        <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(4)}>Quais informações posso acompanhar no sistema de vocês?</button>
                        <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p> Nosso sistema oferece controle total, incluindo status do transporte, custos, documentos emitidos, e análises estratégicas para tomadas de decisão. </p>
                        </div>
                    </div>

                    <div className="faq-item bg-white p-6 rounded-lg shadow-lg">
                        <button className="w-full text-left text-xl font-semibold focus:outline-none" onClick={() => toggleCollapse(5)}>Qual é o diferencial de vocês em relação a outros sistemas logísticos?</button>
                        <div className={`collapse-content text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 5 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p>Nosso diferencial está na integração de automação, transparência e análise estratégica, tudo em uma única solução projetada para reduzir custos e otimizar resultados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
