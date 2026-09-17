import { Phone, Mail, MapPin } from 'lucide-react';
import { company, navItems, products } from '@/lib/company';
import { Logo } from '@/components/shared/logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-charcoal border-t border-white/10" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand — full vertical logo fitted */}
          <div>
            <Logo variant="footer" />
            <p className="mt-5 text-sm text-white/85 leading-relaxed">{company.positioning}. High-performance FRP manhole covers for roads, municipal, industrial and drainage infrastructure.</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/80 hover:text-accent transition-colors font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Products</h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="text-sm text-white/80 hover:text-accent transition-colors font-medium">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-sm text-white/85 hover:text-accent transition-colors font-medium leading-relaxed group"
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{company.address}</span>
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="flex gap-3 text-sm text-white/85 hover:text-accent transition-colors font-medium">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="flex gap-3 text-sm text-white/85 hover:text-accent transition-colors font-medium break-all">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {company.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/70 font-medium">{company.businessHours}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/65">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>Engineered for strength, durability and easy handling.</span>
        </div>
      </div>
    </footer>
  );
}
