// src/components/HeroSection.jsx
import { motion } from "framer-motion";

const HeroSection = ({ onOpenSubscribe }) => {
  const fallbackScroll = () => {
    document.querySelector("#pricing, #subscribe")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const bgUrl = `${import.meta.env.BASE_URL}background.png`;
  const heroUrl = `${import.meta.env.BASE_URL}hero1.png`;

  return (
    <section className="relative overflow-hidden bg-white py-20 ">
      {/* Background image */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 bg-top bg-no-repeat bg-cover select-none pointer-events-none"
        style={{ backgroundImage: `url(${bgUrl})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      {/* Top fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-32 sm:h-40 bg-gradient-to-b from-white/90 via-white/60 to-transparent" />

      {/* 80% width container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[88%] lg:w-[80%] pt-12 md:pt-16 flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-black"
        >
          Check{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            OMR Sheets
          </span>
          <br className="hidden sm:block" />
          Instantly with AI
        </motion.h1>

        {/* Subheadline (consistent gap from title) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 max-w-2xl text-center text-sm md:text-base text-gray-600"
        >
          Save hours of manual work with fast, accurate, and automated OMR evaluation.
        </motion.p>

        {/* CTA (consistent gap from subheadline) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={onOpenSubscribe ? onOpenSubscribe : fallbackScroll}
            className="rounded-full bg-black px-6 py-2 text-sm md:text-base font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg focus:outline-none"
            aria-haspopup="dialog"
          >
            Get Started
          </button>
        </motion.div>

        {/* Illustration (hero image kept short & consistent) */}
        <motion.img
          src={heroUrl}
          alt="AI OMR checking illustration"
          className="
            mt-8 mx-auto
            w-full
            max-w-[560px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[720px]
            max-h-[340px] md:max-h-[380px] lg:max-h-[420px]
            object-contain select-none drop-shadow-xl
          "
          initial={{ opacity: 0, y: 18, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
