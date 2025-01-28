"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import "../css/sidebarSpecification/sidebarSpecification.css";

export default function SidebarInsticionais() {
  const iconKg = "/icons/kg.svg";
  const iconWheel = "/icons/wheel.svg";

  const linksData = [
    {
      title: "Lei da balança",
      icon: iconKg,
      link: "/lei-da-balanca",
    },
    {
      title: "Eixos e pesos",
      icon: iconWheel,
      link: "/eixos-e-pesos",
    },
  ];

  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const pathname = usePathname();

  function toggleMobileExpand() {
    setIsMobileExpanded((prev) => !prev);
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden h-screen lg:flex bg-white w-[25rem] shadow-md overflow-y-auto flex-col gap-6 sidebar-desktop">
        <div className="flex flex-col p-4">
          <div className="flex flex-col gap-4">
            <div className="sidebar-links flex flex-col gap-3 mt-4">
              {linksData.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className={`flex items-center gap-2 p-2 rounded-md ${pathname === link.link
                      ? "bg-gray-200 text-black font-semibold"
                      : "bg-white text-gray-700"
                    } hover:bg-gray-100`}
                >
                  <Image src={link.icon} alt={link.title} width={20} height={20} />
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className={`
          lg:hidden
          fixed bottom-0 left-0 right-0 
          bg-gray-50 shadow-lg rounded-t-2xl 
          px-4 py-4 z-50 
          transition-all
        `}
        style={{
          height: isMobileExpanded ? "75vh" : "25vh",
        }}
      >
        <motion.div
          className="w-12 h-1 bg-gray-300 mx-auto rounded-full mb-4 cursor-pointer"
          onDragEnd={(event, info) => {
            if (info.offset.y < -50) setIsMobileExpanded(true);
            else if (info.offset.y > 50) setIsMobileExpanded(false);
          }}
          onClick={toggleMobileExpand}
        />

        <div className="space-y-4 overflow-auto h-full pb-8">
          <div className="sidebar-links flex flex-col gap-3 mt-4">
            {linksData.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className={`flex items-center gap-2 p-2 rounded-md ${pathname === link.link
                    ? "bg-gray-200 text-black font-semibold"
                    : "bg-white text-gray-700"
                  } hover:bg-gray-100`}
              >
                <Image src={link.icon} alt={link.title} width={20} height={20} />
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
