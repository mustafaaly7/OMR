import { motion } from "framer-motion";
import { Brain, FileText, AlertTriangle, Cloud, BarChart, FileDown } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-powered scanning",
      description:
        "Scan OMR sheets instantly with AI for fast and error-free results.",
      icon: "brain",
    },
    {
      title: "Multiple file formats",
      description:
        "Export results in Excel, PDF, or CSV — making sharing and analysis effortless.",
      icon: "file",
    },
    {
      title: "Detailed error reports",
      description:
        "Get clear insights with detailed error reports to identify mistakes and improve accuracy.",
      icon: "error",
    },
    {
      title: "Secure cloud-based storage",
      description:
        "Store and access all your OMR results safely in the cloud with advanced data protection.",
      icon: "cloud",
    },
    {
      title: "Real-time progress tracking",
      description:
        "Monitor scanning progress and results instantly, keeping you updated every step of the way.",
      icon: "graph",
    },
    {
      title: "Export reports in PDF format",
      description:
        "Easily export your OMR results as PDF files for sharing, printing, or record-keeping.",
      icon: "transfer",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    // bg-gradient-to-br from-indigo-50 to-white
    <section
      id="features"
      className="py-22  text-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-[#9429FF] to-[#F49867] bg-clip-text "
>
  What We Offer ?
</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto"
        >
          in virtual space through communication platforms. Durable relations that extend beyond immediate genealogical ties.
        </motion.p>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={i}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              className="
                bg-white
                border-2 border-[#1D293D]
                rounded-2xl p-6
                shadow-sm hover:shadow-md
                transition duration-300
                text-left
              "
            >
              {/* Icon pill */}
              <motion.div
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#1D293D]/10 ring-1 ring-[#1D293D]/20 mb-4"
                whileHover={{ scale: 1.06 }}
              >
                <motion.img
                  src={`/icon/${f.icon}.png`}
                  alt={f.title}
                  className="w-8 h-8 object-contain"
                  whileHover={{ scale: 1.12 }}
                />
              </motion.div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-[#1D293D] mb-2">
                {f.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
