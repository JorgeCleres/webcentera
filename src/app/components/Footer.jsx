"use client";

import Image from "next/image";
import '../css/home/footer.css';
import Link from 'next/link';

export default function Footer() {

    const logo = "/logo-alternativa.png"
    const check = '/icons/checked.png'

    return (
        <>
            <footer>
                <div className="grid grid-cols-12 gap-4 items-center">

                    <div className="col-span-12 md:col-span-4 empresa-logo">
                        <Image
                            src={logo}
                            alt=""
                            width={250}
                            height={250}
                            priority
                        />
                        <p>Trazendo visibilidade e transparência na gestão logística para o mercado agro brasileiro.</p>
                    </div>

                    <div className="col-span-12 md:col-span-4 links">
                        <h3>Links Rápidos</h3>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <Link href="/">Início</Link>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <Link href="/empresa">Empresa</Link>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                           <Link href="/transportadora">Transportadora</Link>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <Link href="/especificacoes">Especificações</Link>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4 operacao">
                        <h3>Sua Operação</h3>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <p>Automatizada</p>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <p>Integrada</p>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <p>Mais Barata</p>
                        </div>
                        <div>
                            <Image
                                src={check}
                                alt=""
                                width={20}
                                height={20}
                                priority
                            />
                            <p>Transparente</p>
                        </div>
                    </div>

                    <div className="col-span-4">
                    </div>
                </div>

                <hr />

                <p id="copy">Copyright 2025 © Todos os direitos reservados por Centera Soluções Logísticas</p>
            </footer>
        </>
    );
}
