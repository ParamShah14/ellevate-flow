import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "@/components/ef/home/Blocks";
import { ContactSection } from "@/components/ef/ContactSection";
import { scrollToId } from "@/lib/scroll";

export default function ContactPage() {
  const [params] = useSearchParams();
  useEffect(() => {
    if (!params.get("plan") && !params.get("intent")) return undefined;
    const t = setTimeout(() => scrollToId("contact-form"), 350);
    return () => clearTimeout(t);
  }, [params]);
  return (
    <>
      <PageHeader testId="contact-header" eyebrow="Contact" title={<>Let's talk about your <span className="text-gradient">project</span></>} sub="Send an enquiry, book a free consultation, or message us directly on WhatsApp." />
      <ContactSection />
    </>
  );
}
