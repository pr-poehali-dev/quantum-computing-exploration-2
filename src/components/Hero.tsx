import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/e75878f3-fb52-4a99-8c89-4e48de425645.jpg"
          alt="Бали на закате"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          SHE BALI
        </h1>
        <p className="text-xl md:text-2xl font-light mb-3 opacity-95 leading-relaxed">
          10 дней, чтобы влюбиться в себя.
        </p>
        <p className="text-base md:text-lg font-light opacity-80 mb-8 max-w-xl mx-auto">
          Пилатес, океан и остров, который меняет людей.
        </p>
        <p className="text-2xl md:text-3xl font-semibold tracking-widest mb-10">
          22 ИЮЛЯ — 31 ИЮЛЯ
        </p>
        <a
          href="#contact"
          className="inline-block border border-white text-white uppercase text-sm tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          Забронировать место
        </a>
      </div>
    </div>
  );
}