import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio Midowz",
  description: "Esse é meu portfolio, bem-vindo à ele!",
  icons: "/midowzin.png",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/midowzin.png" sizes="any" />
        <link rel="apple-touch-icon" href="/midowzin.png" />
      </head>
      <body className="antialiased font-all bg-primary text-secundary">
        <Navbar />
        <main className="pt-20 sm:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
