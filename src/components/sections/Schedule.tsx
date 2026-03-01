'use client';

import { useEffect, useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ['latin'] });

const scheduleItems = [
    {
        time: '08h00 - 08h30',
        title: 'Credenciamento e Welcome Coffee',
        description: 'Recepção, networking e preparação para o dia'
    },
    {
        time: '08h30 - 10h00',
        title: 'Módulo 1: Autoconhecimento e Propósito',
        description: 'Quem você é como líder / Seus valores e visão de negócio'
    },
    {
        time: '10h00 - 10h20',
        title: 'Coffee Break',
        description: ''
    },
    {
        time: '10h20 - 12h00',
        title: 'Módulo 2: Posicionamento Estratégico',
        description: 'Defina sua mensagem única / Estruture sua oferta de valor'
    },
    {
        time: '12h00 - 13h30',
        title: 'Almoço',
        description: ''
    },
    {
        time: '13h30 - 15h00',
        title: 'Módulo 3: Estrutura e Processos',
        description: 'Organizando operações / Sistemas que escalam'
    },
    {
        time: '15h00 - 15h20',
        title: 'Coffee Break',
        description: ''
    },
    {
        time: '15h20 - 16h30',
        title: 'Módulo 4: Inteligência Emocional para Liderança',
        description: 'Gestão de emoções / Tomada de decisão assertiva'
    },
    {
        time: '16h30 - 17h00',
        title: 'Encerramento e Plano de Ação',
        description: 'Consolidação do aprendizado / Próximos passos'
    }
];

export default function Schedule() {
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!lineRef.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: 'top',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section variant="gradient" id="programacao">
            <FadeInView direction="up">
                <h2 className={cn(
                    "text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-display",
                    playfair.className
                )}>
                    Programação completa de 23 de Março
                </h2>
            </FadeInView>

            <div ref={containerRef} className="timeline-container relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 hidden md:block">
                    <div
                        ref={lineRef}
                        className="timeline-line absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary to-primary/50 origin-top"
                    />
                </div>

                {/* Timeline Items */}
                <div className="space-y-8">
                    {scheduleItems.map((item, index) => (
                        <FadeInView key={index} direction="up" delay={index * 0.05}>
                            <div className={cn(
                                "relative flex gap-8 items-center",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}>
                                {/* Time Circle */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary border-2 border-white/30 items-center justify-center shadow-lg shadow-primary/50 z-10">
                                    <div className="w-3 h-3 rounded-full bg-white" />
                                </div>

                                {/* Content Card */}
                                <div className={cn(
                                    "w-full md:w-[calc(50%-4rem)]",
                                    index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                                )}>
                                    <Card>
                                        <CardContent className="space-y-2">
                                            <div className="text-primary font-semibold text-sm">
                                                {item.time}
                                            </div>
                                            <h3 className="font-semibold text-lg">
                                                {item.title}
                                            </h3>
                                            {item.description && (
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </Section>
    );
}
