'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
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
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:border-accent/30 transition-colors group block"
            >
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">Factory / Office Address</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{company.address}</p>
                </div>
              </div>
            </a>

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
            className="rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm min-h-[420px] flex flex-col"
          >
            {/* Interactive Google Map Embed */}
            <div className="relative flex-1 min-h-[340px] w-full bg-secondary/30">
              <iframe
                title="BOSS FRP MANHOLES Location"
                src={`https://maps.google.com/maps?q=${company.coordinates.lat},${company.coordinates.lng}&hl=en&z=15&output=embed`}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="px-6 py-4 bg-charcoal flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
              <div className="text-white/85 font-medium text-center sm:text-left">
                <span className="font-bold text-white">{company.name}</span> — Mohammadpur Gujar, Gurugram
              </div>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
