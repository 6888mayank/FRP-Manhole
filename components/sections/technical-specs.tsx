'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { technicalParameters } from '@/lib/company';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function TechnicalSpecs() {
  return (
    <section className="relative bg-secondary/30 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading="Engineered for Your Requirements"
          subheading="Technical Parameters"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Parameters table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm"
          >
            <div className="bg-charcoal px-6 py-4" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
              <h3 className="text-white font-bold text-base tracking-wide">PRODUCT SPECIFICATIONS</h3>
            </div>
            <div className="divide-y divide-border/50">
              {technicalParameters.map((param, idx) => (
                <motion.div
                  key={param.parameter}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-center justify-between px-6 py-4 hover:bg-secondary/40 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground/85 tracking-wide">{param.parameter}</span>
                  <span className="text-sm font-bold text-foreground text-right">{param.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Note + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="rounded-2xl bg-card border border-border/60 p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">Custom Specifications</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-normal">
                    Specifications can be customized according to project requirements. Contact our team for detailed technical specifications, load capacities, and custom design options.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => scrollTo('#quote')}
                size="lg"
                className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-semibold group"
              >
                Get Technical Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mini badges */}
            <div className="grid grid-cols-3 gap-3">
              {['Anti-Slip', 'Weatherproof', 'Custom Fit'].map((badge, idx) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border border-border/60 shadow-sm"
                >
                  <span className="text-sm font-bold text-foreground">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
