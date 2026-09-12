'use client';

import { motion } from 'framer-motion';
import { Layers, Shield, Ruler, Sparkles, Check, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { qualityPillars, qualityChecklist } from '@/lib/company';

const iconMap: Record<string, LucideIcon> = {
  Layers, Shield, Ruler, Sparkles,
};

export function Quality() {
  return (
    <section id="quality" className="relative bg-charcoal py-20 md:py-28 overflow-hidden" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-25" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/8 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Quality You Can Trust"
          heading="Quality Built Into Every Stage"
          description="At BOSS FRP MANHOLES, quality is built into every stage of manufacturing — from material selection to final inspection."
          light
          className="mb-14"
        />

        {/* Quality pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {qualityPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Shield;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
                  {pillar.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Quality checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {qualityChecklist.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/8"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </span>
                <span className="text-white/85 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
