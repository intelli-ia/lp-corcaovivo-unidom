'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInViewProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

export function FadeInView({
    children,
    direction = 'up',
    delay = 0,
    className = ''
}: FadeInViewProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const element = elementRef.current;

        // Determinar valores iniciais baseado na direção
        let from: gsap.TweenVars = { opacity: 0 };

        switch (direction) {
            case 'up':
                from.y = 50;
                break;
            case 'down':
                from.y = -50;
                break;
            case 'left':
                from.x = 50;
                break;
            case 'right':
                from.x = -50;
                break;
        }

        const ctx = gsap.context(() => {
            gsap.from(element, {
                ...from,
                duration: 0.8,
                delay,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => ctx.revert();
    }, [direction, delay]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}
