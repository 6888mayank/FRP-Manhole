'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Ruler, Palette, Layers, Tag, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { customizationOptions, company } from '@/lib/company';

const icons = [Ruler, Palette, Layers, Tag, Boxes];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function CustomizationCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/custom-frp-bg.jpg"
          alt="Custom BOSS FRP EN124 D400 Φ900 manhole cover"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" style={{ ['--charcoal' as string]: '210 20% 10%' }} />
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionHeading
            heading="Have a Specific Requirement?"
            subheading="We manufacture customized FRP manhole covers and infrastructure products according to your project requirements."
            light
            align="left"
          />

          {/* Options */}
          <div className="mt-8 flex flex-wrap gap-3">
            {customizationOptions.map((opt, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={opt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/8 backdrop-blur-md border border-white/15 text-white text-xs md:text-sm font-bold tracking-wide"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  {opt}
                </motion.div>
              );
            })}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollTo('#quote')}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-7 group"
            >
              Discuss Your Requirement
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-md border-white/25 text-white hover:bg-white/15 hover:text-white font-semibold h-12 px-7 w-full"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Request a Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
