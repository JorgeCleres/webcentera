"use client";

import Image from "next/image";
import "./../css/lp/lp.css";
import CardSolucao from "../components/lp/CardSolucao";
import Card from "../components/lp/Card";
import CollapseLp from "../components/lp/CollapseLp";

export default function lp() {

    const logo = "/logo-alternativa.png";
    const about = "/about.png";
    const about2 = "/about2.png";
    const checked = "/checked.png";

    return (
        <>
            <div className="container mx-auto logo">
                <Image 
                    src={logo} 
                    alt="Logo da empresa Soluções em Logística, especialista em automação e rastreamento para logística agro."
                    width={300} 
                    height={300} 
                    priority
                />
            </div>

            <header className="hero h-screen bg-gray-100">
                <div className="container mx-auto h-full">
                    <h1 className="text-4xl font-bold mb-4">
                        Transforme Sua Logística com Eficiência e Economia
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Automação, rastreabilidade e gestão inteligente para reduzir custos e simplificar o transporte de cargas..
                    </p>

                    <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>

                </div>
            </header>

            <section className="solutions">
                <div className="container mx-auto h-full">
                    <h2>Por que <strong>escolher</strong> nossa solução?</h2>

                    <h4>Transformamos sua operação logística com automação, gestão integrada e rastreabilidade completa. Reduzimos custos, otimizamos processos e garantimos transparência em cada etapa, desde o cadastro até a entrega.</h4>

                    <div className="grid grid-cols-12 gap-4 h-full items-center">

                        <CardSolucao
                            iconSrc="/icons/automacao.png"
                            title="Automação de Processos"
                            desc=" - Cadastro de Veículo"
                            desc1=" - Cadastro de Motorista"
                            desc2=" - Pré-validação da gerenciadora de risco"
                        />

                        <CardSolucao
                            iconSrc="/icons/gestao.png"
                            title="Gestão do Frete"
                            desc=" - Contrato de Frete"
                            desc1=" - Liberação de Embarque"
                            desc2=" - Emissão de Ordem de Pagamento"
                        />

                        <CardSolucao
                            iconSrc="/icons/descisao.png"
                            title="Tomada de Decisões"
                            desc=" - Informações na Palma da Mão"
                            desc1=" - Gestão proativa"
                            desc2=" - Informações Qualificadas"
                        />

                        <CardSolucao
                            iconSrc="/icons/local.png"
                            title="Rastreabilidade"
                            desc=" - Rastreabilidade Logística End to End"
                            desc1=" - Integrações de Tecnologias"
                            desc2=" - Sustentabilidade, agenda Europa"
                        />
                    </div>
                </div>
            </section>

            <section className="botao-contato">
                <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>
            </section>

            <section className="about">
                <div className="container mx-auto h-full">

                    <div className="grid grid-cols-12 gap-4 items-center">
                        
                        <div className="col-span-6 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-4">Sempre na Frente com um Sistema Atualizado!</h2>
                            <p className="text-lg text-gray-600 mb-6">Conte com um sistema que nunca para de evoluir! Trabalhamos continuamente para oferecer as melhores ferramentas, garantindo que você tenha acesso às funcionalidades mais modernas do mercado. Nossa plataforma é atualizada regularmente para acompanhar as demandas do setor e proporcionar uma experiência cada vez melhor para o seu negócio.</p>
                            <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>
                        </div>

                        <div className="col-span-6">
                            <Image 
                                src={about} 
                                alt="Logo da empresa Soluções em Logística, especialista em automação e rastreamento para logística agro."
                                width={600} 
                                height={800} 
                                priority />
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="banner">
                <div className="container mx-auto h-full">
                    <h2>Sua Logística, Nossa Solução!</h2>
                    <p>Transforme processos complexos em resultados ágeis, com redução de custos e visibilidade total. Descubra como nossa tecnologia pode impulsionar sua eficiência!</p>
                    
                    <div className="banner-btn">
                        <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>
                    </div>

                </div>
            </section>

            <section className="benefits">
                <div className="container mx-auto h-full">
                    <h2>O QUE SEU EMPRESA <strong>GANHA</strong> COM A <strong>CENTERA</strong>?</h2>

                    <div className="grid grid-cols-12 gap-4 h-full items-center">

                        <Card 
                            number="1"
                            title="Redução na mão de obra"
                            desc="Diminui a necessidade de contratação de funcionários em regime CLT para sua empresa"
                        />

                        <Card
                            number="2"
                            title="Escala de Atendimento"
                            desc="Time disponível aos Sábados, Domingos e Feriados em horários extraordinários"
                        />

                        <Card
                            number="3"
                            title="Centralização"
                            desc="Todos os documentos armazenados em uma única base de dados - Segura e de Fácil Acesso"
                        />

                        <Card
                            number="4"
                            title="Controle tributário operacional"
                            desc="Garantia de todos os cadastros com completa integridade dos documentos originais."
                        />

                        <Card
                            number="5"
                            title="Tranquilidade"
                            desc="Garantia de todos os cadastros com completa integridade dos documentos originais."
                        />

                        <Card
                            number="6"
                            title="Ganha de tempo"
                            desc="Valores justos, com custo calculados por toneladas de documentos emitidos"
                        />

                        <Card
                            number="7"
                            title="Custo por Tonelada"
                            desc="Valores justos, com custo calculados por toneladas de documentos emitidos"
                        />

                        <Card
                            number="8"
                            title="Comunicação eficiente"
                            desc="Canal de comunicação centralizado e comunicação via Whatsapp com time de execução."
                        />
                    </div>
                </div>
            </section>

            <section className="botao-contato">
                <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>
            </section>

            <section className="about">
                <div className="container mx-auto h-full">

                    <div className="grid grid-cols-12 gap-4 items-center">
                        
                        <div className="col-span-6 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-4">Inovando a Logística Agropecuária</h2>
                            <p className="text-lg text-gray-600 mb-6">Somos uma empresa de Soluções em Logística e Tecnologia voltada ao mercado do agro para trazer visibilidade e transparência na gestão logística de forma integrada e inovadora.</p>

                            <div className="image-text">
                                <Image 
                                    src={checked} 
                                    alt="Logo da empresa Soluções em Logística, especialista em automação e rastreamento para logística agro."
                                    width={40} 
                                    height={40} 
                                    priority
                                />
                                <h4>Automação de Processos</h4>
                                <p>Através de nossa plataforma digital, auxiliamos produtores, indústrias, transportadores e embarcadores a facilitar todo o processo logístico.</p>
                            </div>

                            <div className="image-text">
                                <Image 
                                    src={checked} 
                                    alt="Logo da empresa Soluções em Logística, especialista em automação e rastreamento para logística agro."
                                    width={40} 
                                    height={40} 
                                    priority
                                />
                                <h4>Redução de Custos</h4>
                                <p>Oferecemos diversas soluções operacionais, de gestão e rastreabilidade que reduzem significativamente o custo atual do transporte.</p>
                            </div>

                            <a href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o" className="cta-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Agende uma Demonstração</a>
                        
                        </div>

                        <div className="col-span-6">
                            <Image 
                                src={about2} 
                                alt="Logo da empresa Soluções em Logística, especialista em automação e rastreamento para logística agro."
                                width={600} 
                                height={800} 
                                priority />
                        </div>
                    </div>
                    
                </div>
            </section>
      
            <CollapseLp />

            <footer className="footer">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Soluções em Logística. Todos os direitos reservados.</p>
                </div>
            </footer>

        </>
    );
}
