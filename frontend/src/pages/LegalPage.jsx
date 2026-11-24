import { PageHeader } from "@/components/ef/home/Blocks";
import { CONTACT_EMAIL } from "@/data/pricing";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      ["Information we collect", "When you send an enquiry or book a consultation, we collect the details you enter in the form: your name, email, and optionally your phone number, business name, chosen package and message."],
      ["How we use it", "We use this information only to reply to your enquiry, discuss your project and provide our services. We do not sell your information."],
      ["Storage", "Enquiries are stored securely and emailed to our team inbox so we can respond."],
      ["Your choices", `You can ask us to update or delete your information at any time by emailing ${CONTACT_EMAIL}.`],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      ["Project fees", "All prices are one-time project fees. Hosting, domain, third-party subscriptions and API usage charges are billed separately. USD prices are approximate."],
      ["Scope", "The final scope, deliverables, timeline and payment schedule for each project are confirmed in writing before work begins."],
      ["Revisions", "Revision rounds are included as listed in each package. Additional changes outside the agreed scope may be quoted separately."],
      ["Contact", `Questions about these terms can be sent to ${CONTACT_EMAIL}.`],
    ],
  },
};

export default function LegalPage({ kind }) {
  const c = CONTENT[kind];
  return (
    <>
      <PageHeader testId={`${kind}-header`} eyebrow="Legal" title={c.title} sub="Plain-language summary of how we work." />
      <section className="pb-24">
        <div className="container-x max-w-3xl space-y-8">
          {c.sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="text-2xl font-bold text-ink">{h}</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted2">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
