import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dals Arquitetura & Regularização Imobiliária",
  description:
    "Soluções completas em regularização de imóveis e aprovação de projetos, com profissionalismo e agilidade.",
    generator: 'Next.js',
  applicationName: "Dals Arquitetura & Regularização Imobiliária",
  authors: [
    {
      name: "Dals Arquitetura & Regularização Imobiliária",
      url: "https://dalsarquitetura.com.br",
    }
  ],
  keywords: [ 
    "Regularização",
    "Imobiliária",
    'Aprovação de Projetos',
    "Dals Arquitetura",
    "Projetos",
    "Consultoria Imobiliária",
    "Serviços de Arquitetura",
    "Serviços de Regularização",
    "Projetos de Regularização",
    "Anistia",
    "AVCB",
    "CLCB",
    "PPCI",
    "Alvará de Funcionamento",
    "Licenças",
    "Laudos Técnicos",
    "Arquitetura",
    "Regularização Imobiliária",
    "Aprovação de Projetos",
    "Dals Arquitetura",
    "Dals Arquitetura & Regularização Imobiliária",
    "Dals",
    "Arquitetura e Regularização",
    "Imóveis",
    "Projetos",
    "Regularização de Imóveis",
    "Aprovação de Projetos Imobiliários",
    "Arquitetura e Engenharia",
    "Consultoria Imobiliária",
    "Serviços de Arquitetura",
    "Serviços de Regularização",
    "Projetos de Arquitetura",
    "Projetos de Regularização",
    "Aprovação de Projetos Imobiliários e Regularização de Imóveis",
    "Arquitetura e Regularização Imobiliária",
    "Arquitetura e Regularização de Projetos",
    "Arquitetura e Regularização de Imóveis",
    "Arquitetura e Regularização de Projetos Imobiliários",
    "Arquitetura e Regularização de Imóveis e Projetos",
    "Arquitetura e Regularização de Imóveis e Projetos Imobiliários",
    "Regularizacão de imóveis",
    "Aprovação de projetos",
    "Arquitetura e engenharia",
    "Consultoria imobiliária",
    "Serviços de arquitetura",
    "Serviços de regularização",
    "Projetos de arquitetura",
    "Projetos de regularização"
    ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'