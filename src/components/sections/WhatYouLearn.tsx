'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { MapPin } from 'lucide-react';
import { RegistrationModal } from '@/components/features/registration/RegistrationModal';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function WhatYouLearn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddToCalendar = () => {
        // Criar evento no formato iCalendar
        const event = {
            title: 'CORC Ao Vivo - Aula 55',
            description: 'Aprenda Raciocínio Clínico com o Dr. Carlos Gusmão - Aula gratuita e presencial',
            location: 'UnidomPedro Afya Civil Trade - R. Frederico Simões - Caminho das Árvores, Salvador - BA, 41820-774',
            startDate: '2026-03-21T08:00:00',
            endDate: '2026-03-21T13:00:00'
        };

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CORC Ao Vivo//PT
BEGIN:VEVENT
UID:${Date.now()}@corc-aula.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20260321T080000
DTEND:20260321T130000
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'corc-aula-55.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Section variant="spotlight" id="localizacao">
                <div className="max-w-4xl mx-auto">
                    <FadeInView direction="up">
                        <h1 className={cn(
                            "text-4xl md:text-5xl lg:text-6xl text-center mb-6 font-display",
                            playfair.className
                        )}>
                            Local da Aula
                        </h1>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.1}>
                        <h2 className={cn(
                            "text-2xl md:text-3xl lg:text-4xl text-center mb-4 font-display text-white/90",
                            playfair.className
                        )}>
                            UnidomPedro Afya Civil Trade
                        </h2>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.2}>
                        <div className="flex items-center justify-center gap-2 mb-12 text-white/70">
                            <MapPin className="w-5 h-5 hidden md:inline-block" />
                            <p className="text-lg text-center">
                                Auditório 1° Andar Civil Trade
                            </p>
                        </div>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.3}>
                        <div className="relative w-full h-[400px] md:h-[450px] rounded-lg overflow-hidden mb-8 border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.862265366605!2d-38.45582090080261!3d-12.980660079634623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1ac0bbdfdd%3A0x3218a6e4ad3d4256!2sUnidomPedro%20Afya%20Civil%20Trade!5e0!3m2!1spt-BR!2sbr!4v1773068926177!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#e59f14] border border-[#e59f14]/20 hover:bg-white hover:text-[#e59f14] transition-colors duration-300 text-white px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-3 w-full md:w-auto"
                            >
                                <span>Entrar na Lista de Espera</span>
                            </button>
                        </div>
                    </FadeInView>
                </div>
            </Section>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddToCalendar={handleAddToCalendar}
            />
        </>
    );
}
