'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { products, type Product } from '@/lib/company';

function ProductCard({ product, index }: { product: Product; index: number }) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl bg-card border border-border/60 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} - FRP infrastructure product by BOSS FRP`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-bold tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-lg tracking-tight">
          {product.name}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-xs font-medium text-foreground/80"
            >
              <Check className="w-3 h-3 text-accent" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button
          onClick={() => scrollTo('#quote')}
          variant="ghost"
          className="mt-5 justify-start p-0 h-auto text-primary font-semibold hover:bg-transparent hover:text-primary/80 group/btn"
        >
          View Product
          <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative bg-secondary/30 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FRP Products"
          heading="Built for Strength. Designed for Infrastructure."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
