import { Bot, MonitorSmartphone, Users, Search, MessagesSquare, TrendingUp } from "lucide-react";

export const CORE_SERVICES = [
  {
    id: "ai",
    num: "01",
    icon: Bot,
    title: "AI Automation",
    short: "Automate repetitive business processes.",
    desc: "Automate repetitive business processes and build intelligent systems that save time and improve operational efficiency.",
    items: ["AI Chatbots", "AI Voice Agents", "n8n Workflow Automation", "AI-Powered Lead Qualification", "AI Email Automation", "WhatsApp Automation"],
    plan: "Growth Automation",
  },
  {
    id: "web",
    num: "02",
    icon: MonitorSmartphone,
    title: "Website Development",
    short: "Build websites that convert visitors into customers.",
    desc: "Modern, responsive, high-performing websites — custom-built or on WordPress — that create a strong online presence and turn visitors into customers.",
    items: ["Business Websites", "Landing Pages", "WordPress Websites", "Website Redesign", "Booking Websites", "E-commerce Websites"],
    plan: "Business Website",
  },
  {
    id: "crm",
    num: "03",
    icon: Users,
    title: "CRM & Lead Management",
    short: "Capture, track and follow up with every lead.",
    desc: "Lead capture and CRM systems that bring every enquiry into one place, track its status and follow up automatically.",
    items: ["Lead Capture Systems", "CRM Automation", "Automated Follow-Ups", "Lead Enrichment", "B2B Lead Generation", "Email Outreach Systems"],
    plan: "Complete Growth System",
  },
  {
    id: "seo",
    num: "04",
    icon: Search,
    title: "SEO & Digital Growth",
    short: "Improve search visibility and website performance.",
    desc: "Search-friendly, fast websites and on-going optimisation that help the right customers find you.",
    items: ["Technical SEO", "On-Page SEO", "Local SEO", "Google Business Profile Optimization", "Website Speed Optimization", "Website Analytics Setup"],
    plan: "Not sure yet",
  },
];

export const EXTRA_SERVICES = [
  {
    id: "comm",
    icon: MessagesSquare,
    title: "Customer Communication",
    desc: "Faster responses, automated communication and streamlined support.",
    items: ["WhatsApp Automation", "Automated Appointment Reminders", "Email Marketing Automation", "Customer Support Systems", "Review Collection Automation"],
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Growth & Optimization",
    desc: "Use data, optimisation and better digital experiences to improve performance.",
    items: ["Conversion Rate Optimization", "Website Analytics Setup", "Sales Funnel Development", "Landing Page Optimization"],
  },
];

export const PROCESS = [
  { n: "01", t: "Discover", d: "Understand your business, goals and current challenges." },
  { n: "02", t: "Plan", d: "Design the right solution and a clear project scope." },
  { n: "03", t: "Build", d: "Develop and implement the required systems." },
  { n: "04", t: "Optimize", d: "Monitor, improve, and support the solution." },
];

export const VALUES = [
  { t: "AI-First Approach", d: "We look for where AI genuinely helps — and keep it practical where it doesn't." },
  { t: "Customized Solutions", d: "Systems shaped around your processes, not a one-size template." },
  { t: "Practical Business Automation", d: "Automations that solve real day-to-day problems your team feels." },
  { t: "Modern Technology", d: "Current, well-supported tools that are easy to maintain and extend." },
  { t: "Transparent Communication", d: "Clear scopes, honest timelines and regular updates throughout." },
  { t: "Growth-Focused Execution", d: "Every build is tied to a business goal you care about." },
];

export const PROJECT_FILTERS = ["All", "AI Automation", "Websites", "Lead Generation", "Customer Communication"];

export const PROJECTS = [
  { id: "ai-lead", cat: "AI Automation", tag: "Concept Project", img: "/img/pf-lead.jpg", title: "AI-Powered Lead Management System", desc: "Incoming leads are scored by AI, routed to the right person and logged in the CRM automatically." },
  { id: "booking", cat: "Customer Communication", tag: "Demo Project", img: "/img/pf-booking.jpg", title: "Automated Appointment Booking System", desc: "Online booking with calendar sync, confirmation messages and reminders before each appointment." },
  { id: "website", cat: "Websites", tag: "Concept Project", img: "/img/pf-website.jpg", title: "Business Website Development", desc: "A fast, responsive business website with clear service pages and enquiry-focused structure." },
  { id: "support", cat: "AI Automation", tag: "Demo Project", img: "/img/pf-support.jpg", title: "AI Customer Support Assistant", desc: "An AI assistant trained on business FAQs that answers common questions and hands off to a human when needed." },
  { id: "email", cat: "Customer Communication", tag: "Concept Project", img: "/img/pf-email.jpg", title: "Automated Email Follow-Up System", desc: "Timed, personalised follow-up sequences that stop automatically when a contact replies." },
  { id: "crm", cat: "Lead Generation", tag: "Demo Project", img: "/img/pf-crm.jpg", title: "Lead Capture & CRM Automation", desc: "Forms, ads and chat enquiries flow into one CRM pipeline with enrichment and instant alerts." },
];
