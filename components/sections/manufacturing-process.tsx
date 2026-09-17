'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { processSteps } from '@/lib/company';

export function ManufacturingProcess() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-blueprint opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Manufacturing Process"
          heading="From Design to Finished FRP Product"
          light
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 relative">
          {/* Connecting lines for large screens */}
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.12 }}
              className="relative"
            >
              {/* Step circle */}
              <div className="relative flex items-center justify-center mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center backdrop-blur-sm relative z-10">
                  <span className="text-2xl font-black text-accent">{step.step}</span>
                </div>
                {/* Glow */}
                <div className="absolute w-20 h-20 rounded-2xl bg-accent/15 blur-xl" />
              </div>

              {/* Content */}
              <div className="text-center px-2">
                <h3 className="text-white font-bold text-sm md:text-base tracking-wide uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting vertical line for mobile */}
              {idx < processSteps.length - 1 && (
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-20 bottom-[-36px] w-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
