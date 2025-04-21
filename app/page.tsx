import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, CheckCircle } from "lucide-react"
// import { Mail, MapPin, Phone, ArrowRight,  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">``
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Dals Arquitetura" width={160} height={80} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#inicio"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[85vh]">
          <div className="absolute inset-0">
            <Image
              src="/assets/pexels-brett-sayles-7666332.jpg"
              alt="Imagem de arquitetura moderna"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative flex min-h-[600px] flex-col items-start justify-center py-24 md:py-32">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="font-medium">DALS</span> ARQUITETURA
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-200 font-light">
              Soluções em Arquitetura e Regularização Imobiliária
              Projetamos, legalizamos e transformamos seu espaço.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-secondary" asChild>
                <Link href="#servicos">
                  Nossos Serviços <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
         <section id="sobre" className="py-24 bg-[#F0F0F0]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-light text-[#2A384C] mb-6">Sobre Nós</h2>
                <div className="space-y-4 text-[#2A384C]/80">
                  <p>
                  Fundada para oferecer excelência a quem busca criatividade, autenticidade e simplicidade em projetos e processos. Nos comprometemos a superar
 expectativas, refletindo a singularidade de nossos clientes.
                  </p>
                  <p>
                  Nossa equipe é formada por arquitetas e urbanistas, que atuam no mercado de arquitetura e regularização atendendo os clientes com empatia,
 qualidade e agilidade.
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-medium text-secondary mb-4">Nossos Valores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                      <span>Excelência técnica e atendimento personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                      <span>Transparência e comunicação clara em todas as etapas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                      <span>Compromisso com prazos e resultados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                      <span>Ética profissional e responsabilidade</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="max-w-xl w-full overflow-hidden rounded-sm bg-white p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                    <Image
                      src="/assets/pexels-pixapexel-28287647.jpg"
                      alt="Escritorio de arquitetura"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-light tracking-tight text-[#23384c]">
                Nossos <span className="font-medium">Serviços</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Oferecemos soluções completas em regularização imobiliária para garantir a conformidade legal do seu
                imóvel.
              </p>
            </div>

            <Tabs defaultValue="prefeitura" className="mt-16">

              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="arquitetura">Arquitetura</TabsTrigger>
                  <TabsTrigger value="prefeitura">Prefeitura</TabsTrigger>
                  <TabsTrigger value="bombeiro">Bombeiro</TabsTrigger>
                  <TabsTrigger value="cartorio">Cartório</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="arquitetura" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Acessibilidade"
                    description="Projetos de acessibilidade para garantir o uso adequado e seguro do espaço por todos."
                    icon="FileText"
                  />
                  <ServiceCard
                    title="Projeto Arquitetônico"
                    description="Consiste no desenvolvimento técnico e criativo de espaços, baseado em normas, estética e eficiência de uso."
                    icon="FileEdit"
                  />
                  <ServiceCard
                    title="Reforma e Ampliação"
                    description="São intervenções voltadas à modificação e expansão de edificações existentes, buscando mais eficiência, conforto e adequação legal."
                    icon="FileText"
                  />
                  <ServiceCard
                    title="Demolição"
                    description="É o planejamento técnico para a remoção de estruturas, garantindo segurança e conformidade."
                    icon="FileEdit"
                  />
                  <ServiceCard
                    title="Levantamento cadastral"
                    description="É o processo de levantamento de informações precisas de terrenos e edificações.
"
                    icon="FileEdit"
                  />
                  <ServiceCard
                    title="Projeto AsBuilt"
                    description="É o projeto que reflete as condições reais de uma edificação."
                    icon="FileEdit"
                  />
                </div>
              </TabsContent>

              <TabsContent value="prefeitura" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Anistia"
                    description="Regularização de edificações existentes que estão em desacordo com as normas municipais perante a prefeitura."
                    icon="FileCheck"
                  />
                  <ServiceCard
                    title="Licenças"
                    description="Licença Sanitária, Publicidade e Funcionamento para estabelecimentos comerciais e residenciais."
                    icon="FileText"
                  />
                  <ServiceCard
                    title="Certificados"
                    description="Acessibilidade, Segurança, Manutenção, Regularização e Conclusão (Habite-se)."
                    icon="Award"
                  />
                  <ServiceCard
                    title="Alvarás"
                    description="Alvarás de Demolição e Reforma para adequação de imóveis às normas vigentes."
                    icon="Clipboard"
                  />
                  <ServiceCard
                    title="Desmembramento"
                    description="Desmembramento e Remembramento de Lote conforme legislação municipal."
                    icon="Scissors"
                  />
                  <ServiceCard
                    title="EVTL"
                    description="Estudo de Viabilidade Técnica e Legal para análise prévia de projetos."
                    icon="Search"
                  />
                </div>
              </TabsContent>

              <TabsContent value="bombeiro" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <ServiceCard
                    title="CLCB"
                    description="Certificado de Licenciamento do Corpo de Bombeiros."
                    icon="FileCheck"
                  />
                  <ServiceCard
                    title="AVCB"
                    description="Auto de Vistoria do Corpo de Bombeiros."
                    icon="ShieldCheck"
                  />
                  <ServiceCard
                    title="PPCI"
                    description="Projeto de Prevenção e Combate a Incêndio para edificações comerciais e residenciais."
                    icon="Flame"
                  />
                  <ServiceCard
                    title="FAT"
                    description="Formulário de Atendimento Técnico utilizado para consultas e esclarecimentos com o Corpo de Bombeiros."
                    icon="FileQuestion"
                  />
                </div>
              </TabsContent>

              <TabsContent value="cartorio" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <ServiceCard
                    title="Certidão de Negativa"
                    description="Obtenção de certidões negativas que comprovam a inexistência de débitos, pendências ou irregularidades em nome de pessoa física ou jurí."
                    icon="FileText"
                  />
                  <ServiceCard
                    title="Averbação de Matrícula"
                    description="Averbação de construções na matrícula do imóvel junto ao cartório de registro."
                    icon="FileEdit"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-primary py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-light tracking-tight text-secondary">
                Entre em <span className="font-medium">Contato</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Estamos prontos para ajudar na regularização do seu imóvel. Entre em contato conosco!
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-xl font-medium text-secondary mb-6">Envie uma mensagem</h3>
                <form className="grid gap-6">
                  <div className="grid gap-3">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input id="name" type="text" placeholder="Seu nome completo" />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="anistia">Anistia</option>
                      <option value="licencas">Licenças</option>
                      <option value="certificados">Certificados</option>
                      <option value="alvaras">Alvarás</option>
                      <option value="clcb">CLCB</option>
                      <option value="avcb">AVCB</option>
                      <option value="ppci">PPCI</option>
                    </select>
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Descreva seu projeto ou dúvida" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
              <div className="grid gap-8">
                <div className="bg-white p-8 rounded-md shadow-sm">
                  <h3 className="text-xl font-medium text-[#23384c] mb-6">Informações de Contato</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-secondary" />
                      <span>(11) 97687-8467</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-secondary" />
                      <span>contato@dalsarquitetura.com.br</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-secondary" />
                      <span>
                        Rua Endres, 973
                        <br />
                        Guarulhos- São Paulo, 07043-000
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-[#23384c] mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <Link href="https://www.facebook.com/profile.php?id=100063808729662" className="text-muted-foreground hover:text-secondary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="https://www.instagram.com/dals.arq?igsh=ODhnd3BndTB0MmJ6" className="text-muted-foreground hover:text-secondary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link href="https://www.linkedin.com/company/dals-arquitetura/" className="text-muted-foreground hover:text-secondary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-md shadow-sm h-[300px] bg-white">
                  <iframe
                    title="Localização da Dals Arquitetura"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3566310122!2d-43.17916!3d-22.90278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA1JzEwLjAiUyA0M8KwMTAnNDUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1616501323920!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo-white.png" alt="Dals Arquitetura" width={120} height={40} className="h-10 w-auto" />
              </Link>
              <p className="mt-4 text-sm text-gray-300">
                Soluções completas em regularização imobiliária, com profissionalismo e excelência técnica.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-gray-300">(11) 97687-8467</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-gray-300">contato@dalsarquitetura.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dals Arquitetura. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Service Card Component
function ServiceCard({ title, description, icon }) {``
  const icons = {
    FileCheck: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    FileText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
    Award: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    Clipboard: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <rect width="14" height="18" x="5" y="3" rx="2" />
        <path d="M15 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    Scissors: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" x2="8.12" y1="4" y2="15.88" />
        <line x1="14.47" x2="20" y1="14.48" y2="20" />
        <line x1="8.12" x2="12" y1="8.12" y2="12" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
    ),
    ShieldCheck: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    Flame: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
    FileQuestion: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
        <path d="M12 17h.01" />
      </svg>
    ),
    FileEdit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-secondary"
      >
        <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      </svg>
    ),
  }

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f0ea]">{icons[icon]}</div>
        <h3 className="text-xl font-medium text-[#23384c]">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

