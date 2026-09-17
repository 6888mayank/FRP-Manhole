'use client';

import { motion } from 'framer-motion';
import { Shield, Feather, Droplets, Clock, Grip, Settings } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { whyFRPItems } from '@/lib/company';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Feather,
  Droplets,
  Clock,
  Grip,
  Settings,
};

export function WhyFRP() {
  return (
    <section id="why-frp" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why BOSS FRP?"
          heading="Advantages That Make FRP the Smarter Choice"
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyFRPItems.map((item, idx) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 md:p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-colors overflow-hidden"
              >
                {/* Big number watermark */}
                <span className="absolute top-2 right-4 text-7xl font-black text-muted/30 select-none group-hover:text-accent/15 transition-colors">
                  {item.number}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-accent/15 group-hover:border-accent/25 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-normal">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
