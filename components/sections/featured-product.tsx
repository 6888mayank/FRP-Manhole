'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { techSpecs, featuredCallouts } from '@/lib/company';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function FeaturedProduct() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Signature Product"
          heading="FRP Manhole Covers"
          description="Designed to provide the ideal combination of strength, durability and lightweight handling."
          light
          className="mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product image with callouts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Technical ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-white/5" />
            </div>

            {/* Product image - real signature FRP cover */}
            <div className="relative z-10 group">
              <img
                src="/frp-cover-signature.png"
                alt="FRP Manhole Cover DIA 560 2.5T — R.K. Signature Product by BOSS FRP MANHOLES"
                width={792}
                height={792}
                className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-contain rounded-full shadow-2xl shadow-black/80 border-4 border-white/20 drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Callouts */}
            {featuredCallouts.map((callout, idx) => {
              const positions: Record<string, string> = {
                'top': 'top-0 left-1/2 -translate-x-1/2 -translate-y-2',
                'right': 'top-1/2 right-0 translate-x-2 -translate-y-1/2',
                'bottom': 'bottom-0 left-1/2 -translate-x-1/2 translate-y-2',
                'left': 'top-1/2 left-0 -translate-x-2 -translate-y-1/2',
                'top-right': 'top-[12%] right-[8%]',
                'bottom-right': 'bottom-[12%] right-[8%]',
              };
              return (
                <motion.div
                  key={callout.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.12 }}
                  className={`absolute z-20 ${positions[callout.position]} hidden md:block`}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-widest whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {callout.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech spec panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">SPEC</span>
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight">Technical Specifications</h3>
              </div>

              <div className="divide-y divide-white/8">
                {techSpecs.map((spec, idx) => (
                  <motion.div
                    key={spec.parameter}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.06 }}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-white/85 text-sm font-medium tracking-wide">{spec.parameter}</span>
                    <span className="text-white text-sm font-semibold text-right">{spec.value}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => scrollTo('#quote')}
                className="mt-6 w-full bg-accent hover:bg-accent/90 text-white font-semibold h-11 group"
              >
                Request Product Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
