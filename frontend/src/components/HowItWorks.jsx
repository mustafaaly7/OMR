// src/components/HowItWorks.jsx
import { motion } from "framer-motion";
import {
  Printer,
  Scan,
  FileText,
  LineChart,
  Database,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const steps = [
  { label: "Print OMR Sheets", icon: Printer },
  { label: "Scan", icon: Scan },
  { label: "Read", icon: FileText },
  { label: "Analyze", icon: LineChart },
  { label: "Results", icon: Database },
];

const Step = ({ icon: Icon, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
    className="flex flex-col items-center text-center gap-3 md:gap-4"
  >
    <div className="relative py-20">
      <div className="size-24 sm:size-28 rounded-full bg-white ring-1 ring-slate-200 shadow-md flex items-center justify-center">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-teal-700" strokeWidth={2.2} />
      </div>
      {/* soft glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-white blur-2xl scale-150"
      />
    </div>
    <p className="text-sm sm:text-base font-medium text-slate-800">{label}</p>
  </motion.div>
);

const Arrow = ({ index }) => (
  <>
    {/* horizontal arrow for md+ */}
    <div className="hidden md:flex items-center justify-center">
      <ArrowRight className="h-8 w-8 text-teal-700/70" strokeWidth={2.6} />
    </div>
    {/* vertical arrow for mobile */}
    <div className="md:hidden flex items-center justify-center my-2">
      <ArrowDown className="h-8 w-8 text-teal-700/70" strokeWidth={2.6} />
    </div>
  </>
);

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden"
    >
      {/* subtle pastel background that matches your site */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-white"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6  sm:py-18">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800"
        >
          How It Works
        </motion.h2>

        {/* steps row */}
        <div className="  flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center md:gap-8">
              <Step icon={s.icon} label={s.label} index={i} />
              {i < steps.length - 1 && <Arrow index={i} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
