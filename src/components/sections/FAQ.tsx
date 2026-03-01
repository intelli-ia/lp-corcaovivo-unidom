'use client';

import { useState, useRef, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const playfair = Playfair_Display({ subsets: ['latin'] });

const faqItems = [
    {
        question: 'Para quem é este workshop?',
        answer: 'Para mulheres empreendedoras, profissionais liberais, CEOs e líderes que querem estruturar seus negócios, definir posicionamento claro e desenvolver inteligência emocional para liderança.'
    },
    {
        question: 'Preciso ter experiência prévia?',
        answer: 'Não. O conteúdo é aplicável tanto para quem está começando quanto para quem já tem negócio estabelecido e quer dar o próximo passo.'
    },
    {
        question: 'O que está incluído no ingresso?',
        answer: 'Dia completo de imersão (08h-17h), coffee breaks, almoço, material de apoio e certificado de participação.'
    },
    {
        question: 'Onde será realizado?',
        answer: 'O local será informado em breve para os inscritos. Será um espaço preparado para experiência completa e confortável.'
    },
    {
        question: 'Há vagas limitadas?',
        answer: 'Sim. Para garantir qualidade e interação, limitamos a turma. Recomendamos garantir sua vaga no lote promocional atual.'
    },
    {
        question: 'Posso parcelar o pagamento?',
        answer: 'Sim. Aceitamos parcelamento em até 12x no cartão de crédito.'
    },
    {
        question: 'E se eu não puder comparecer?',
        answer: 'Consulte nossa política de reembolso no momento da compra. Transferências de data podem ser avaliadas caso a caso.'
    },
    {
        question: 'Vou receber certificado?',
        answer: 'Sim. Todas as participantes recebem certificado digital de conclusão do Workshop Lidere Sua Marca.'
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                gsap.to(contentRef.current, { height: 'auto', duration: 0.3, ease: 'power2.out' });
            } else {
                gsap.to(contentRef.current, { height: 0, duration: 0.3, ease: 'power2.out' });
            }
        }
    }, [isOpen]);

    return (
        <FadeInView direction="up" delay={index * 0.05}>
            <div className="border-b border-white/10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center py-6 text-left hover:bg-white/5 transition-colors px-4 -mx-4 rounded"
                >
                    <span className="font-semibold pr-8">{question}</span>
                    <ChevronDown
                        className={cn(
                            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
                            isOpen && "rotate-180"
                        )}
                    />
                </button>
                <div ref={contentRef} className="overflow-hidden h-0">
                    <p className="text-white/70 pb-6 px-4 -mx-4 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </FadeInView>
    );
}

export default function FAQ() {
    return (
        <Section variant="default" id="faq">
            <div className="max-w-7xl mx-auto">
                <FadeInView direction="up">
                    <h2 className={cn(
                        "text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-display",
                        playfair.className
                    )}>
                        Perguntas Frequentes
                    </h2>
                </FadeInView>

                <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-start">
                    {/* Left Column - FAQs */}
                    <div className="space-y-0">
                        {faqItems.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Right Column - WhatsApp CTA */}
                    <div className="lg:sticky lg:top-24">
                        <FadeInView direction="up" delay={0.2}>
                            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 md:p-10">
                                {/* Top highlight */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/20 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </div>

                                {/* Content */}
                                <h3 className={cn(
                                    "text-2xl md:text-3xl mb-4 font-display leading-tight",
                                    playfair.className
                                )}>
                                    Ficou com mais alguma dúvida?
                                </h3>

                                <p className="text-white/70 mb-8 leading-relaxed">
                                    Fale agora com a nossa equipe comercial via WhatsApp. Estamos prontas para ajudar!
                                </p>

                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Workshop%20Lidere%20Sua%20Marca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden"
                                >
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <span className="relative">Falar via WhatsApp</span>
                                </a>

                                {/* Bottom info */}
                                <p className="text-xs text-white/40 text-center mt-4">
                                    Respondemos em até 5 minutos ⚡
                                </p>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </div>
        </Section>
    );
}
