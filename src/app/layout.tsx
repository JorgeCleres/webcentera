import Script from "next/script";
import type { Metadata } from "next";
import { Outfit, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Centera",
  description: "Centera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBaXfQqauCl75h3YVNBw6OcTSx5SnWwM-8&libraries=places`}
          strategy="beforeInteractive"
        />

      <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16835652560');
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: "gtag('event', 'conversion', {'send_to': 'AW-16835652560/fz88COmHt5kaENDX7ts-'});"
        }} />


        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${outfit.className} ${poppins.className} ${ubuntu.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
