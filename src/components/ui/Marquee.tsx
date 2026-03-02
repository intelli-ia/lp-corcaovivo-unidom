import Image from 'next/image';

export function Marquee() {
    return (
        <div className="w-full py-4 md:py-2 overflow-hidden relative z-20">
            {/* Mobile: Imagem estática centralizada */}
            <div className="flex md:hidden justify-center items-center">
                <Image
                    src="/cordao-corc.png"
                    alt="CORC"
                    width={3000}
                    height={200}
                    className="h-auto w-full max-w-[900px] object-contain scale-[5]"
                    priority
                />
            </div>

            {/* Desktop: Marquee animado */}
            <div className="hidden md:flex animate-marquee">
                <Image
                    src="/cordao-corc.png"
                    alt="CORC"
                    width={3000}
                    height={200}
                    className="h-10 w-auto object-contain scale-125 shrink-0"
                    priority
                />
                <Image
                    src="/cordao-corc.png"
                    alt="CORC"
                    width={3000}
                    height={200}
                    className="h-10 w-auto object-contain scale-125 shrink-0"
                    priority
                />
            </div>
        </div>
    );
}
