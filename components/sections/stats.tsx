'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { stats } from '@/lib/company';

function AnimatedCounter({ value, prefix, suffix }: { value: string; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(prefix || (value === '0' ? 'Multiple' : '0'));

  useEffect(() => {
    if (!isInView) return;
    if (value === '0') {
      setDisplay(prefix || 'Multiple');
      return;
    }
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setDisplay(`${prefix}${current.toLocaleString('en-IN')}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(`${prefix}${target.toLocaleString('en-IN')}${suffix}`);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-charcoal py-20 md:py-28 overflow-hidden" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Engineered for Performance. Built for Reliability.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-colors group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none whitespace-nowrap">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm md:text-base text-white/80 font-medium leading-snug text-balance">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
