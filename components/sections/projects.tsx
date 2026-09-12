'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { projectCategories } from '@/lib/company';

export function Projects() {
  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Where Our Products Fit"
          heading="Industries We Serve"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {projectCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                idx === 0 ? 'col-span-2 lg:col-span-2 aspect-[2/1.2]' : 'aspect-square'
              }`}
            >
              <img
                src={cat.image}
                alt={`${cat.name} - BOSS FRP project application`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors" style={{ ['--charcoal' as string]: '210 20% 10%' }} />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="w-8 h-1 bg-accent rounded-full mb-2" />
                <h3 className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide">
                  {cat.name}
                </h3>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/50 transition-colors rounded-tr-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
