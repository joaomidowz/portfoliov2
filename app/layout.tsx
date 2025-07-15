import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-all bg-primary text-secundary">
        <Navbar />
        <main className="pt- sm:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
