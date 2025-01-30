"use client";

import Image from "next/image";
import './css/home/home.css';
import Footer from './components/Footer';

export default function HomePage() {

    const imageBanner = "/image-home.jpg"
    const automacao = "/icons/automacao-cadatro.png"
    const gestao = "/icons/gestao-frete.png"
    const descisao = "/icons/tomada-decisao.png"
    const passo1 = "/icons/passo1.png"
    const passo2 = "/icons/passo2.png"
    const passo3 = "/icons/passo3.png"
    const passo4 = "/icons/passo4.png"
    const rastreio = "/icons/rastreabilidade.png"
    const caminhao1 = "/Design-sem-nome-7.png"
    const caminhao2 = "/Design-sem-nome-6.png"
    const servicos = "/servicos.png"
    const servicosIcone1 = '/icons/2-1.png'
    const servicosIcone2 = '/icons/1-1.png'
    const servicosIcone3 = '/icons/Icon-8.png'
    const servicosIcone4 = '/icons/Icon-11.png'
    const vantagens = '/about.png'

    return (
        <>
            <div className="home-text">
                <h2>Tecnologia no Transporte Agropecuário:</h2>
                <h1>Inovação em Gestão Logística</h1>
            </div>

            <div className="home-banner">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
                        <h2>Seu frete com economia, rapidez e segurança.</h2>
                        <p>Os transportes de suas cargas administrados de forma automatizada e inteligente, reduzindo custos, tempo e dor de cabeça, com total transparência de cada etapa!</p>
                        <a href="#nossa-ferramenta" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Conheça nossa ferramenta</a>
                    </div>

                    <div className="col-span-4">
                        <Image
                            src={imageBanner}
                            alt=""
                            width={450}
                            height={450}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="nossa-ferramenta" id="nossa-ferramenta">
                <h3>Veja o que oferecemos</h3>
                <h2>Transparência em cada etapa do processo logístico</h2>
                <p>Transformamos seu frete com um processo inteligente de gestão logística do início ao fim:</p>

                <div className="nossa-ferramentas_cards">
                    <div className="nossa-ferramentas_card">
                        <Image
                            src={automacao}
                            alt=""
                            width={100}
                            height={100}
                            priority
                        />

                        <h4>Automação no Cadastro</h4>
                        <ul>
                            <li>Cadastro de Veículo</li>
                            <li>Cadastro de Motorista</li>
                            <li>Pré-validação da gerenciadora de risco</li>
                        </ul>

                        <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="px-6 py-3">Fale Conosco</a>
                    </div>

                    <div className="nossa-ferramentas_card">
                        <Image
                            src={gestao}
                            alt=""
                            width={100}
                            height={100}
                            priority
                        />

                        <h4>Gestão do Frete</h4>
                        <ul>
                            <li>Contrato de Frete</li>
                            <li>Liberação de Embarque</li>
                            <li>Emissão de Ordem de Pagamento</li>
                        </ul>

                        <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="px-6 py-3">Fale Conosco</a>
                    </div>

                    <div className="nossa-ferramentas_card">
                        <Image
                            src={descisao}
                            alt=""
                            width={100}
                            height={100}
                            priority
                        />

                        <h4>Tomada de Decisões</h4>
                        <ul>
                            <li>Informações na Palma da Mão</li>
                            <li>Gestão proativa</li>
                            <li>Informações Qualificadas</li>
                        </ul>

                        <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="px-6 py-3">Fale Conosco</a>
                    </div>

                    <div className="nossa-ferramentas_card">
                        <Image
                            src={rastreio}
                            alt=""
                            width={100}
                            height={100}
                            priority
                        />

                        <h4>Rastreabilidade</h4>
                        <ul>
                            <li>Rastreabilidade Logística End to End</li>
                            <li>Integrações de Tecnologias</li>
                            <li>Sustentabilidade, agenda Europa</li>
                        </ul>

                        <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="px-6 py-3">Fale Conosco</a>
                    </div>
                </div>
            </div>

            <div className="banner">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center"></div>

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h2>Preparado para mais eficiência e maiores resultados em seu transporte?</h2>
                        <a href="#nossa-ferramenta" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Fale com nossa equipe</a>
                    </div>
                </div>
            </div>

            <div className="processo">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                        <h4>Conheça Nosso Processo</h4>
                        <h3>Fluxo operacional automatizado!</h3>

                        <div className="processo_pass">
                            <div className="icone">
                                <Image
                                    src={passo1}
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Passo 1</h6>
                                <p>Agência envia os documentos do veículo e motorista para nossa central de atendimento.</p>
                            </div>
                        </div>

                        <div className="processo_pass">
                            <div className="icone">
                                <Image
                                    src={passo2}
                                    alt=""
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Passo 2</h6>
                                <p>Nosso time recebe os documentos e realiza o cadastro no sistema, validando os dados e encaminhando para gerenciadora de risco.</p>
                            </div>
                        </div>

                        <div className="processo_pass">
                            <div className="icone">
                                <Image
                                    src={passo3}
                                    alt=""
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Passo 3</h6>
                                <p>Com o retorno da gerenciadora de risco, realizamos a emissão da ordem de carregamento.</p>
                            </div>
                        </div>

                        <div className="processo_pass">
                            <div className="icone">
                                <Image
                                    src={passo4}
                                    alt=""
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Passo 4</h6>
                                <p>Recebemos a nota fiscal e importamos dentro da aplicação, validando os dados com ordem de pagamento.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5">
                        <Image
                            src={caminhao1}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />

                        <Image
                            src={caminhao2}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="servicos">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={servicos}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h5>Nossos Serviços</h5>
                        <h2>O Futuro da Logística Agropecuária:</h2>
                        <p>Uma solucação completa através da Centera: agora sua empresa será capaz de acompanhar toda a cadeia logística de forma integrada e digital!</p>

                        <div className="servicos_cards grid grid-cols-12 gap-4 items-center">

                        <div className="col-span-12 md:col-span-6">
                                <div className="image">
                                    <Image
                                        src={servicosIcone1}
                                        alt=""
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                </div>
                                <h4>Gestão Logística Operacional</h4>
                                <p>Organização do fluxo logístico da sua operação.</p>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="image">
                                    <Image
                                        src={servicosIcone2}
                                        alt=""
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                </div>
                                <h4>Transportadoras</h4>
                                <p>Gestão do processo e integração de dados no transporte.</p>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="image">
                                    <Image
                                        src={servicosIcone3}
                                        alt=""
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                </div>
                                <h4>Negociação</h4>
                                <p>Fazemos a negociação do seu transporte e contratos de forma transparente.</p>
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="image">
                                    <Image
                                        src={servicosIcone4}
                                        alt=""
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                </div>
                                <h4>Gestão Estratégica</h4>
                                <p>Análise para investimentos e desinvestimentos em infraestrutura logística.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="vantagens">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex-col justify-center">
                        <h5>Vantagens dos Serviços Centera</h5>
                        <h2>O Melhor para você!</h2>
                        <ul>
                            <li>Controle de ocorrências no transporte da mercadoria, manutenção ou sinistro;</li>
                            <li>Baixa no controle de transporte de mercadoria (MDFe);</li>
                            <li>Relatório diário de movimentação de mercadoria;</li>
                            <li>Relatório de projeção de embarque;</li>
                            <li>Planejamento e gestão de frete por rota;</li>
                            <li>Cadastro de rota com distancia, tempo de transito e valor estimado de pedágio;</li>
                            <li>Relatório de controle de tempo de transito;</li>
                            <li>Relatório de confirmação de descarga;</li>
                            <li>Relatório de composição de sinistro para seguradora;</li>
                            <li>Integração com sistema de gestão da transportadora de contas a pagar e a receber;</li>
                            <li>Relatório de orçado x realizado por liberação de embarque e/ou contrato de frete;</li>
                            <li>Relatório de desvios de precificação de frete;</li>
                            <li>Relatório de execução de fretes por rota e produto;</li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={vantagens}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="tendencia">
                <h5>Tendência na Logística Agropecuária</h5>
                <h2>O que sua empresa ganha com a Centera?</h2>

                    <div className="pl-12 pr-12 grid grid-cols-12 gap-4 items-center">

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>1</h6>
                                <h3>Redução na mão de obra</h3>
                                <p>Diminui a necessidade de contratação de funcionários em regime CLT para sua empresa</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>2</h6>
                                <h3>Escala de Atendimento</h3>
                                <p>Time disponível aos Sábados, Domingos e Feriados em horários extraordinários</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>3</h6>
                                <h3>Centralização</h3>
                                <p>Todos os documentos armazenados em uma única base de dados - Segura e de Fácil Acesso</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>4</h6>
                                <h3>Controle tributário operacional</h3>
                                <p>Garantia de todos os cadastros com completa integridade dos documentos originais.</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>5</h6>
                                <h3>Tranquilidade</h3>
                                <p>Garantia de todos os cadastros com completa integridade dos documentos originais.</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>6</h6>
                                <h3>Ganha de tempo</h3>
                                <p>Valores justos, com custo calculados por toneladas de documentos emitidos</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>7</h6>
                                <h3>Custo por Tonelada</h3>
                                <p>Valores justos, com custo calculados por toneladas de documentos emitidos</p>
                            </div>
                        </div>

                        <div className="tendecia_cards col-span-12 md:col-span-3 flex flex-col justify-center">
                            <div className="tendencia_card">
                                <h6>8</h6>
                                <h3>Comunicação eficiente</h3>
                                <p>Canal de comunicação centralizado e comunicação via Whatsapp com time de execução.</p>
                            </div>
                        </div>
                    </div>

                    <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="px-6 py-3">Fale Conosco</a>
            </div>

            <Footer />
        </>
    );
}
