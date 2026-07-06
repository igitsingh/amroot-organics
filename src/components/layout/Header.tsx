"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Origin", href: "/origin" },
];

const LEARN_LINKS = [
  { label: "Knowledge Hub", href: "/learn/knowledge-hub" },
  { label: "Curcumin Guide", href: "/learn/curcumin-guide" },
  { label: "Single-Origin Explained", href: "/learn/single-origin" },
  { label: "Research", href: "/learn/research" },
  { label: "FAQs", href: "/learn/faqs" },
  { label: "Applications", href: "/learn/applications" },
  { label: "Import Guide", href: "/learn/import-guide" },
  { label: "Certifications", href: "/learn/certifications" },
];

const RIGHT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-stretch justify-center gap-[0.15rem]"
        >
          <span className="font-[family-name:var(--font-outfit)] text-[1.7rem] tracking-tight text-brand-charcoal font-semibold lowercase leading-none text-center">
            amroot
          </span>
          <span className="font-sans font-medium text-brand-pink text-[9px] uppercase leading-none flex justify-between w-full">
            <span>O</span><span>R</span><span>G</span><span>A</span><span>N</span><span>I</span><span>C</span><span>S</span>
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-charcoal/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-brand-green transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-green transition-colors duration-300 py-2">
              Learn <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            <AnimatePresence>
              {learnOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-brand-beige/30 overflow-hidden"
                >
                  <div className="p-3 grid grid-cols-1 gap-1">
                    {LEARN_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="px-4 py-2.5 rounded-xl hover:bg-brand-white text-sm text-brand-charcoal hover:text-brand-green transition-all duration-200 flex items-center justify-between group"
                      >
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {RIGHT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-brand-green transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-brand-charcoal hover:text-brand-green transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="text-brand-charcoal hover:text-brand-green transition-colors">
            <Globe className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <Link
            href="/request-samples"
            className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-green/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Request Samples
          </Link>
        </div>
      </div>
    </header>
  );
}
