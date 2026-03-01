import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f0f0f] border-t border-white/10">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Coluna 1: Logo + Tagline */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <span>✱</span>
                            <span>Workshop Lidere Sua Marca</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            Estruture seu negócio, defina seu posicionamento e assuma a liderança que você nasceu para ter.
                        </p>
                    </div>

                    {/* Coluna 2: Links Úteis */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white">Links Úteis</h3>
                        <nav className="flex flex-col gap-2">
                            <a
                                href="#o-que-voce-vai-aprender"
                                className="text-white/60 hover:text-white transition-colors text-sm"
                            >
                                O que você vai aprender
                            </a>
                            <a
                                href="#programacao"
                                className="text-white/60 hover:text-white transition-colors text-sm"
                            >
                                Programação
                            </a>
                            <a
                                href="#sobre"
                                className="text-white/60 hover:text-white transition-colors text-sm"
                            >
                                Sobre a Priscila
                            </a>
                            <a
                                href="#depoimentos"
                                className="text-white/60 hover:text-white transition-colors text-sm"
                            >
                                Depoimentos
                            </a>
                            <a
                                href="#faq"
                                className="text-white/60 hover:text-white transition-colors text-sm"
                            >
                                FAQ
                            </a>
                        </nav>
                    </div>

                    {/* Coluna 3: Redes Sociais */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white">Contato</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://instagram.com/priscilasouza"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                            >
                                <Instagram className="w-5 h-5" />
                                <span>@priscilasouza</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/priscilasouza"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span>/priscilasouza</span>
                            </a>
                            <a
                                href="mailto:contato@lideresuamarca.com"
                                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                            >
                                <Mail className="w-5 h-5" />
                                <span>contato@lideresuamarca.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-center text-white/40 text-sm">
                        © 2026 Priscila Souza. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
