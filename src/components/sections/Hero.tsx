'use client';

import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-background flex flex-col overflow-hidden text-foreground pb-20">

            {/* Background with multiple blend modes to simulate the photographic effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-background via-primary-dark/80 to-transparent" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full mix-blend-color-dodge opacity-60 blur-[100px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #ff3333 0%, transparent 70%)' }}
                />
                {/* Placeholder for the main hero image */}
                <div className="absolute right-0 bottom-0 md:right-[10%] w-[120%] md:w-[60%] h-[100%] max-h-screen object-cover opacity-80 mix-blend-luminosity mix-blend-hard-light bg-black/20" />
            </div>

            {/* Header Embedded */}
            <header className="relative z-10 w-full px-6 md:px-12 py-8 flex justify-between items-center text-sm md:text-base border-b border-border/10">
                <div className="flex items-center gap-2 md:gap-4 font-semibold tracking-wide">
                    <span className="text-xl">✱</span>
                    <span className="opacity-90">Workshop Lançamento Pago</span>
                    <span className="opacity-50 hidden md:inline">|</span>
                    <span className="opacity-70 font-light">5ª Edição</span>
                </div>
                <div className="flex items-center gap-2 font-medium opacity-90">
                    <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="font-semibold">23 de Março</span>
                    <span className="opacity-50">|</span>
                    <span className="font-light">08h às 17h</span>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 w-full max-w-7xl mx-auto py-12">
                <div className="max-w-2xl">
                    <h1 className={cn(
                        "text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.2] tracking-tight mb-8 font-display",
                        playfair.className
                    )}>
                        Desenhe a estratégia do seu lançamento pago do jeito certo, em apenas 2 dias.
                    </h1>

                    <p className="text-base md:text-lg mb-10 text-white/70 max-w-xl font-light leading-relaxed">
                        Validado por mais de 200 mentorados.<br />
                        Foram 20 lançamentos e 18 milhões faturados,<br />
                        em pequenos nichos só com a Orbyka.
                    </p>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center max-w-max">
                        <button className="bg-[#0f0f0f] border border-white/10 hover:bg-white hover:text-black transition-colors duration-300 text-white px-8 py-4 rounded font-medium flex items-center gap-3">
                            <span>Comprar ingresso | Lote 01</span>
                        </button>
                        <div className="flex flex-col justify-center">
                            <span className="text-sm line-through opacity-50">DE R$ 79</span>
                            <span className="font-semibold tracking-wide">POR R$ 29</span>
                        </div>
                    </div>

                    <div className="mt-8 max-w-xs">
                        <div className="h-1 w-full bg-white/10 relative rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-[93%] bg-white rounded-full"></div>
                        </div>
                        <p className="mt-2 text-xs opacity-70">
                            <span className="font-semibold">93%</span> dos ingressos vendidos a R$ 29,00
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side pagination decorative elements */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3 opacity-30">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={i} className={cn(
                        "h-px bg-white transition-all duration-300",
                        i === 5 ? "w-8 opacity-100" : "w-4 hover:w-6"
                    )} />
                ))}
            </div>
        </section>
    );
}
