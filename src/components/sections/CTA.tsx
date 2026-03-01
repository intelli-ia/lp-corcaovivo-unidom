'use client';

import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { useEffect, useRef } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!glowRef.current) return;

            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(229, 159, 20, 0.1), transparent 40%)`;
        };

        const section = sectionRef.current;
        section?.addEventListener('mousemove', handleMouseMove);

        return () => {
            section?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
        >
            {/* Interactive glow effect */}
            <div
                ref={glowRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            />

            {/* Fixed decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
                <div
                    className="w-full h-full rounded-full blur-[150px]"
                    style={{ background: 'radial-gradient(circle, #e59f14 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* Glass card container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
                    {/* Inner glow border effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-50">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    <div className="relative px-8 py-16 md:px-16 md:py-20">
                        {/* Small badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e59f14]/10 border border-[#e59f14]/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#e59f14] animate-pulse" />
                            <span className="text-xs font-medium tracking-wider uppercase text-white/90">
                                Últimas vagas
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            {/* Left side - Content */}
                            <div>
                                <h2 className={cn(
                                    "text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6",
                                    playfair.className
                                )}>
                                    Garanta sua vaga agora
                                </h2>

                                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                                    Não perca a oportunidade de transformar seu negócio e sua liderança em apenas 1 dia.
                                </p>

                                {/* Benefits */}
                                <div className="space-y-4 mb-10">
                                    {[
                                        'Acesso ao workshop completo de 9 horas',
                                        'Material exclusivo de apoio',
                                        'Certificado de participação',
                                        'Coffee break e almoço inclusos',
                                        'Networking com outras empreendedoras'
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <svg
                                                    className="w-5 h-5 text-[#e59f14]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-white/80 text-sm md:text-base">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right side - CTA Card */}
                            <div>
                                <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 md:p-10">
                                    {/* Subtle top highlight */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="text-sm text-white/50 line-through">
                                                De R$ 200
                                            </span>
                                            <span className="inline-flex px-2 py-1 bg-[#e59f14]/20 border border-[#e59f14]/30 rounded text-xs font-semibold text-[#e59f14]">
                                                -5%
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl md:text-6xl font-bold tracking-tight">
                                                R$ 189
                                            </span>
                                        </div>
                                        <p className="text-sm text-white/60 mt-2">
                                            Lote 01 - Condições especiais
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="group relative w-full bg-white text-black hover:bg-[#e59f14] hover:text-white transition-all duration-500 px-8 py-5 rounded-xl font-semibold text-lg overflow-hidden">
                                        {/* Button shine effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                        <span className="relative flex items-center justify-center gap-3">
                                            Garantir minha vaga
                                            <svg
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Urgency indicator */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <div className="flex items-center justify-between text-sm mb-3">
                                            <span className="text-white/60">Vagas restantes</span>
                                            <span className="font-semibold text-white/90">33%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#e59f14] to-[#f0b942] rounded-full transition-all duration-1000"
                                                style={{ width: '33%' }}
                                            />
                                        </div>
                                        <p className="text-xs text-white/50 mt-3 text-center">
                                            ⚡ Apenas <span className="text-[#e59f14] font-semibold">10 vagas</span> disponíveis neste lote
                                        </p>
                                    </div>

                                    {/* Trust badges */}
                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/40">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                                            </svg>
                                            <span>Pagamento seguro</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                            <span>Certificado incluso</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social proof */}
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-background flex items-center justify-center text-xs font-semibold"
                                            >
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-white/60">
                                        <span className="font-semibold text-white/90">67 mulheres</span> já garantiram suas vagas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
