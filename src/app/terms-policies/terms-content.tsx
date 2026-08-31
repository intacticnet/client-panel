'use client';

import LegalLayout, {
  LegalSection,
  AtAGlance,
  ContactPanel,
  CrossLink,
  type LegalTocItem,
} from '@/components/shared/LegalLayout';
import {
  Scale,
  Building2,
  Shield,
  CalendarClock,
  Gavel,
  FileSignature,
  Ban,
  RefreshCw,
  AlertTriangle,
  Globe,
  Lock,
  CreditCard,
} from 'lucide-react';

const toc: LegalTocItem[] = [
  { id: 'sec-1', number: '01', title: 'Acceptance of Terms' },
  { id: 'sec-2', number: '02', title: 'Definitions & Interpretation' },
  { id: 'sec-3', number: '03', title: 'Scope of Professional Services' },
  { id: 'sec-4', number: '04', title: 'Client Responsibilities' },
  { id: 'sec-5', number: '05', title: 'Intellectual Property Rights' },
  { id: 'sec-6', number: '06', title: 'Acceptable Use Policy' },
  { id: 'sec-7', number: '07', title: 'Fees, Invoicing & Payment' },
  { id: 'sec-8', number: '08', title: 'Third-Party Services & Links' },
  { id: 'sec-9', number: '09', title: 'Representations & Warranties' },
  { id: 'sec-10', number: '10', title: 'Limitation of Liability' },
  { id: 'sec-11', number: '11', title: 'Indemnification' },
  { id: 'sec-12', number: '12', title: 'Term, Suspension & Termination' },
  { id: 'sec-13', number: '13', title: 'Dispute Resolution & Governing Law' },
  { id: 'sec-14', number: '14', title: 'Force Majeure' },
  { id: 'sec-15', number: '15', title: 'Amendments to These Terms' },
  { id: 'sec-16', number: '16', title: 'General Provisions' },
];

