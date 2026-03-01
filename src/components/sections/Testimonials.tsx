'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

const testimonials = [
    {
        name: 'Ana Paula Ribeiro',
        role: 'Consultora de Imagem',
        content: 'Saí do workshop com meu posicionamento completamente reestruturado. Finalmente entendi como me comunicar com autoridade e já aumentei meu ticket médio em 40%.',
        rating: 5
    },
    {
        name: 'Juliana Martins',
        role: 'CEO Tech Startup',
        content: 'A Priscila tem uma didática incrível. Em um dia, organizei processos que vinha adiando há meses. Meu negócio nunca esteve tão estruturado.',
        rating: 5
    },
    {
        name: 'Camila Souza',
        role: 'Coach de Carreira',
        content: 'O módulo de inteligência emocional foi transformador. Aprendi a tomar decisões com mais clareza e menos sobrecarga emocional.',
        rating: 5
    },
    {
        name: 'Beatriz Santos',
        role: 'Arquiteta',
        content: 'Workshop intenso e prático. Saí com plano de ação claro e a confiança que precisava para assumir a liderança no meu escritório.',
        rating: 5
    },
    {
        name: 'Mariana Costa',
        role: 'Nutricionista',
        content: 'Investimento que se paga sozinho. Reestruturei minha oferta, aumentei preços e ainda me sinto mais segura para liderar.',
        rating: 5
    },
    {
        name: 'Renata Lima',
        role: 'Designer',
        content: 'Energia incrível, conteúdo direto ao ponto e uma turma de mulheres incríveis. Recomendo demais!',
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            const nextIndex = prev + newDirection;
            if (nextIndex < 0) return testimonials.length - 1;
            if (nextIndex >= testimonials.length) return 0;
            return nextIndex;
        });
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2);
    };

    return (
        <Section variant="default" id="depoimentos">
            <FadeInView direction="up">
                <h2 className={cn(
                    "text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-display",
                    playfair.className
                )}>
                    O que dizem as participantes
                </h2>
            </FadeInView>

            <div className="max-w-4xl mx-auto">
                <div className="relative h-[400px] md:h-[350px] flex items-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full"
                        >
                            <Card className="hover:scale-100">
                                <CardContent className="p-8 md:p-12 space-y-6">
                                    {/* Quote Icon */}
                                    <Quote className="w-12 h-12 text-primary opacity-50" />

                                    {/* Content */}
                                    <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                            <span className="text-sm font-semibold">
                                                {getInitials(testimonials[currentIndex].name)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-sm text-white/60">
                                                {testimonials[currentIndex].role}
                                            </div>
                                        </div>
                                        <div className="ml-auto flex gap-1">
                                            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => paginate(-1)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-white/30 hover:bg-white/50"
                                )}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(1)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                        aria-label="Próximo depoimento"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </Section>
    );
}
