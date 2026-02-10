import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mudanças Fialho & Silva | Serviços Profissionais de Mudanças",
  description: "Mudanças residenciais e comerciais em Portugal. Serviço profissional, seguro e eficiente. Contacte-nos: 919 369 582",
  keywords: "mudanças, transportes, mudanças residenciais, mudanças comerciais, Portugal, Carvalhal Benfeito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
