'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '@/components/shared/section-heading';
import { faqItems } from '@/lib/company';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          heading="Frequently Asked Questions"
          className="mb-12"
        />

        <div className="flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
                className="rounded-xl border border-border/60 bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex items-center justify-between w-full px-5 md:px-6 py-4 md:py-5 text-left group"
                >
                  <span className="text-sm md:text-base font-semibold text-foreground pr-4">{item.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-secondary text-foreground group-hover:bg-accent/15 group-hover:text-accent'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-foreground/85 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
