// src/components/VideoSection.jsx
import { motion } from "framer-motion";

const VideoSection = ({
  title = "See It In Action",
  subtitle = "Watch how EzScan checks papers in seconds.",
  videoSrc = "https://www.youtube.com/embed/r6IixRvEACA?si=JkSLI7oh2qxEwJld",
}) => {
  return (
    <section id="demo" className="relative py-20 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading (optional) */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-8 sm:mb-10"
          >
            {title && (
              <h2 className="text-2xl py-3 sm:text-3xl md:text-4xl font-extrabold  tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm mb-12 sm:text-base text-slate-600">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-[#00786F]/20"
        >
          {/* 16:9 responsive wrapper */}
          <div className="relative w-full overflow-hidden rounded-xl bg-black pt-[56.25%]">
            <iframe
              src={videoSrc}
              title="OMRify demo video"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
