import { Mail, MessageCircle, CalendarCheck, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { EnquiryForm } from "./EnquiryForm";
import { CONTACT_EMAIL, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/data/pricing";

const STEPS = ["Send your enquiry or book a free call", "A short call to understand your goals", "A clear scope and fixed quote"];

export const ContactSection = () => (
  <section id="contact" className="relative bg-white py-20 sm:py-28" data-testid="section-contact">
    <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <Reveal>
        <p className="eyebrow">Contact · Book a call</p>
        <h2 className="mt-4 text-[34px] font-bold leading-[1.05] text-ink sm:text-5xl">Let's build your <span className="text-gradient">growth engine</span></h2>
        <p className="mt-5 text-base leading-relaxed text-muted2 md:text-lg">Pick a package or book a free consultation — your enquiry lands straight in our inbox.</p>
        <div className="relative mt-8 h-56 overflow-hidden rounded-[28px] sm:h-64">
          <img src="/img/studio.jpg" alt="Two people working on a project in a purple-lit studio" className="h-full w-full object-cover object-[50%_35%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 to-transparent" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-ink backdrop-blur"><CalendarCheck className="h-4 w-4 text-violet" /> Free consultation</span>
        </div>
        <ol className="mt-8 space-y-3">
          {STEPS.map((s, i) => (
            <li key={s} className="flex items-center gap-4 text-[15px] text-ink/85">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 font-mono text-[12px]">{String(i + 1).padStart(2, "0")}</span>{s}
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-ghost" data-testid="contact-email-link"><Mail className="h-4 w-4" /> {CONTACT_EMAIL}</a>
          <a href={PHONE_TEL} className="btn btn-ghost" data-testid="contact-phone-link"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-testid="contact-whatsapp-link"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </Reveal>
      <Reveal delay={0.1}><EnquiryForm /></Reveal>
    </div>
  </section>
);
