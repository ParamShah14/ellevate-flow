export const SITE_URL = "https://ellevate-growth--3lb5jmvz.preview.emergentagent.com";
export const CONTACT_EMAIL = "hello.ellevateflow@gmail.com";
export const WHATSAPP_URL = "https://wa.me/918401427743?text=Hi%20EllevateFlow%2C%20I%27d%20like%20to%20discuss%20a%20project.";
export const PHONE_DISPLAY = "+91 84014 27743";
export const PHONE_TEL = "tel:+918401427743";

export const PRICE_NOTE =
  "All prices are one-time project fees. Hosting, domain, third-party subscriptions and API usage charges are billed separately.";

export const WEBSITE_PLANS = [
  {
    name: "Starter Website",
    inr: 12999,
    tagline: "A clean, professional site to get your business online properly.",
    delivery: "5–7 working days",
    features: [
      "Up to 5 pages",
      "Modern template-based design",
      "Fully mobile responsive",
      "Contact form",
      "WhatsApp integration",
      "Basic on-page SEO",
      "Google Maps integration",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Business Website",
    inr: 24999,
    popular: true,
    tagline: "A customised site built to capture leads and grow with you.",
    delivery: "10–14 working days",
    features: [
      "Up to 8 pages",
      "Customised website design",
      "Fully mobile responsive",
      "Lead capture forms",
      "WhatsApp integration",
      "Basic SEO setup",
      "Google Analytics integration",
      "Speed optimisation",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Advanced Website",
    inr: 44999,
    tagline: "A premium, fully custom experience with bookings and CRM.",
    delivery: "15–25 working days",
    features: [
      "Up to 12 pages",
      "Premium custom design",
      "Advanced animations",
      "Booking or appointment integration",
      "CRM integration",
      "Advanced forms",
      "Technical and on-page SEO",
      "Performance optimisation",
      "4 rounds of revisions",
    ],
  },
];

export const AUTOMATION_PLANS = [
  {
    name: "Starter Automation",
    inr: 9999,
    tagline: "Your first workflow: every website lead, captured and tracked.",
    delivery: "3–5 working days",
    features: [
      "One lead capture workflow",
      "Website form integration",
      "Google Sheets integration",
      "Automated email notifications",
      "Basic lead tracking",
      "Workflow testing and deployment",
    ],
  },
  {
    name: "Growth Automation",
    inr: 19999,
    popular: true,
    tagline: "Leads from every source, followed up without lifting a finger.",
    delivery: "7–10 working days",
    features: [
      "Multi-source lead capture",
      "Automated lead notifications",
      "CRM or Google Sheets integration",
      "Automated email follow-up sequences",
      "Lead status tracking",
      "Basic lead qualification",
      "Workflow testing and deployment",
    ],
  },
  {
    name: "Advanced AI Automation",
    inr: 34999,
    tagline: "AI that qualifies, follows up and books meetings for you.",
    delivery: "10–20 working days",
    features: [
      "AI-powered lead qualification",
      "Intelligent automated follow-ups",
      "CRM integration",
      "AI chatbot integration",
      "Appointment booking automation",
      "Custom business workflows",
      "Testing and deployment",
    ],
  },
];

export const GROWTH_PLANS = [
  {
    name: "Essential Growth",
    inr: 24999,
    tagline: "A website and lead notifications, set up together from day one.",
    delivery: "7–12 working days",
    features: [
      "Professional website up to 5 pages",
      "Mobile responsive design",
      "Contact and lead capture form",
      "WhatsApp integration",
      "Basic lead notifications",
      "Google Sheets integration",
      "Basic SEO setup",
    ],
  },
  {
    name: "Complete Growth System",
    inr: 39999,
    popular: true,
    tagline: "Website + lead automation, built as one system that works around the clock.",
    delivery: "12–18 working days",
    features: [
      "Professional website up to 8 pages",
      "Customised website design",
      "Fully mobile responsive",
      "Website lead capture automation",
      "Instant lead notifications",
      "Automated email follow-ups",
      "Google Sheets or CRM integration",
      "Lead tracking and organisation",
      "Basic SEO and analytics",
      "30 days of post-launch technical support",
    ],
  },
  {
    name: "Premium Growth System",
    inr: 59999,
    tagline: "A premium site with AI qualification, bookings and custom workflows.",
    delivery: "18–25 working days",
    features: [
      "Premium website up to 12 pages",
      "Custom design and branding",
      "Advanced lead capture system",
      "AI-powered lead qualification",
      "Automated follow-up workflows",
      "CRM integration",
      "Appointment booking integration",
      "Advanced business workflow automation",
      "Analytics and performance optimisation",
      "30 days of post-launch technical support",
    ],
  },
];

export const WORDPRESS_PLANS = [
  {
    name: "WordPress Starter",
    inr: 12999,
    tagline: "A simple, professional WordPress site to get started.",
    features: ["3–5 pages", "Mobile-responsive design", "Contact form", "Basic SEO setup", "Social media integration"],
  },
  {
    name: "WordPress Professional",
    inr: 19999,
    tagline: "A customised WordPress site built to bring in enquiries.",
    features: ["5–8 pages", "Customized design", "Advanced contact forms", "WhatsApp integration", "On-page SEO", "Speed optimization"],
  },
  {
    name: "WordPress Premium",
    inr: 29999,
    tagline: "A premium WordPress build with bookings and advanced features.",
    features: ["8–12 pages", "Premium custom design", "Advanced functionality", "Booking or appointment integration", "SEO optimization", "Performance optimization"],
  },
  {
    name: "E-commerce",
    inr: 39999,
    tagline: "A WooCommerce store ready to take orders online.",
    features: ["WooCommerce setup", "Product and category pages", "Payment gateway integration", "Cart and checkout", "Order management"],
  },
];

export const SPECIAL_OFFER = {
  name: "Website + Lead Capture Offer",
  inr: 39000,
  website: ["Professional custom-designed website", "Fully responsive on every device", "Speed-optimised with on-page SEO setup", "Contact & enquiry forms that convert"],
  automation: ["Lead capture from website forms into one place", "Instant lead notifications", "Automated reply to every enquiry", "Leads organised in Google Sheets or CRM"],
};

export const ALL_PACKAGES = [
  SPECIAL_OFFER.name,
  ...WEBSITE_PLANS.map((p) => p.name),
  ...WORDPRESS_PLANS.map((p) => p.name),
  ...AUTOMATION_PLANS.map((p) => p.name),
  ...GROWTH_PLANS.map((p) => p.name),
  "Custom Quote",
  "Not sure yet",
];
