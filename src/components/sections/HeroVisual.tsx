"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, ShieldCheck } from "lucide-react";
import { content } from "@/lib/content";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Concentric Wave Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
        <div className="absolute inset-10 rounded-full border border-primary/5" />
        <div className="absolute inset-24 rounded-full border border-secondary/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Structured Organic Multi-Card Layout (Brain Station 23 Philosophy) */}
      <div className="grid grid-cols-12 gap-4 sm:gap-5 items-start">
        {/* Left Column: Top Floating Pill + Collaborative Team Card */}
        <div className="col-span-12 sm:col-span-6 space-y-4">
          {/* Highlight Badge 1: AI-First Architecture */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="glass-card rounded-2xl p-4 sm:p-5 shadow-card hover:border-primary/40 transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {content.hero.visualCards.stat1.value}
                </span>
                <span className="block text-xs font-semibold text-slate-500 mt-0.5">
                  {content.hero.visualCards.stat1.label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Collaborative Sprints Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-elevated group"
          >
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src="/images/team-collab.jpg"
                alt="Intactic Engineering Team Solution Architecture"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-secondary" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300">
                  {content.hero.visualCards.collabRole}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                {content.hero.visualCards.collabTitle}
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lead Architect Card + Bottom Floating Pill */}
        <div className="col-span-12 sm:col-span-6 space-y-4 sm:pt-6">
          {/* Lead Architect Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-elevated group"
          >
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src="/images/engineer-lead.jpg"
                alt="Intactic Lead Software Architect"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-300">
                  {content.hero.visualCards.leadRole}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                {content.hero.visualCards.leadTitle}
              </h3>
            </div>
          </motion.div>

          {/* Highlight Badge 2: Global Standard */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="glass-card rounded-2xl p-4 sm:p-5 shadow-card hover:border-secondary/40 transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary-600 flex items-center justify-center border border-secondary/25 shrink-0">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {content.hero.visualCards.stat2.value}
                </span>
                <span className="block text-xs font-semibold text-slate-500 mt-0.5">
                  {content.hero.visualCards.stat2.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
