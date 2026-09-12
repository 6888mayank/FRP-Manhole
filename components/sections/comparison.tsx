'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { comparisonRows } from '@/lib/company';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Comparison() {
  return (
    <section id="comparison" className="relative bg-secondary/30 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading="Why Switch to FRP?"
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-lg"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-charcoal text-white" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
            <div className="p-4 md:p-6 font-bold text-sm md:text-base tracking-wide">Attribute</div>
            <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-accent/20 border-x border-white/10 relative">
              <span className="text-accent">BOSS FRP</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
            </div>
            <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center text-white/60">Traditional Metal</div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, idx) => (
            <motion.div
              key={row.attribute}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-background' : 'bg-secondary/40'} border-t border-border/50`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base font-semibold text-foreground flex items-center">
                {row.attribute}
              </div>
              <div className="p-4 md:p-5 text-center bg-accent/5 border-x border-border/30 flex items-center justify-center">
                <span className="flex items-center gap-2 text-sm md:text-base font-semibold text-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="hidden sm:inline">{row.boss}</span>
                  <span className="sm:hidden">{row.boss.split(' ')[0]}</span>
                </span>
              </div>
              <div className="p-4 md:p-5 text-center flex items-center justify-center">
                <span className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                  <span className="hidden sm:inline">{row.traditional}</span>
                  <span className="sm:hidden">{row.traditional.split(' ')[0]}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Button
            onClick={() => scrollTo('#quote')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold group"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
