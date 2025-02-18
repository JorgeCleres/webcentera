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

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16835652560" strategy="afterInteractive" />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16835652560');`}
        </Script>

        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${outfit.className} ${poppins.className} ${ubuntu.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}