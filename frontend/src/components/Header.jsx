// src/components/Header.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur">
      {/* full-width row, edge-to-edge */}
      <div className="flex h-14 items-center justify-between px-2 sm:px-3">
        {/* Left corner: logo */}
        <a
          href="/"
          className="text-[22px] font-extrabold tracking-tight text-slate-900"
        >
          EZSCAN
        </a>

        {/* Right corner: desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          <a
            href="#features"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
          >
            Features
          </a>
          <a
            href="#faqs"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
          >
            FAQs
          </a>
        </nav>

        {/* Right corner: mobile hamburger */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown (also full-width) */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col items-start mx-5 gap-3 px-2 sm:px-3 py-4">
            <a
              href="#features"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#faqs"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
