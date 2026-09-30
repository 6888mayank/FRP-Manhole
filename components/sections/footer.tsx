import { Phone, Mail, MapPin, ShieldCheck, Award, FileCheck, FileText, CheckCircle2 } from 'lucide-react';
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

        {/* Documents & Compliance Panel */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                <h3 className="text-white font-bold text-sm tracking-widest uppercase">
                  Official Certificates &amp; Documents
                </h3>
              </div>
              <p className="text-xs text-white/70 mt-1">
                Verified government registrations, quality testing reports and statutory compliance records.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent bg-accent/10 border border-accent/25 px-3 py-1 rounded-full self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified &amp; Certified Manufacturer
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. MSME Certificate */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello BOSS FRP, I would like to request a verified copy of your MSME Registration Certificate.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded">
                    Udyam Govt
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">
                  MSME Certificate
                </h4>
                <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                  Ministry of MSME, Govt. of India enterprise registration.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80 font-medium group-hover:text-accent">
                <span>Request Official Copy</span>
                <FileText className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            {/* 2. Incorporation Certificate */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello BOSS FRP, I would like to request a copy of your Certificate of Incorporation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded">
                    RoC / MCA
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">
                  Incorporation Certificate
                </h4>
                <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                  Ministry of Corporate Affairs registered manufacturing entity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80 font-medium group-hover:text-accent">
                <span>Request Official Copy</span>
                <FileText className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            {/* 3. Testing Report */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello BOSS FRP, please share the NABL lab testing report & load test certificates for your FRP manhole covers.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    D400 40T
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">
                  Testing Report
                </h4>
                <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                  NABL lab load capacity testing per IS 1726 &amp; EN 124 standards.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80 font-medium group-hover:text-accent">
                <span>View Load Test Specs</span>
                <FileText className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            {/* 4. GST Allotment Papers */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello BOSS FRP, please share your GST allotment papers and billing details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded">
                    GSTIN
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">
                  GST Allotment Papers
                </h4>
                <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                  Official Goods and Services Tax allotment certificate.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80 font-medium group-hover:text-accent">
                <span>Request Tax Invoice / GST</span>
                <FileText className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
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
