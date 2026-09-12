import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { About } from '@/components/sections/about';
import { FeaturedProduct } from '@/components/sections/featured-product';
import { Products } from '@/components/sections/products';
import { WhyFRP } from '@/components/sections/why-frp';
import { Comparison } from '@/components/sections/comparison';
import { Applications } from '@/components/sections/applications';
import { ManufacturingProcess } from '@/components/sections/manufacturing-process';
import { Quality } from '@/components/sections/quality';
import { Projects } from '@/components/sections/projects';
import { TechnicalSpecs } from '@/components/sections/technical-specs';
import { CustomizationCTA } from '@/components/sections/customization-cta';
import { FAQ } from '@/components/sections/faq';
import { QuoteForm } from '@/components/sections/quote-form';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <FeaturedProduct />
        <Products />
        <WhyFRP />
        <Comparison />
        <Applications />
        <ManufacturingProcess />
        <Quality />
        <Projects />
        <TechnicalSpecs />
        <CustomizationCTA />
        <FAQ />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
