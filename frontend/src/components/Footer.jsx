// src/components/Footer.jsx
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  return (
    <footer className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* top grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          {/* left blurb */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <p className="text-[13px] leading-6 text-slate-600">
              EZSCAN is an AI-powered OMR checker that turns paper answer sheets into instant, reliable results. Scan or upload, review error highlights, and export reports in CSV, PDF, or Excel—securely stored in the cloud for teachers and researchers.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#123769]">
              Services
            </h4>
            <ul className="space-y-2 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Email Marketing</a></li>
              <li><a href="#" className="hover:text-slate-900">Campaigns</a></li>
              <li><a href="#" className="hover:text-slate-900">Branding</a></li>
              <li><a href="#" className="hover:text-slate-900">Offline</a></li>
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#123769]">About</h4>
            <ul className="space-y-2 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Our Story</a></li>
              <li><a href="#" className="hover:text-slate-900">Benefits</a></li>
              <li><a href="#" className="hover:text-slate-900">Team</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </motion.div>

          {/* Follow us */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#123769]">
              Follow us
            </h4>
            <ul className="space-y-2 text-[13px] text-slate-600">
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-slate-200 py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-[12px] text-slate-500 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} EZSCAN. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-700">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
