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
            <div className="max-w-3xl mx-auto">
                <FadeInView direction="up">
                    <h2 className={cn(
                        "text-3xl md:text-4xl lg:text-5xl text-center mb-12 font-display",
                        playfair.className
                    )}>
                        Perguntas Frequentes
                    </h2>
                </FadeInView>

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
            </div>
        </Section>
    );
}
