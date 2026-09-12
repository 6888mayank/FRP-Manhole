'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { company, navItems } from '@/lib/company';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-lg shadow-lg border-b border-white/10'
            : 'bg-transparent'
        )}
        style={{
          ['--charcoal' as string]: '210 20% 10%',
        }}
      >
        <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo — proper fitted with provided BOSS FRP logo */}
            <Logo variant="navbar" onClick={() => handleNavClick('#home')} />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleNavClick('#quote')}
                className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 group"
                size="sm"
              >
                Get a Quote
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-charcoal/98 border-l border-white/10 flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
              style={{ ['--charcoal' as string]: '210 20% 10%' }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left px-4 py-3.5 text-white/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-auto pt-6 flex flex-col gap-3 border-t border-white/10">
                <Button
                  onClick={() => handleNavClick('#quote')}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold w-full"
                >
                  Get a Quote
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Button>
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2 text-white/70 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
