"use client";

import Image from "next/image";
import '../css/home/empresa.css';
import Footer from '../components/Footer';
import Duvidas from '../components/Duvidas';

export default function EmpresaPage() {

    const check = "/icons/checked_white.png"
    const sobre = "/about2.png";
    const empresa = "/empresa.png";

    return (
        <>
            <div className="banner-empresa">
                <h2>Centera Soluções Logísticas</h2>
            </div>

            <div className="sobre">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h4>Conheça Nossa Empresa</h4>
                        <h3>Inovando a Logística Agropecuária</h3>
                        <p>Somos uma empresa de <strong>Soluções em Logística e Tecnologia</strong> voltada ao mercado do agro para trazer visibilidade e transparência na gestão logística de forma integrada e inovadora.</p>

                        <div className="sobre_pass">
                            <div className="icone">
                                <Image
                                    src={check}
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Automação de Processos</h6>
                                <p>Através de nossa plataforma digital, auxiliamos produtores, indústrias, transportadores e embarcadores a facilitar todo o processo logístico.</p>
                            </div>
                        </div>

                        <div className="sobre_pass">
                            <div className="icone">
                                <Image
                                    src={check}
                                    alt=""
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className="text">
                                <h6>Redução de Custos</h6>
                                <p>Oferecemos diversas soluções operacionais, de gestão e rastreabilidade que reduzem significativamente o custo atual do transporte.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={sobre}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="empresa">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h4>Nossa Expertise</h4>
                        <h3>Sua empresa preparada para escalar!</h3>
                        <p>Nossa missão é lhe proporcionar total transparência e solução em forma de Gestão Logística do início ao fim do processo.</p>

                        <div className="empresa_pass">
                            <div className="text">
                                <h4>Gestão Logística Operacional</h4>
                                <h6>100%</h6>
                            </div>
                            <div className="progress-bar"></div>
                        </div>

                        <div className="empresa_pass">
                            <div className="text">
                                <h4>Integração de Dados</h4>
                                <h6>100%</h6>
                            </div>
                            <div className="progress-bar"></div>
                        </div>

                        <div className="empresa_pass">
                            <div className="text">
                                <h4>Negociações e Contratos Transparentes</h4>
                                <h6>100%</h6>
                            </div>
                            <div className="progress-bar"></div>
                        </div>

                        <div className="empresa_pass">
                            <div className="text">
                                <h4>Infraestrutura e Gestão Estratégica</h4>
                                <h6>100%</h6>
                            </div>
                            <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center img">
                        <Image
                            src={empresa}
                            alt=""
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>

            <Duvidas />

            <Footer />
        </>
    );
}
