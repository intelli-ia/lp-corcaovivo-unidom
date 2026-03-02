import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORC Ao Vivo - UNIDOM",
  description: "Aprenda Raciocínio Clínico com o Dr. Carlos Gusmão - Aula gratuita e presencial no Auditório da UNIDOM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
