'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company, heroFeatures } from '@/lib/company';

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/5828261/pexels-photo-5828261.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="FRP manhole cover installed on asphalt road infrastructure"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

      {/* Grid pattern */}
      <div className="absolute inset-0 z-10 bg-grid-dark opacity-40" />

      {/* Accent glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            FRP Manhole Cover Manufacturer
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.0] text-shadow-lg"
          >
            Stronger.
            <br />
            Lighter.
            <br />
            <span className="text-accent">Built to Last.</span>
          </motion.h1>

          {/* Secondary heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-xl md:text-2xl font-bold text-white/90 tracking-tight"
          >
            Premium FRP Manhole Covers for Modern Infrastructure
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            {company.name} manufactures durable, lightweight and corrosion-resistant FRP manhole covers engineered for demanding infrastructure, construction and industrial applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollTo('#quote')}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base h-12 px-7 shadow-xl shadow-accent/25 group"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollTo('#products')}
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-md border-white/25 text-white hover:bg-white/15 hover:text-white font-semibold text-base h-12 px-7 group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {heroFeatures.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="flex items-center gap-2 text-white/85 text-sm md:text-base font-medium"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 border border-accent/40">
                  <Check className="w-3 h-3 text-accent" />
                </span>
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
