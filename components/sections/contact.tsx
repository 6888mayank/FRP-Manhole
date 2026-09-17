'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { company } from '@/lib/company';

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          heading="Visit or Contact BOSS FRP"
          description="Have a large project or custom requirement? Reach us directly."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground tracking-tight">Factory / Office Address</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{company.address}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={company.phoneHref}
                className="rounded-2xl border border-border/60 bg-card p-5 hover:border-accent/30 transition-colors group shadow-sm"
              >
                <Phone className="w-5 h-5 text-accent mb-2" />
                <div className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Phone</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{company.phone}</div>
              </a>
              <a
                href={company.emailHref}
                className="rounded-2xl border border-border/60 bg-card p-5 hover:border-accent/30 transition-colors group shadow-sm"
              >
                <Mail className="w-5 h-5 text-accent mb-2" />
                <div className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Email</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm break-all">{company.email}</div>
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm flex gap-4">
              <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </span>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Business Hours</div>
                <div className="font-semibold text-foreground text-sm mt-1">{company.businessHours}</div>
              </div>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-6 transition-colors shadow-lg shadow-accent/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm min-h-[380px] flex flex-col"
          >
            <div className="flex-1 bg-secondary/40 flex items-center justify-center p-8 text-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Mohammadpur Gujar, Gurugram</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  {company.address}. Search &quot;BOSS FRP MANHOLES&quot; on Google Maps for directions.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
            <div className="px-6 py-4 bg-charcoal text-white/70 text-xs text-center tracking-wide" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
              {company.name} — {company.tagline}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
