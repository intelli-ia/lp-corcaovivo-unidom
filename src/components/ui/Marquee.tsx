'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
    "Comparecimento de 50 a 75%",
    "Conversão de 11 a 20%",
    "Lead paga o tráfego",
    "Converte público frio (50%)"
];

export function Marquee() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const content = containerRef.current.querySelector('.marquee-content');
        if (!content) return;

        // Clone for infinite scroll
        const clone = content.cloneNode(true);
        containerRef.current.appendChild(clone);

        gsap.to(containerRef.current.children, {
            xPercent: -100,
            repeat: -1,
            duration: 20,
            ease: "linear",
        });
    }, []);

    return (
        <div className="w-full bg-[#1a1c1d] border-t border-white/5 py-4 overflow-hidden relative z-20 flex whitespace-nowrap">
            <div ref={containerRef} className="flex">
                <div className="marquee-content flex items-center pr-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center text-white/70 text-sm font-semibold tracking-wide">
                            <span className="px-12">{item}</span>
                            <span className="text-white/30 text-xs">⬢</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
