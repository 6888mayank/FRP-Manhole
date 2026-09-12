'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionHeading } from '@/components/shared/section-heading';
import { company, productOptions } from '@/lib/company';

interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  productRequired: string;
  quantity: string;
  requiredSize: string;
  application: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm: FormData = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  productRequired: '',
  quantity: '',
  requiredSize: '',
  application: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[+]?[\d\s()-]{8,15}$/.test(data.phone.trim())) errors.phone = 'Please enter a valid phone number';
  if (!data.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Please enter a valid email';
  if (!data.productRequired) errors.productRequired = 'Please select a product';
  if (!data.message.trim()) errors.message = 'Please tell us about your requirement';
  return errors;
}

export function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill in all required fields correctly.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      toast.success('Enquiry sent successfully! Our team will get back to you soon.');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      toast.error('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section id="quote" className="relative bg-charcoal py-20 md:py-28 overflow-hidden" style={{ ['--charcoal' as string]: '210 20% 10%' }}>
      <div className="absolute inset-0 bg-grid-dark opacity-25" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: heading + info */}
          <div>
            <SectionHeading
              heading="Let's Build a Stronger Solution"
              subheading="Get a Quote"
              description="Tell us your FRP product requirement and our team will get back to you."
              light
              align="left"
            />

            {/* Quick contact badges */}
            <div className="mt-8 flex flex-col gap-4">
              <a href={company.phoneHref} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs tracking-widest uppercase font-medium">Call Us</div>
                  <div className="text-white font-semibold text-sm group-hover:text-accent transition-colors">{company.phone}</div>
                </div>
              </a>
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs tracking-widest uppercase font-medium">WhatsApp</div>
                  <div className="text-white font-semibold text-sm group-hover:text-accent transition-colors">Chat with BOSS FRP</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 md:p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-white font-bold text-xl">Enquiry Sent!</h3>
                <p className="mt-2 text-white/60 text-sm">Our team will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Full Name <span className="text-accent">*</span></Label>
                    <Input
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="Your name"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Company Name</Label>
                    <Input
                      value={form.companyName}
                      onChange={(e) => updateField('companyName', e.target.value)}
                      placeholder="Company / Organization"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Phone Number <span className="text-accent">*</span></Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Email Address <span className="text-accent">*</span></Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Product Required <span className="text-accent">*</span></Label>
                    <Select value={form.productRequired} onValueChange={(v) => updateField('productRequired', v)}>
                      <SelectTrigger className="bg-white/5 border-white/15 text-white focus:ring-accent/40">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.productRequired && <p className="text-red-400 text-xs">{errors.productRequired}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Quantity</Label>
                    <Input
                      value={form.quantity}
                      onChange={(e) => updateField('quantity', e.target.value)}
                      placeholder="e.g. 100 units"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Required Size</Label>
                    <Input
                      value={form.requiredSize}
                      onChange={(e) => updateField('requiredSize', e.target.value)}
                      placeholder="e.g. 600x600mm"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Application</Label>
                    <Input
                      value={form.application}
                      onChange={(e) => updateField('application', e.target.value)}
                      placeholder="e.g. Road infrastructure"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-white/80 text-sm">Message <span className="text-accent">*</span></Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Tell us about your requirement..."
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-accent/40 min-h-[100px] resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 bg-accent hover:bg-accent/90 text-white font-semibold h-12 group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white/60 text-sm font-medium hover:text-accent transition-colors mt-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Or chat with BOSS FRP on WhatsApp
                </a>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
