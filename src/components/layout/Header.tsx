"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, Layers, Cpu, Database } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const LOGO_BLUE = "https://res.cloudinary.com/db13xynvi/image/upload/w_600,c_scale,f_auto,q_auto/v1787102414/intactic-blue_akez03.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"EN" | "BN">("EN");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const serviceIcons = [
    <Sparkles key="ai" className="w-4 h-4 text-primary" />,
    <Layers key="plat" className="w-4 h-4 text-primary" />,
    <Cpu key="app" className="w-4 h-4 text-primary" />,
    <Database key="data" className="w-4 h-4 text-primary" />,
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Intactic - Home"
          >
            <div className="relative w-36 h-9 sm:w-44 sm:h-11 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src={LOGO_BLUE}
                alt="Intactic Logo"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {content.navigation.links.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors duration-150 rounded-lg",
                        servicesDropdownOpen
                          ? "text-primary bg-primary/5"
                          : "text-slate-800 hover:text-primary hover:bg-slate-100/70"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-slate-500",
                          servicesDropdownOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>

                    {/* Mega-menu / Dropdown Panel */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-0 top-full pt-2 w-[460px] z-50"
                        >
                          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-elevated">
                            <div className="px-3 py-2 border-b border-slate-100 mb-2">
                              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                                Engineering &amp; AI Capabilities
                              </span>
                            </div>
                            <div className="grid grid-cols-1 gap-1.5">
                              {link.dropdownItems?.map((item, idx) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all duration-150"
                                >
                                  <div className="p-2.5 rounded-xl bg-primary/8 group-hover:bg-primary group-hover:text-white text-primary transition-colors mt-0.5 border border-primary/15">
                                    {serviceIcons[idx % serviceIcons.length]}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                      </span>
                                      {item.tag && (
                                        <span className="px-2 py-0.5 text-[10px] font-bold bg-primary/10 text-primary rounded-full">
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 group-hover:text-slate-600 font-normal">
                                      {item.description}
                                    </p>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all self-center" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-slate-100/70 rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Control (Bilingual UI Ready) */}
            <div
              className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-0.5 text-xs font-bold"
              role="group"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => setActiveLang("EN")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all duration-150",
                  activeLang === "EN"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                )}
                aria-pressed={activeLang === "EN"}
              >
                {content.navigation.langEn}
              </button>
              <button
                type="button"
                onClick={() => setActiveLang("BN")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all duration-150",
                  activeLang === "BN"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                )}
                aria-pressed={activeLang === "BN"}
              >
                {content.navigation.langBn}
              </button>
            </div>

            {/* Primary Header CTA (Amber/Gold Brain Station 23 style button) */}
            <Link
              href={content.hero.primaryCta.href}
              className="relative group inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-950 bg-secondary rounded-full overflow-hidden shadow-sm hover:shadow-md hover:bg-secondary-500 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {content.navigation.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveLang(activeLang === "EN" ? "BN" : "EN")}
              className="px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 rounded-md border border-slate-200"
              aria-label="Toggle language"
            >
              {activeLang}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? content.navigation.mobileMenuClose : content.navigation.mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Height Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {content.navigation.links.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.label} className="border-b border-slate-100 py-2">
                        <button
                          type="button"
                          onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                          className="flex items-center justify-between w-full py-2 text-base font-bold text-slate-900"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-slate-500 transition-transform duration-200",
                              mobileServicesAccordionOpen && "rotate-180 text-primary"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesAccordionOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-3 pr-1 py-2 space-y-2"
                            >
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2 text-sm text-slate-600 hover:text-primary transition-colors"
                                >
                                  <span className="font-semibold text-slate-900">{item.title}</span>
                                  <span className="block text-xs text-slate-500 mt-0.5">{item.description}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 text-base font-bold text-slate-900 hover:text-primary border-b border-slate-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  href={content.hero.primaryCta.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-center font-bold text-slate-950 bg-secondary rounded-full shadow-md hover:bg-secondary-500 transition-colors"
                >
                  <span>{content.navigation.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
