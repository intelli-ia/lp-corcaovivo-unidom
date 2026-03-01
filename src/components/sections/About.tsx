'use client';

import { Section } from '@/components/ui/Section';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { Award, Users, Star, TrendingUp } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

const credentials = [
    { icon: Users, text: '2.500+ mulheres impactadas' },
    { icon: TrendingUp, text: '10+ anos de experiência' },
    { icon: Star, text: '5 edições do workshop' },
    { icon: Award, text: 'Especialista em Inteligência Emocional' }
];

export default function About() {
    return (
        <Section variant="default" id="sobre">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Imagem - Placeholder */}
                <FadeInView direction="left">
                    <div className="relative aspect-square rounded-lg border border-white/10 bg-gradient-to-br from-primary/30 to-primary-dark/50 flex items-center justify-center overflow-hidden">
                        <p className="text-white/40 text-sm font-medium">Foto Priscila Souza</p>
                    </div>
                </FadeInView>

                {/* Conteúdo */}
                <div className="space-y-8">
                    <FadeInView direction="right">
                        <h2 className={cn(
                            "text-3xl md:text-4xl lg:text-5xl mb-6 font-display",
                            playfair.className
                        )}>
                            Quem é Priscila Souza
                        </h2>
                    </FadeInView>

                    <FadeInView direction="right" delay={0.1}>
                        <div className="space-y-4 text-white/70 leading-relaxed">
                            <p>
                                Mentora de negócios e liderança feminina, especialista em inteligência emocional aplicada ao empreendedorismo. Há mais de 10 anos ajudando mulheres a estruturarem seus negócios e assumirem posições de liderança com clareza e confiança.
                            </p>
                            <p>
                                Já impactou mais de 2.500 empreendedoras em todo o Brasil através de mentorias, workshops e programas de desenvolvimento. Criadora da metodologia Lidere Sua Marca, que une estratégia de negócios, posicionamento de mercado e autogestão emocional.
                            </p>
                        </div>
                    </FadeInView>

                    {/* Credenciais */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {credentials.map((credential, index) => (
                            <FadeInView key={index} direction="right" delay={0.15 + index * 0.05}>
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                        <credential.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium">{credential.text}</p>
                                </div>
                            </FadeInView>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
