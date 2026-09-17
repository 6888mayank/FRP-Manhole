export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Application {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix: string;
  prefix: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface WhyFRPItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonRow {
  attribute: string;
  boss: string;
  traditional: string;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface QualityPillar {
  id: string;
  title: string;
  icon: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  image: string;
}

export interface TechSpec {
  parameter: string;
  value: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const company = {
  name: 'BOSS FRP MANHOLES',
  tagline: 'Stronger | Lighter | Durable',
  positioning: 'Engineered FRP Solutions for Modern Infrastructure',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'info@bossfrpmanholes.com',
  emailHref: 'mailto:info@bossfrpmanholes.com',
  address: 'Plot No. 45, Industrial Area Phase II, New Delhi 110020, India',
  businessHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Why FRP', href: '#why-frp' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

export const heroFeatures = [
  'High Strength',
  'Lightweight',
  'Corrosion Resistant',
  'Long Service Life',
];

export const stats: Stat[] = [
  { id: 'experience', value: '10', label: 'Years of Manufacturing Experience', suffix: '+', prefix: '' },
  { id: 'products', value: '50000', label: 'FRP Products Manufactured', suffix: '+', prefix: '' },
  { id: 'projects', value: '100', label: 'Projects & Installations', suffix: '+', prefix: '' },
  { id: 'applications', value: '0', label: 'Industrial Applications', suffix: '', prefix: 'Multiple' },
];

export const aboutFeatures = [
  'Quality Focused Manufacturing',
  'Custom Sizes Available',
  'Project-Based Solutions',
  'Durable FRP Construction',
];

export const products: Product[] = [
  {
    id: 'manhole-covers',
    name: 'FRP Manhole Covers',
    description: 'High-strength FRP manhole covers designed for reliable performance across infrastructure and construction applications.',
    image: '/frp-cover.png',
    features: ['Lightweight', 'High Strength', 'Corrosion Resistant', 'Anti-Slip Surface', 'Custom Sizes'],
  },
  {
    id: 'drainage-covers',
    name: 'FRP Drainage Covers',
    description: 'Durable FRP drainage covers designed for drainage channels, utility areas and infrastructure projects.',
    image: '/frp-drainage-cover.jpg',
    features: ['Weather Resistant', 'Lightweight', 'Easy Handling', 'Low Maintenance'],
  },
  {
    id: 'inspection-covers',
    name: 'FRP Inspection Covers',
    description: 'FRP inspection covers designed for easy access and long-term performance in utility and industrial environments.',
    image: 'https://images.pexels.com/photos/3964559/pexels-photo-3964559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Easy Access', 'Durable', 'Corrosion Resistant', 'Precise Fit'],
  },
  {
    id: 'chamber-covers',
    name: 'FRP Chamber Covers',
    description: 'Reliable FRP chamber covers for electrical, telecom, drainage and utility infrastructure.',
    image: '/frp-chamber-cover.jpg',
    features: ['Electrical Grade', 'Telecom Ready', 'Non-Conductive', 'Custom Fit'],
  },
  {
    id: 'heavy-duty-covers',
    name: 'Heavy Duty FRP Covers',
    description: 'Heavy-duty FRP covers engineered for demanding applications and project-specific requirements.',
    image: 'https://images.pexels.com/photos/30425584/pexels-photo-30425584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['High Load Capacity', 'Heavy Duty', 'Reinforced', 'Project Ready'],
  },
  {
    id: 'custom-frp',
    name: 'Custom FRP Products',
    description: 'Customized FRP solutions manufactured according to required dimensions, design and application.',
    image: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Custom Dimensions', 'Custom Design', 'Application Specific', 'Project Based'],
  },
];

export const featuredCallouts = [
  { label: 'FRP COMPOSITE', position: 'top' as const },
  { label: 'HIGH STRENGTH', position: 'right' as const },
  { label: 'LIGHTWEIGHT', position: 'bottom' as const },
  { label: 'ANTI-SLIP', position: 'left' as const },
  { label: 'CORROSION RESISTANT', position: 'top-right' as const },
  { label: 'CUSTOM SIZES', position: 'bottom-right' as const },
];

export const techSpecs: TechSpec[] = [
  { parameter: 'Material', value: 'Fiber Reinforced Polymer' },
  { parameter: 'Surface', value: 'Anti-Slip' },
  { parameter: 'Construction', value: 'FRP Composite' },
  { parameter: 'Finish', value: 'Weather Resistant' },
  { parameter: 'Customization', value: 'Available' },
  { parameter: 'Load Requirement', value: 'Application Based' },
];

export const whyFRPItems: WhyFRPItem[] = [
  { id: 'strong', number: '01', title: 'STRONG', description: 'Engineered for dependable structural performance.', icon: 'Shield' },
  { id: 'lightweight', number: '02', title: 'LIGHTWEIGHT', description: 'Easy to lift, transport and install compared with conventional heavy covers.', icon: 'Feather' },
  { id: 'corrosion', number: '03', title: 'CORROSION RESISTANT', description: 'Designed to withstand moisture, rust and demanding environmental conditions.', icon: 'Droplets' },
  { id: 'durable', number: '04', title: 'DURABLE', description: 'Built for long-term performance with reduced maintenance requirements.', icon: 'Clock' },
  { id: 'antislip', number: '05', title: 'ANTI-SLIP', description: 'Surface design focused on safer and more reliable usage.', icon: 'Grip' },
  { id: 'customizable', number: '06', title: 'CUSTOMIZABLE', description: 'Dimensions, designs and specifications can be customized according to project requirements.', icon: 'Settings' },
];

export const comparisonRows: ComparisonRow[] = [
  { attribute: 'Weight', boss: 'Lightweight', traditional: 'Heavy' },
  { attribute: 'Corrosion', boss: 'High Resistance', traditional: 'Can Corrode' },
  { attribute: 'Handling', boss: 'Easy', traditional: 'Labour Intensive' },
  { attribute: 'Maintenance', boss: 'Low', traditional: 'Higher' },
  { attribute: 'Customization', boss: 'Available', traditional: 'Limited' },
  { attribute: 'Installation', boss: 'Easy Handling', traditional: 'Heavy Handling' },
  { attribute: 'Service Life', boss: 'Long-lasting', traditional: 'Application Dependent' },
];

export const applications: Application[] = [
  { id: 'roads', name: 'Roads & Highways', description: 'FRP covers for road infrastructure and highway drainage systems.', image: 'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Road' },
  { id: 'municipal', name: 'Municipal Infrastructure', description: 'Manhole solutions for municipal utility and drainage networks.', image: 'https://images.pexels.com/photos/8913522/pexels-photo-8913522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Building2' },
  { id: 'residential', name: 'Residential Projects', description: 'Lightweight covers for residential drainage and utility access.', image: 'https://images.pexels.com/photos/2040476/pexels-photo-2040476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Home' },
  { id: 'commercial', name: 'Commercial Buildings', description: 'FRP covers for commercial complexes and business premises.', image: 'https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Briefcase' },
  { id: 'industrial', name: 'Industrial Facilities', description: 'Durable FRP solutions for industrial plants and facilities.', image: 'https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Factory' },
  { id: 'drainage', name: 'Drainage Systems', description: 'FRP drainage covers for channel and surface water management.', image: 'https://images.pexels.com/photos/6240578/pexels-photo-6240578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Waves' },
  { id: 'water-treatment', name: 'Water Treatment Plants', description: 'Corrosion-resistant covers for water and wastewater facilities.', image: 'https://images.pexels.com/photos/17882790/pexels-photo-17882790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Droplets' },
  { id: 'electrical', name: 'Electrical Infrastructure', description: 'Non-conductive FRP covers for electrical and power utilities.', image: 'https://images.pexels.com/photos/9889066/pexels-photo-9889066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Zap' },
  { id: 'telecom', name: 'Telecom Infrastructure', description: 'FRP chamber covers for telecom and communication networks.', image: 'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Radio' },
  { id: 'construction', name: 'Construction Projects', description: 'Project-based FRP covers for construction and site development.', image: 'https://images.pexels.com/photos/37627672/pexels-photo-37627672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'HardHat' },
];

export const processSteps: ProcessStep[] = [
  { id: 'step1', step: '01', title: 'DESIGN & ENGINEERING', description: 'Understanding product dimensions and application requirements.' },
  { id: 'step2', step: '02', title: 'MOULD PREPARATION', description: 'Preparing precision moulds according to product specifications.' },
  { id: 'step3', step: '03', title: 'FRP MANUFACTURING', description: 'Controlled manufacturing process for consistent product quality.' },
  { id: 'step4', step: '04', title: 'FINISHING', description: 'Surface finishing, trimming and dimensional preparation.' },
  { id: 'step5', step: '05', title: 'QUALITY INSPECTION', description: 'Checking dimensions, finish and product quality.' },
  { id: 'step6', step: '06', title: 'PACKAGING & DISPATCH', description: 'Safe packaging and project-ready dispatch.' },
];

export const qualityPillars: QualityPillar[] = [
  { id: 'material', title: 'MATERIAL QUALITY', icon: 'Layers' },
  { id: 'structural', title: 'STRUCTURAL STRENGTH', icon: 'Shield' },
  { id: 'dimensional', title: 'DIMENSIONAL ACCURACY', icon: 'Ruler' },
  { id: 'surface', title: 'SURFACE FINISH', icon: 'Sparkles' },
];

export const qualityChecklist = [
  'Consistent Manufacturing',
  'Dimensional Accuracy',
  'Strong FRP Construction',
  'Quality Inspection',
  'Project-Based Requirements',
];

export const customizationOptions = [
  'CUSTOM SIZE',
  'CUSTOM DESIGN',
  'CUSTOM LOAD REQUIREMENT',
  'CUSTOM BRANDING',
  'PROJECT QUANTITY',
];

export const projectCategories: ProjectCategory[] = [
  { id: 'infrastructure', name: 'INFRASTRUCTURE', image: 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'construction', name: 'CONSTRUCTION', image: 'https://images.pexels.com/photos/37627672/pexels-photo-37627672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'municipal', name: 'MUNICIPAL', image: 'https://images.pexels.com/photos/9716324/pexels-photo-9716324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'industrial', name: 'INDUSTRIAL', image: 'https://images.pexels.com/photos/5505706/pexels-photo-5505706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'utilities', name: 'UTILITIES', image: 'https://images.pexels.com/photos/36137497/pexels-photo-36137497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const technicalParameters: TechSpec[] = [
  { parameter: 'Product Type', value: 'FRP Manhole Cover' },
  { parameter: 'Material', value: 'Fiber Reinforced Polymer' },
  { parameter: 'Dimensions', value: 'Custom Available' },
  { parameter: 'Surface Finish', value: 'Anti-Slip / Smooth' },
  { parameter: 'Load Requirement', value: 'Application Based' },
  { parameter: 'Application', value: 'Infrastructure / Industrial' },
  { parameter: 'Customization', value: 'Available' },
];

export const faqItems: FAQItem[] = [
  { id: 'faq1', question: 'What is an FRP manhole cover?', answer: 'An FRP (Fiber Reinforced Plastic) manhole cover is a high-strength, lightweight alternative to traditional cast iron or concrete covers. It is manufactured using composite materials engineered for durability and corrosion resistance.' },
  { id: 'faq2', question: 'What are the advantages of FRP manhole covers?', answer: 'FRP manhole covers offer several advantages: they are significantly lighter than metal covers, highly corrosion resistant, non-conductive, feature anti-slip surfaces, require low maintenance, and can be customized to project specifications.' },
  { id: 'faq3', question: 'Are FRP manhole covers corrosion resistant?', answer: 'Yes, FRP manhole covers are highly corrosion resistant. Unlike metal covers, they do not rust or corrode when exposed to moisture, chemicals, or harsh environmental conditions, making them ideal for drainage and water treatment applications.' },
  { id: 'faq4', question: 'Are FRP covers lightweight?', answer: 'Yes, FRP covers are significantly lighter than conventional cast iron covers. This makes them easier to lift, transport, and install, reducing labour requirements and improving safety during handling.' },
  { id: 'faq5', question: 'Can BOSS FRP manufacture custom sizes?', answer: 'Yes, BOSS FRP MANHOLES manufactures custom-sized FRP manhole covers and infrastructure products according to your specific project requirements, including custom dimensions, designs, and load capacities.' },
  { id: 'faq6', question: 'What load capacities are available?', answer: 'We manufacture FRP covers for a range of load requirements based on application — from light-duty residential covers to heavy-duty covers for roads, highways, and industrial applications. Load requirements are application based and can be customized.' },
  { id: 'faq7', question: 'Where can FRP manhole covers be used?', answer: 'FRP manhole covers are used across roads and highways, municipal infrastructure, residential projects, commercial buildings, industrial facilities, drainage systems, water treatment plants, electrical infrastructure, telecom networks, and construction projects.' },
  { id: 'faq8', question: 'Do you accept bulk orders?', answer: 'Yes, we accept bulk and project-quantity orders. BOSS FRP MANHOLES is equipped for project-based manufacturing and can fulfil large-scale requirements for infrastructure, municipal, and industrial projects.' },
  { id: 'faq9', question: 'Can company/project branding be added?', answer: 'Yes, we can add company or project branding, logos, and identification markings on FRP covers during the manufacturing process as per your requirements.' },
  { id: 'faq10', question: 'How can I request a quotation?', answer: 'You can request a quotation by filling out the enquiry form on this page, calling us directly, or reaching out via WhatsApp. Provide your product requirements, quantity, and specifications, and our team will get back to you promptly.' },
];

export const productOptions = [
  'FRP Manhole Covers',
  'FRP Drainage Covers',
  'FRP Inspection Covers',
  'FRP Chamber Covers',
  'Heavy Duty FRP Covers',
  'Custom FRP Products',
];
