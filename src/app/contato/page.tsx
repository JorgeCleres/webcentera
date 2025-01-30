"use client";

import Image from "next/image";
import '../css/home/contato.css';
import Footer from '../components/Footer';

export default function ContatoPage() {

    const email = "/icons/email.png"
    const telefone = "/icons/telefone.png"

    return (
        <>
            <div className="banner-contato">
                <h2>Fale conosco</h2>
            </div>

            <div className="contato">
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center card">
                        <div className="img">
                            <Image
                                src={email}
                                alt=""
                                width={100}
                                height={100}
                                priority
                            />
                        </div>

                        <h4>Endereço Email</h4>
                        <h3>contato@webcentera.com.br</h3>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center card">
                        <div className="img">
                            <Image
                                src={telefone}
                                alt=""
                                width={100}
                                height={100}
                                priority
                            />
                        </div>

                        <h4>Telefone e Whatsapp</h4>
                        <h3>(41) 98268-7520</h3>
                    </div>

                </div>
            </div>


            <Footer />
        </>
    );
}
