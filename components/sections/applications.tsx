'use client';

import { motion } from 'framer-motion';
import {
  Route, Building2, Home, Briefcase, Factory, Waves,
  Droplets, Zap, Radio, HardHat, type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { applications } from '@/lib/company';

const iconMap: Record<string, LucideIcon> = {
  Road: Route, Route, Building2, Home, Briefcase, Factory, Waves, Droplets, Zap, Radio, HardHat,
};

export function Applications() {
  return (
    <section id="applications" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Applications"
          heading="FRP Solutions for Diverse Infrastructure"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {applications.map((app, idx) => {
            const Icon = iconMap[app.icon] || Factory;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: (idx % 5) * 0.08 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={app.image}
                  alt={`${app.name} - FRP application by BOSS FRP`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity group-hover:from-black/90" />

                {/* Icon - always visible */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Name - bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-xs md:text-sm tracking-tight leading-tight">
                    {app.name}
                  </h3>
                  {/* Description slides up on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="text-white/70 text-[10px] md:text-xs leading-snug overflow-hidden mt-0 group-hover:mt-1.5 group-hover:opacity-100 transition-all duration-300"
                  >
                    {app.description}
                  </motion.p>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug overflow-hidden h-0 group-hover:h-auto group-hover:mt-1.5 transition-all duration-300">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
