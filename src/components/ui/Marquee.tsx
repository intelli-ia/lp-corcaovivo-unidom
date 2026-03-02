'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export function Marquee() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.to(containerRef.current.children, {
            xPercent: -100,
            repeat: -1,
            duration: 25,
            ease: "linear",
        });
    }, []);

    return (
        <div className="w-full py-2 overflow-hidden relative z-20">
            <div ref={containerRef} className="flex">
                <div className="marquee-content flex items-center shrink-0">
                    <Image
                        src="/cordao-corc.png"
                        alt="CORC"
                        width={3000}
                        height={200}
                        className="h-10 w-auto object-contain scale-125"
                        priority
                    />
                </div>
                <div className="marquee-content flex items-center shrink-0">
                    <Image
                        src="/cordao-corc.png"
                        alt="CORC"
                        width={3000}
                        height={200}
                        className="h-10 w-auto object-contain scale-125"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
