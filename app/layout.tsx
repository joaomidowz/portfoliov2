import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portfolio Midowz",
  description: "Esse é meu portfolio bem-vindo à ele!",
  icons: "/midowzin.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/midowzin.png" sizes="any" />
        <link rel="apple-touch-icon" href="/midowzin.png" />
      </head>
      <body
        className="antialiased font-all"
      >
        {children}
      </body>
    </html>
  );
}
