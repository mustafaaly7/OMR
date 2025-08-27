// src/components/FAQSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is EZSCAN?",
    answer:
      "EZSCAN is an AI-powered platform that helps you check OMR sheets instantly with high accuracy and clean exports.",
  },
  {
    question: "Is it safe & secure?",
    answer:
      "Yes. We use encrypted storage and secure processing. Your data is isolated per account and never shared.",
  },
  {
    question: "Are you brand-affiliated?",
    answer:
      "No. We’re an independent product. Any brand names you see are for compatibility only.",
  },
  {
    question: "How are you science-backed exactly?",
    answer:
      "Our recognition models are evaluated against benchmark datasets and continuously validated with real exam sheets.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((p) => (p === i ? null : i));

  return (
    <section id="faqs" className="py-20 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-6">
        {/* card container */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-slate-800 text-white shadow-xl ring-1 ring-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* left title column */}
            <div className="md:col-span-5 p-8 sm:p-10 md:p-12 lg:p-14">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Frequently
                <br /> Asked
                <br /> Questions
              </h2>
            </div>

            {/* right accordion column */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-12">
              <ul className="divide-y divide-white/10">
                {faqs.map((item, i) => {
                  const open = openIndex === i;
                  return (
                    <li key={i} className="py-3 sm:py-4">
                      <button
                        onClick={() => toggle(i)}
                        className="w-full flex items-center justify-between gap-6 text-left group"
                        aria-expanded={open}
                      >
                        <span className="text-sm sm:text-base text-slate-200 group-hover:text-white">
                          {item.question}
                        </span>
                        <span className="shrink-0 rounded-full bg-white/10 p-1.5">
                          {open ? (
                            <Minus className="h-4 w-4 text-white" />
                          ) : (
                            <Plus className="h-4 w-4 text-white" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-6 text-slate-300">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
