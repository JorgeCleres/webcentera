"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuItem } from "../types/components/header";

const menus: MenuItem[] = [
  { label: "Início", link: "/" },
  { label: "Empresa", link: "/empresa" },
  { label: "Contato", link: "/contato" },
  { label: "Transportadora", link: "/transportadora" },
  { label: "Especificações", link: "/especificacoes" },
  { label: "Rotas", link: "/rotas" },
];

export default function Header() {
  const pathname = usePathname();
  const logo = "/logo.png";
  const menuMobile = "/icons/menu-mobile.svg";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md w-full relative">
      <a href={menus[0].link}>
      <Image src={logo} alt="Logo" width={280} height={60} priority />
      </a>

      <ul className="hidden md:flex gap-10">
        {menus.map((menu) => (
          <li key={menu.label} className="relative">
            <a
              href={menu.link}
              className={`text-black font-normal text-base relative pb-1 ${pathname === menu.link
                ? "border-b-2 border-black font-medium"
                : "hover:border-b-2 hover:border-black"
              }`}
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <a
          href="https://wa.me/5511983184338?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o"
          className="bg-black text-white px-11 py-4 rounded-md hover:opacity-80 font-normal speak"
        >
          Fale Conosco
        </a>
      </div>
      <button
        className="md:hidden bg-green-800 p-3 rounded-lg text-white focus:outline-none"
        onClick={() => setIsMenuOpen(true)}
      >
        <Image src={menuMobile} alt="Menu" width={20} height={20} />
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-white shadow-lg z-[9999999] transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-600"
          >
            &times;
          </button>
        </div>
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>
        <ul className="flex flex-col gap-6 px-6">
          {menus.map((menu) => (
            <li key={menu.label} className="relative">
              <a
                href={menu.link}
                onClick={() => setIsMenuOpen(false)}
                className={`text-black text-lg font-medium ${pathname === menu.link ? "border-b-2 border-black" : ""
                  }`}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
