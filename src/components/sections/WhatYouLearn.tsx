'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { Target, Building2, Brain, Sparkles, TrendingUp, Clock } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

const benefits = [
    {
        icon: Target,
        title: 'Clareza no Posicionamento',
        description: 'Descubra o que te torna única no mercado e como comunicar isso com autoridade'
    },
    {
        icon: Building2,
        title: 'Estrutura do Negócio',
        description: 'Organize processos, defina papéis e crie sistemas que funcionam sem você'
    },
    {
        icon: Brain,
        title: 'Inteligência Emocional',
        description: 'Desenvolva autocontrole, confiança e resiliência para decisões assertivas'
    },
    {
        icon: Sparkles,
        title: 'Liderança Feminina',
        description: 'Assuma o comando com empatia, firmeza e presença de liderança autêntica'
    },
    {
        icon: TrendingUp,
        title: 'Estratégia Comercial',
        description: 'Defina ofertas, precificação e abordagem de vendas alinhadas ao seu valor'
    },
    {
        icon: Clock,
        title: 'Gestão do Tempo',
        description: 'Priorize o que importa e elimine sobrecarga para ter mais resultados com menos esforço'
    }
];

export default function WhatYouLearn() {
    return (
        <Section variant="spotlight" id="o-que-voce-vai-aprender">
            <FadeInView direction="up">
                <h2 className={cn(
                    "text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-display",
                    playfair.className
                )}>
                    O que você vai conquistar em apenas 1 dia
                </h2>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                    <FadeInView key={index} direction="up" delay={index * 0.1}>
                        <Card className="h-full group hover:scale-105 hover:border-primary transition-all duration-300">
                            <CardContent className="flex flex-col gap-4 h-full">
                                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    </FadeInView>
                ))}
            </div>
        </Section>
    );
}
