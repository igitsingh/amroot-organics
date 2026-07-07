"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowRight, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col border-b border-white/10",
        scrolled
          ? "bg-brand-green/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-brand-green"
      )}
    >
      {/* Shiny & Grainy Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shiny Glitter Grain */}
        <div 
          className="absolute inset-0 mix-blend-color-dodge opacity-[0.4]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
        />
        {/* Glossy Highlights */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 mix-blend-overlay opacity-80" />
      </div>

      {/* Announcement Bar */}
      <div className={cn(
        "w-full relative z-10 bg-brand-pink text-brand-charcoal text-[11px] sm:text-xs text-center tracking-widest font-bold uppercase shadow-sm transition-all duration-500 overflow-hidden",
        scrolled ? "h-0 py-0 opacity-0 border-none" : "h-[32px] py-2 opacity-100"
      )}>
        amrootorganics.com is our only home
      </div>

      <div className={cn(
        "w-full mx-auto px-6 lg:px-8 w-full flex items-center justify-between transition-all duration-500 relative z-10",
        scrolled ? "h-16" : "h-20"
      )}>
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-stretch justify-center gap-[0.15rem]"
        >
          <span className="font-[family-name:var(--font-outfit)] text-[2.2rem] tracking-tight text-brand-white font-semibold lowercase leading-none text-center">
            amroot
          </span>
          <span className="font-sans font-medium text-brand-pink text-[12px] uppercase leading-none flex justify-between w-full">
            <span>O</span><span>R</span><span>G</span><span>A</span><span>N</span><span>I</span><span>C</span><span>S</span>
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-white/90">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-brand-white transition-colors duration-300"
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
            <button className="flex items-center gap-1 hover:text-brand-white transition-colors duration-300 py-2">
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
              className="hover:text-brand-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-brand-white/90 hover:text-brand-white transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <Link
            href="/request-samples"
            className="bg-brand-white text-brand-green px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-white/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Request Samples
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="text-brand-white/90 hover:text-brand-white transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-white p-2 -mr-2 relative z-50"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-green flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl font-medium text-brand-white mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-pink transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Learn Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                  className="flex items-center justify-between text-left hover:text-brand-pink transition-colors"
                >
                  Learn
                  <ChevronDown className={cn("w-5 h-5 transition-transform", mobileLearnOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileLearnOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 mt-4 pl-4 border-l border-brand-white/20"
                    >
                      {LEARN_LINKS.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base text-brand-white/80 hover:text-brand-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-px w-full bg-brand-white/20 my-2" />

              {RIGHT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-pink transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/request-samples"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-white text-brand-green px-6 py-4 rounded-full text-center mt-8 font-semibold hover:bg-brand-beige transition-colors"
              >
                Request Samples
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
