'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { aboutFeatures, company } from '@/lib/company';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card group">
              <img
                src="/about-frp-cover.jpg"
                alt="BOSS FRP Manhole Cover DIA 560 2.5T Heavy Duty Composite Infrastructure Cover"
                className="w-full h-[420px] md:h-[530px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -left-3 md:-left-6 bg-charcoal rounded-xl p-5 shadow-2xl border border-white/10 max-w-[220px]"
              style={{ ['--charcoal' as string]: '210 20% 10%' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-white font-black text-lg tracking-wide">BOSS FRP</span>
              </div>
              <span className="text-white/90 text-xs tracking-widest uppercase font-semibold">
                Engineered for Performance
              </span>
            </motion.div>

            {/* Decorative border element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <SectionHeading
              label="About BOSS FRP MANHOLES"
              heading="Engineering Strength into Every Cover"
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-foreground/90 leading-relaxed font-normal"
            >
              {company.name} is focused on manufacturing high-performance FRP manhole covers and infrastructure solutions designed for strength, durability and ease of handling.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3 text-sm md:text-base text-foreground/80 leading-relaxed font-normal"
            >
              The company focuses on quality FRP materials, strong structural design, accurate dimensions, reliable finishing, custom requirements, project-based manufacturing and infrastructure applications.
            </motion.p>

            {/* Feature points */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {aboutFeatures.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/60 border border-border/60"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button
                onClick={() => scrollTo('#products')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold group"
              >
                Know More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
