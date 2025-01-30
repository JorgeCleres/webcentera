"use client";

import Image from "next/image";
import '../css/home/transportadora.css';
import Footer from '../components/Footer';
import Duvidas from '../components/Duvidas';

export default function TransportadoraPage() {

    const pianetto = "/pianetto.png";
    const img_transportadora = "/img-transportadora.png";

    return (
        <>
            <div className="transportadora-default">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center img">
                        <Image
                            src={pianetto}
                            alt=""
                            width={500}
                            height={500}
                            priority
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h6>Endereço:</h6>
                        <p>Rua 29, QD.20, LT.08, Nº 1000, SL.139</p>
                        <p>Vila Rocha – Rio Verde – Goiás</p>
                        <p>CEP: 75905-836</p>
                        <br />

                        <h6>Telefones:</h6>
                        <p>(64) 3050-2875</p>
                        <p>(64) 9 9903-2381</p>
                        <br />

                        <h6>Email:</h6>
                        <p>contato@pianettotransportes.com.br</p>

                    </div>

                </div>
            </div>

            <div className="transportadora">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                        <h3>DISPOSIÇÕES GERAIS PARA SEU EMBARQUE</h3>
                        <p>Fique atento a todas as informações</p>

                        <p>O prazo previsto para realização do procedimento de carga da mercadoria, está descrito detalhamento na Ordem de Carregamento liberada. Em caso de comparecimento espontâneo do motorista em dia e horário definido na Ordem de Carregamento marcado anterior ao estipulado acima não há incidência de quaisquer tarifas ou encargos adicionais;</p>
                    
                        <p>Motorista e/ou proprietário ficam cientes que a autorização de carregamento não gera a obrigatoriedade de embarque, e que, decorrida a data prevista para embarque, sem a efetivação de carregamento, motorista e/ou proprietário ficam liberados do encargo;</p>
                    
                        <p>Excedido o referido prazo para a realização da carga (nos casos em que efetivado o carregamento) ou descarga da mercadoria, será devida a quantia de R$ 0,45 por tonelada a cada hora parada, contando-se as horas paradas a partir da 24:00 horas após o devido registro de chegada do veículo no destino;</p>
                    
                        <p>Demais informações estão apresentado no contrato passa a vigorar a partir da sua apresentação para embarque. </p>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={img_transportadora}
                            alt=""
                            width={800}
                            height={800}
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