export default function TermsContent() {
  return (
    <LegalLayout
      badge="Legal Framework"
      title="Terms & Policies"
      subtitle="The contractual framework governing your use of intactic.net and the professional engagement of Intactic services. Crafted to protect both parties with clarity, precision, and enterprise-grade governance."
      meta={[
        { label: 'Last Updated', value: 'August 26, 2026' },
        { label: 'Effective Date', value: 'September 1, 2026' },
        { label: 'Document Version', value: 'v2.4' },
        { label: 'Jurisdiction', value: 'Bangladesh' },
      ]}
      toc={toc}
    >
      {/* ── Executive summary cards ── */}
      <AtAGlance
        items={[
          {
            icon: <Globe size={16} strokeWidth={2} />,
            label: 'Governing Law',
            value: 'Laws of Bangladesh',
            sub: 'Arbitration seated in Chittagong',
          },
          {
            icon: <Building2 size={16} strokeWidth={2} />,
            label: 'Contracting Entity',
            value: 'Intactic Group Ltd.',
            sub: 'Registered in Bangladesh',
          },
          {
            icon: <Shield size={16} strokeWidth={2} />,
            label: 'Liability Cap',
            value: '12-Month Fees',
            sub: 'Aggregate cap on direct claims',
          },
          {
            icon: <CalendarClock size={16} strokeWidth={2} />,
            label: 'Notice Period',
            value: '30 Days',
            sub: 'Written notice for termination',
          },
        ]}
      />

      {/* ── Preamble ── */}
      <p className="!mt-0 mb-2 text-[15px] leading-[1.85] text-slate-600">
        These Terms &amp; Policies (&quot;Terms&quot;) constitute a legally binding agreement between{' '}
        <strong className="text-slate-800">Intactic Group Ltd.</strong> (&quot;Intactic&quot;, &quot;we&quot;, &quot;us&quot;,
        or &quot;our&quot;) and you (&quot;you&quot; or &quot;Visitor&quot;) governing access to and use of{' '}
        <strong className="text-slate-800">intactic.net</strong>, all associated subdomains, and any content,
        functionality, or services offered through them. Please read these Terms carefully before using our website.
      </p>

      <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200/70 mb-2">
        <AlertTriangle size={17} className="flex-shrink-0 text-amber-500 mt-0.5" strokeWidth={2} />
        <p className="text-[13px] leading-relaxed text-amber-900/80">
          <strong className="font-semibold">Important Notice:</strong> For clients operating under a signed Master
          Services Agreement (MSA), Statement of Work (SOW), or equivalent engagement contract, the terms of that
          agreement prevail over these Terms to the extent of any conflict.
        </p>
      </div>

      {/* ── Sections ── */}
      <LegalSection id="sec-1" number="01" title="Acceptance of Terms">
        <p>
          By accessing, browsing, or otherwise using intactic.net (the &quot;Site&quot;), you acknowledge that you have
          read, understood, and agree to be bound by these Terms and by our{' '}
          <a href="/privacy-cookies" className="text-brand font-semibold hover:underline">
            Privacy &amp; Cookies Notice
          </a>
          . If you do not agree with any part of these Terms, you must discontinue access to and use of the Site
          immediately.
        </p>
        <p>
          Your continued use of the Site following the posting of revised Terms constitutes your acceptance of such
          changes. These Terms apply to all Visitors, prospective clients, and users of our Site, whether or not a
          commercial relationship exists between you and Intactic.
        </p>
      </LegalSection>

      <LegalSection id="sec-2" number="02" title="Definitions & Interpretation">
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              term: 'Company / Intactic',
              def: 'Intactic Group Ltd., a limited liability company registered under the laws of Bangladesh, operating from Chittagong, Bangladesh.',
            },
            {
              term: 'Site',
              def: 'intactic.net and all subdomains, mirrors, successor URLs, and associated web properties operated by Intactic.',
            },
            {
              term: 'Services',
              def: 'Professional technology services offered by Intactic, including software engineering, web and mobile development, UI/UX design, branding, digital marketing, cloud infrastructure, and technology consultancy.',
            },
            {
              term: 'Client',
              def: 'Any person or entity that has entered into a signed engagement agreement or accepted a proposal issued by Intactic.',
            },
            {
              term: 'Content',
              def: 'All text, graphics, logos, button icons, images, audio and video clips, code, data compilations, and downloadable files presented on the Site.',
            },
            {
              term: 'Engagement Agreement',
              def: 'A Master Services Agreement, Statement of Work, proposal acceptance, retainer agreement, or other written contract executed between Intactic and a Client.',
            },
          ].map((d) => (
            <div key={d.term} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
              <p className="text-[13px] font-bold text-brand font-display mb-1">{d.term}</p>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">{d.def}</p>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-slate-500 !mt-5">
          Headings are inserted for convenience only and shall not affect the construction of these Terms. Words
          importing the singular include the plural and vice versa.
        </p>
      </LegalSection>

      <LegalSection id="sec-3" number="03" title="Scope of Professional Services">
        <p>
          The Site serves as an informational portal describing Intactic&apos;s professional capabilities, case studies,
          product offerings, and insights. Content presented on the Site — including service descriptions, portfolio
          examples, and published metrics — is provided for general information purposes and does not constitute a
          binding offer, quotation, or commitment to deliver any specific outcome.
        </p>
        <p>
          Actual service engagements are governed exclusively by the applicable Engagement Agreement, which defines
          deliverables, timelines, acceptance criteria, fees, and mutual obligations. Nothing presented on the Site
          overrides or amends the terms of a signed agreement.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any portion of the Site — including specific content,
          features, or service listings — at any time without prior notice.
        </p>
      </LegalSection>

      <LegalSection id="sec-4" number="04" title="Client Responsibilities">
        <p>In engaging with the Site and our Services, you agree that you shall:</p>
        <ul className="space-y-2.5">
          {[
            'Provide accurate, current, and complete information when submitting inquiries, forms, or project briefs.',
            'Maintain the confidentiality and security of any credentials, portals, or collaboration tools granted to you.',
            'Review deliverables and provide timely feedback, approvals, or change requests through agreed channels.',
            'Ensure that any materials you supply for use in a project — including text, imagery, fonts, and third-party assets — are properly licensed for their intended use.',
            'Use the Site and Services solely for lawful business purposes in compliance with all applicable laws and regulations.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="sec-5" number="05" title="Intellectual Property Rights">
        <p>
          <strong className="text-slate-800">Our ownership.</strong> The Site and all of its Content — including the
          Intactic name, logo, brand identity, design system, case studies, articles, and code — are the exclusive
          property of Intactic Group Ltd. or its licensors and are protected by international copyright, trademark,
          and other intellectual property laws.
        </p>
        <p>
          <strong className="text-slate-800">Limited license.</strong> Subject to your compliance with these Terms, we
          grant you a personal, non-exclusive, non-transferable, revocable license to access and browse the Site for
          its intended informational purpose. This license does not permit commercial reproduction, redistribution,
          derivative works, framing, scraping, or resale of any Content without our prior written consent.
        </p>
        <p>
          <strong className="text-slate-800">Client deliverables.</strong> Ownership and license of project
          deliverables are governed by the applicable Engagement Agreement. Unless otherwise stated in writing,
          ownership of custom deliverables transfers to the Client upon receipt of full payment, while Intactic
          retains ownership of its pre-existing tools, frameworks, libraries, and know-how employed in their creation.
        </p>
        <p>
          <strong className="text-slate-800">Trademarks.</strong> All third-party trademarks, logos, and brand names
          referenced on the Site remain the property of their respective owners. Such references do not imply
          endorsement unless expressly stated.
        </p>
      </LegalSection>

      <LegalSection id="sec-6" number="06" title="Acceptable Use Policy">
        <p>You agree not to access or use the Site in any manner that:</p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Violates any applicable local, national, or international law or regulation.',
            'Attempts to gain unauthorized access to our systems, networks, or data through penetration testing, vulnerability scanning, or brute-force attacks.',
            'Scrapes, harvests, or extracts Content using automated bots, crawlers, or scripts without written permission.',
            'Reverse-engineers, decompiles, or attempts to derive the source code of the Site or its underlying software.',
            'Introduces malware, ransomware, or any harmful code intended to disrupt site operations.',
            'Impersonates Intactic personnel, clients, or any other person or entity.',
            'Submits false, misleading, or fraudulent inquiries through our contact or quotation channels.',
            'Uses the Site to transmit spam, unsolicited commercial communications, or chain letters.',
          ].map((item) => (
            <div key={item} className="flex gap-2.5 p-3.5 rounded-xl bg-red-50/60 border border-red-100">
              <Ban size={14} className="flex-shrink-0 text-red-400 mt-1" strokeWidth={2.2} />
              <p className="text-[12.5px] text-slate-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          We reserve the right to suspend or terminate access, and to pursue available legal remedies, for any
          violation of this Acceptable Use Policy. Suspected violations may be reported to{' '}
          <a href="mailto:info@intactic.net" className="text-brand font-semibold hover:underline">
            info@intactic.net
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="sec-7" number="07" title="Fees, Invoicing & Payment">
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: <FileSignature size={15} strokeWidth={2} />,
              title: 'Fee Structure',
              desc: 'Services are quoted on a fixed-scope, time-and-materials, or monthly-retainer basis as defined in each Engagement Agreement. Site content is informational and non-binding on pricing.',
            },
            {
              icon: <CreditCard size={15} strokeWidth={2} />,
              title: 'Payment Terms',
              desc: 'Unless otherwise agreed in writing, invoices are payable within fifteen (15) days of issue. Project kick-offs may require an agreed advance payment.',
            },
            {
              icon: <RefreshCw size={15} strokeWidth={2} />,
              title: 'Recurring Charges',
              desc: 'Retainers, hosting, maintenance, and support subscriptions renew automatically per billing cycle until cancelled with the notice stated in the agreement.',
            },
            {
              icon: <Gavel size={15} strokeWidth={2} />,
              title: 'Late Payment & Taxes',
              desc: 'Overdue amounts may accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. Fees are exclusive of applicable taxes, which are the Client’s responsibility.',
            },
          ].map((c) => (
            <div key={c.title} className="p-4.5 rounded-xl border border-slate-200/70 bg-slate-50/80">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-slate-200 text-brand shadow-xs">
                  {c.icon}
                </span>
                <p className="text-[13px] font-bold text-slate-900 font-display">{c.title}</p>
              </div>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          Currency, invoicing details, and payment channels (bank transfer, card, or local instruments) are specified
          on each invoice. Disputed charges must be raised in writing within fourteen (14) days of the invoice date.
        </p>
      </LegalSection>

      <LegalSection id="sec-8" number="08" title="Third-Party Services & Links">
        <p>
          The Site may reference, embed, or link to third-party platforms — including analytics providers, cloud
          services, payment processors, and media hosts. Such references are provided for convenience and do not
          constitute endorsement or warranty of any third party.
        </p>
        <p>
          Your interactions with any third party accessed through the Site — including purchases, subscriptions, or
          data exchanges — are solely between you and that third party, and are governed by the third party&apos;s own
          terms and privacy policies. Intactic bears no responsibility for the content, availability, or practices of
          external websites.
        </p>
      </LegalSection>

      <LegalSection id="sec-9" number="09" title="Representations & Warranties">
        <p>
          <strong className="text-slate-800">Professional standard.</strong> Intactic warrants that its Services will
          be performed with the degree of skill, care, and diligence reasonably expected of qualified professionals in
          the technology services industry, consistent with the specifications of the applicable Engagement Agreement.
        </p>
        <p>
          <strong className="text-slate-800">Site content &quot;as is&quot;.</strong> Except as expressly stated, the
          Site and its Content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without
          warranties of any kind, whether express or implied — including without limitation, warranties of
          merchantability, fitness for a particular purpose, accuracy, or non-infringement. We do not warrant that the
          Site will operate without interruption or be entirely free from errors or defects.
        </p>
      </LegalSection>

      <LegalSection id="sec-10" number="10" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Intactic Group Ltd., its directors, employees, and agents
          shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages
          arising from or related to your use of the Site — including loss of profits, revenue, data, goodwill, or
          business interruption — whether based in contract, tort, or otherwise.
        </p>
        <div className="p-4.5 rounded-xl bg-brand/[0.04] border border-brand/15">
          <p className="text-[13.5px] leading-relaxed text-slate-700">
            <strong className="text-brand font-semibold">Liability Cap.</strong> Our total aggregate liability arising
            out of or in connection with the Site or any Services shall not exceed the total fees paid by the Client
            to Intactic during the twelve (12) months immediately preceding the event giving rise to the claim.
          </p>
        </div>
        <p>
          Nothing in these Terms excludes or limits liability for death, personal injury, fraud, or any other
          liability that cannot lawfully be excluded under the laws of Bangladesh.
        </p>
      </LegalSection>

      <LegalSection id="sec-11" number="11" title="Indemnification">
        <p>
          <strong className="text-slate-800">By you.</strong> You agree to indemnify, defend, and hold harmless
          Intactic Group Ltd., its affiliates, and their respective officers, employees, and agents from any claims,
          liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or
          related to: (a) your breach of these Terms; (b) your misuse of the Site; or (c) materials or data you supply
          to us for use in a project, including claims that such materials infringe third-party rights.
        </p>
        <p>
          <strong className="text-slate-800">By us.</strong> Intactic shall indemnify the Client against third-party
          claims that custom deliverables created solely for the Client infringe applicable intellectual property
          rights, provided the Client promptly notifies us, grants us control of the defense, and cooperates
          reasonably. This obligation does not apply where the claim results from Client-supplied materials,
          modifications made by parties other than Intactic, or combination of deliverables with third-party products.
        </p>
      </LegalSection>

      <LegalSection id="sec-12" number="12" title="Term, Suspension & Termination">
        <p>
          <strong className="text-slate-800">Site access.</strong> The license granted under these Terms remains in
          effect until terminated. We may suspend or terminate your access to the Site at any time, with or without
          cause, including where we reasonably believe you have breached these Terms.
        </p>
        <p>
          <strong className="text-slate-800">Service engagements.</strong> Termination rights for Services are
          governed by the applicable Engagement Agreement. Unless stated otherwise, either party may terminate a
          monthly-retainer engagement with thirty (30) days&apos; prior written notice.
        </p>
        <p>
          <strong className="text-slate-800">Effect of termination.</strong> Upon termination: (a) accrued payment
          obligations become immediately due; (b) provisions that by their nature should survive — including
          intellectual property, confidentiality, liability, and governing law clauses — shall survive termination;
          and (c) each party shall, upon request, return or destroy the other party&apos;s confidential information.
        </p>
      </LegalSection>

      <LegalSection id="sec-13" number="13" title="Dispute Resolution & Governing Law">
        <p>
          These Terms and any dispute arising out of or in connection with them are governed by and construed in
          accordance with the laws of the People&apos;s Republic of Bangladesh, without regard to conflict-of-law
          principles.
        </p>
        <p>
          The parties shall first attempt to resolve any dispute through good-faith negotiation between senior
          representatives within thirty (30) days of written notice of the dispute. Should negotiation fail, the
          dispute shall be referred to binding arbitration in Chittagong, Bangladesh, under the Arbitration Act,
          2001, by a single arbitrator mutually appointed by the parties — or, failing agreement on appointment, by
          the relevant appointing authority.
        </p>
        <p>
          Nothing in this clause prevents either party from seeking urgent injunctive or interim relief from a
          competent court to protect its intellectual property or confidential information.
        </p>
      </LegalSection>

      <LegalSection id="sec-14" number="14" title="Force Majeure">
        <p>
          Neither party shall be liable for any delay or failure to perform its obligations (other than payment
          obligations) where such delay or failure results from events beyond its reasonable control — including acts
          of God, natural disasters, war, terrorism, civil unrest, epidemic or pandemic conditions, government
          action, labor disputes, strikes, utility or internet backbone failures, or cyberattacks not attributable to
          the affected party&apos;s negligence.
        </p>
        <p>
          The affected party shall notify the other party promptly and use commercially reasonable efforts to mitigate
          the impact and resume performance. If a force majeure event continues for more than sixty (60) consecutive
          days, either party may terminate the affected engagement without liability.
        </p>
      </LegalSection>

      <LegalSection id="sec-15" number="15" title="Amendments to These Terms">
        <p>
          We may revise these Terms at any time in our sole discretion, including to reflect changes in our services,
          technology, legal requirements, or business practices. Material revisions will be indicated by updating the
          &quot;Last Updated&quot; date and, where appropriate, the version number displayed on this page.
        </p>
        <p>
          Your continued access to or use of the Site after the effective date of any revision constitutes acceptance
          of the revised Terms. You are encouraged to review this document periodically. Where required by law or
          where changes materially affect Clients, we will provide direct notice through reasonable channels.
        </p>
      </LegalSection>

      <LegalSection id="sec-16" number="16" title="General Provisions">
        <ul className="space-y-3">
          {[
            {
              t: 'Entire Agreement',
              d: 'These Terms, together with our Privacy & Cookies Notice and any applicable Engagement Agreement, constitute the entire agreement between the parties concerning the Site.',
            },
            {
              t: 'Severability',
              d: 'If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
            },
            {
              t: 'No Waiver',
              d: 'Failure or delay by either party to exercise any right under these Terms shall not constitute a waiver of that or any other right.',
            },
            {
              t: 'Assignment',
              d: 'You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.',
            },
            {
              t: 'Independent Contractors',
              d: 'Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between Intactic and any Visitor or Client.',
            },
            {
              t: 'Electronic Communications',
              d: 'You consent to receive communications from us electronically — including by email and through the Site — and agree that such communications satisfy any legal requirement for written notice.',
            },
          ].map((g) => (
            <li key={g.t} className="flex gap-3">
              <Lock size={13} className="flex-shrink-0 text-brand/60 mt-1.5" strokeWidth={2.2} />
              <p className="text-slate-600">
                <strong className="text-slate-800 font-semibold">{g.t}.</strong> {g.d}
              </p>
            </li>
          ))}
        </ul>
      </LegalSection>

      {/* ── Contact panel ── */}
      <ContactPanel
        heading="Legal Notices & Correspondence"
        intro="For questions regarding these Terms & Policies, requests for consent, or formal legal notices, please direct your correspondence to our legal desk through any of the official channels below."
        emails={[
          { label: 'General & Legal', email: 'info@intactic.net', note: 'Legal notices, general queries' },
          { label: 'Sales & Contracts', email: 'sales@intactic.net', note: 'Engagement & commercial terms' },
        ]}
      />

      {/* ── Cross-link ── */}
      <CrossLink
        href="/privacy-cookies"
        kicker="Companion Document"
        title="Privacy & Cookies Notice"
        desc="Understand exactly what data we collect, how we process it, the cookies this site uses, and the control you retain over your personal information."
        cta="View Privacy & Cookies"
      />
    </LegalLayout>
  );
}
