import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  description?: string;
  className?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  heading,
  subheading,
  description,
  className,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase',
            light
              ? 'bg-white/10 text-white/90 border border-white/15'
              : 'bg-primary/8 text-primary border border-primary/15'
          )}
        >
          <span className={cn('w-1.5 h-1.5 rounded-full', light ? 'bg-accent' : 'bg-accent')} />
          {label}
        </motion.div>
      )}
      {subheading && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={cn(
            'text-2xl md:text-3xl font-bold tracking-tight',
            light ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {subheading}
        </motion.h2>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance leading-[1.1]',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {heading}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={cn(
            'text-base md:text-lg max-w-3xl leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
