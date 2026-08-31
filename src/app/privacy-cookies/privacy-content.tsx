'use client';

import LegalLayout, {
  LegalSection,
  AtAGlance,
  ContactPanel,
  CrossLink,
  type LegalTocItem,
} from '@/components/shared/LegalLayout';
import {
  Building2,
  Clock,
  Ban,
  Database,
  ShieldCheck,
  Eye,
  UserCheck,
  Globe,
  FileCheck,
  Cookie,
  Settings,
  ExternalLink,
  Pencil,
  Trash2,
  Pause,
  Download,
  XCircle,
  RefreshCw,
  Chrome,
  Compass,
  Flame,
} from 'lucide-react';

const toc: LegalTocItem[] = [
  { id: 'sec-1', number: '01', title: 'About This Notice' },
  { id: 'sec-2', number: '02', title: 'Data We Collect' },
  { id: 'sec-3', number: '03', title: 'How We Use Your Data' },
  { id: 'sec-4', number: '04', title: 'Legal Bases for Processing' },
  { id: 'sec-5', number: '05', title: 'Data Sharing & Disclosure' },
  { id: 'sec-6', number: '06', title: 'International Data Transfers' },
  { id: 'sec-7', number: '07', title: 'Data Retention & Deletion' },
  { id: 'sec-8', number: '08', title: 'Data Security Measures' },
  { id: 'sec-9', number: '09', title: 'Your Rights & Requests' },
  { id: 'sec-10', number: '10', title: 'Understanding Cookies' },
  { id: 'sec-11', number: '11', title: 'Cookies We Use' },
  { id: 'sec-12', number: '12', title: 'Managing Cookie Preferences' },
  { id: 'sec-13', number: '13', title: 'Third-Party Technologies' },
  { id: 'sec-14', number: '14', title: 'Children’s Privacy' },
  { id: 'sec-15', number: '15', title: 'Changes to This Notice' },
];

/* Cookie inventory table rows */
const cookieRows = [
  {
    category: 'Strictly Necessary',
    color: '#22c55e',
    status: 'Always Active',
    examples: 'Session tokens, security cookies, load balancer affinity',
    purpose: 'Core site functionality — authentication, secure sessions, and traffic distribution.',
    duration: 'Session — 12 months',
  },
  {
    category: 'Performance & Analytics',
    color: '#115fc9',
    status: 'Optional',
    examples: 'Google Analytics (_ga, _gid), error logging',
    purpose: 'Aggregated measurement of page performance and visitor behavior to improve the site.',
    duration: 'Up to 24 months',
  },
  {
    category: 'Functional',
    color: '#8b5cf6',
    status: 'Optional',
    examples: 'Language preference, region settings, form memory',
    purpose: 'Remembers your choices to provide enhanced, personalized features.',
    duration: 'Up to 12 months',
  },
  {
    category: 'Marketing & Targeting',
    color: '#F5A623',
    status: 'Optional',
    examples: 'Retargeting pixels, ad frequency caps, campaign attribution',
    purpose: 'Delivers relevant messaging and measures the effectiveness of campaigns.',
    duration: 'Up to 13 months',
  },
];

export default function PrivacyContent() {
  return (
    <LegalLayout
      badge="Data Governance"
      title="Privacy & Cookies"
      subtitle="A transparent account of how Intactic collects, processes, and protects personal data — together with the cookies this site relies on and the control you retain over both, at all times."
      meta={[
        { label: 'Last Updated', value: 'August 26, 2026' },
        { label: 'Effective Date', value: 'September 1, 2026' },
        { label: 'Document Version', value: 'v3.1' },
        { label: 'Applies To', value: 'intactic.net + Subdomains' },
      ]}
      toc={toc}
    >
      {/* ── Executive summary ── */}
      <AtAGlance
        items={[
          {
            icon: <Building2 size={16} strokeWidth={2} />,
            label: 'Data Controller',
            value: 'Intactic Group Ltd.',
            sub: 'Registered in Bangladesh',
          },
          {
            icon: <Clock size={16} strokeWidth={2} />,
            label: 'Response Window',
            value: 'Within 30 Days',
            sub: 'For all data subject requests',
          },
          {
            icon: <Ban size={16} strokeWidth={2} />,
            label: 'Data Sales',
            value: 'None — Ever',
            sub: 'We never sell personal data',
          },
          {
            icon: <Database size={16} strokeWidth={2} />,
            label: 'Engagement Retention',
            value: '5 Years',
            sub: 'Post project completion',
          },
        ]}
      />

      {/* ── Preamble ── */}
      <p className="!mt-0 mb-2 text-[15px] leading-[1.85] text-slate-600">
        <strong className="text-slate-800">Intactic Group Ltd.</strong> (&quot;Intactic&quot;, &quot;we&quot;,
        &quot;us&quot;) is committed to protecting your privacy. This combined Privacy &amp; Cookies Notice explains
        what personal data we collect through <strong className="text-slate-800">intactic.net</strong>, how we use
        and safeguard it, who we share it with, and the rights available to you under applicable data protection law.
      </p>
      <p className="text-[15px] leading-[1.85] text-slate-600">
        It also provides a complete inventory of the cookies this Site uses and the practical ways you can control
        them. Our approach is simple: collect the minimum required, protect it rigorously, and give you control
        without friction.
      </p>

      {/* ── Sections ── */}
      <LegalSection id="sec-1" number="01" title="About This Notice">
        <p>
          This Notice applies whenever you visit intactic.net or any of its subdomains, submit an inquiry or quotation
          request, subscribe to our insights, or engage our professional services. It does not apply to third-party
          platforms that we merely link to.
        </p>
        <p>
          Where you become a client, additional data processing terms — including confidentiality and data processing
          schedules — are defined in your Engagement Agreement. Those agreements operate alongside this Notice and
          provide additional protections for client materials.
        </p>
      </LegalSection>

      <LegalSection id="sec-2" number="02" title="Data We Collect">
        <p>We collect data through two channels — information you provide directly, and data gathered automatically.</p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: <UserCheck size={15} strokeWidth={2} />,
              title: 'Identity & Contact',
              desc: 'Name, email address, phone number, job title, and company name — provided when you contact us, request a quote, or subscribe to updates.',
            },
            {
              icon: <FileCheck size={15} strokeWidth={2} />,
              title: 'Project & Business Data',
              desc: 'Requirements briefs, budget ranges, timelines, and documents you choose to share during scoping or engagement discussions.',
            },
            {
              icon: <Globe size={15} strokeWidth={2} />,
              title: 'Technical Data',
              desc: 'IP address (truncated where possible), browser type and version, operating system, device type, and time zone — collected automatically.',
            },
            {
              icon: <Eye size={15} strokeWidth={2} />,
              title: 'Usage Data',
              desc: 'Pages visited, duration of visit, referral source, and interactions with site features — in aggregated or pseudonymous form.',
            },
            {
              icon: <RefreshCw size={15} strokeWidth={2} />,
              title: 'Communication Records',
              desc: 'Records of correspondence through email, contact forms, and scheduled calls with our team during office hours.',
            },
            {
              icon: <Settings size={15} strokeWidth={2} />,
              title: 'Preferences',
              desc: 'Marketing preferences, communication consents, and cookie settings — retained so we can honor your choices.',
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

        <p className="text-[13px] text-slate-500 !mt-5">
          We do not collect special-category data (such as health, biometric, or political data), and we do not
          knowingly collect data from children — see Section 14.
        </p>
      </LegalSection>

      <LegalSection id="sec-3" number="03" title="How We Use Your Data">
        <p>We process personal data only for defined, legitimate purposes:</p>
        <ul className="space-y-2.5">
          {[
            'Responding to your inquiries and delivering information you request — such as proposals, quotations, and technical guidance.',
            'Delivering and managing our professional services, including project communication, invoicing, and support.',
            'Improving our Site, services, and content through aggregated analytics and performance monitoring.',
            'Protecting the security and integrity of our systems — including fraud prevention and abuse detection.',
            'Sending insights and marketing communications — only where you have opted in, and with one-click unsubscribe in every message.',
            'Meeting legal, accounting, and regulatory obligations applicable to our operations.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 p-4 rounded-xl bg-brand/[0.04] border border-brand/15">
          <ShieldCheck size={17} className="flex-shrink-0 text-brand mt-0.5" strokeWidth={2} />
          <p className="text-[13px] leading-relaxed text-slate-700">
            <strong className="text-brand font-semibold">Our promise:</strong> Intactic does not sell, rent, or trade
            your personal information to any third party for their marketing purposes. Ever.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="sec-4" number="04" title="Legal Bases for Processing">
        <p>Where data protection law requires a legal basis, we rely on the following:</p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              t: 'Contract',
              d: 'Processing necessary to respond to your inquiries and to perform obligations under an Engagement Agreement with you.',
            },
            {
              t: 'Legitimate Interests',
              d: 'Operating and securing our Site, improving service quality, and defending legal claims — assessed through balancing tests to respect your rights.',
            },
            {
              t: 'Consent',
              d: 'Sending optional marketing communications and setting non-essential cookies — you may withdraw consent at any time.',
            },
            {
              t: 'Legal Obligation',
              d: 'Retaining records for tax, accounting, and regulatory compliance as required by the laws of Bangladesh.',
            },
          ].map((b) => (
            <div key={b.t} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
              <p className="text-[12.5px] font-bold text-brand font-display mb-1.5">{b.t}</p>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="sec-5" number="05" title="Data Sharing & Disclosure">
        <p>We share personal data only with carefully selected categories of recipients:</p>
        <ul className="space-y-2.5">
          {[
            'Service providers and sub-processors — cloud hosting, analytics, email delivery, and payment infrastructure — bound by contractual confidentiality and data protection commitments.',
            'Professional advisors — lawyers, accountants, and auditors — under confidentiality obligations, where necessary for legitimate business purposes.',
            'Law enforcement or regulators — only where disclosure is required by applicable law, regulation, or valid legal process.',
            'Business restructuring — in the event of a merger, acquisition, or asset sale, data may be transferred subject to this Notice and applicable law.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Every sub-processor we engage is assessed for security posture and contractual safeguards before receiving
          any data, and we maintain an internal register of processing activities.
        </p>
      </LegalSection>

      <LegalSection id="sec-6" number="06" title="International Data Transfers">
        <p>
          Our infrastructure partners — including cloud hosting, database, and media delivery services — may process
          data in data centers located outside Bangladesh. Where personal data is transferred internationally, we
          apply appropriate safeguards such as contractual data protection clauses and, where applicable, standard
          contractual clauses.
        </p>
        <p>
          We select providers whose infrastructure meets internationally recognized security certifications, and we
          minimize the scope of transferred data to what is strictly necessary for the service provided.
        </p>
      </LegalSection>

      <LegalSection id="sec-7" number="07" title="Data Retention & Deletion">
        <p>
          We retain personal data only as long as necessary for the purposes described in this Notice, and in
          accordance with statutory retention obligations:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: 'Project Data', v: '5 Years', d: 'After project completion — supporting maintenance and warranty needs.' },
            { t: 'Inquiry Records', v: '24 Months', d: 'From last interaction — for follow-up continuity and audit.' },
            { t: 'Marketing Consents', v: 'Until Withdrawn', d: 'Preferences retained so we can honor your choices.' },
          ].map((r) => (
            <div key={r.t} className="p-4 rounded-xl border border-slate-200/70 bg-white">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.15em] text-slate-400 eyebrow-kicker mb-1">{r.t}</p>
              <p className="text-lg font-bold text-brand font-display leading-tight mb-1">{r.v}</p>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          When retention periods expire, data is securely deleted or irreversibly anonymized. You may request earlier
          deletion at any time — see Section 9 — subject to legal retention obligations which may require us to keep
          certain records (such as invoices) for the statutory period.
        </p>
      </LegalSection>

      <LegalSection id="sec-8" number="08" title="Data Security Measures">
        <p>
          We implement layered, industry-standard controls aligned with enterprise practice to protect personal data
          against unauthorized access, alteration, disclosure, or destruction:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'TLS 1.2+ / SSL encryption for all data transmitted between your browser and our servers.',
            'Encryption at rest for stored data, including database-level protection.',
            'Role-based access control following the principle of least privilege.',
            'Audit logging and monitoring of administrative activities.',
            'Regular dependency, vulnerability, and security posture reviews.',
            'Team-wide security awareness training and incident response procedures.',
          ].map((s) => (
            <div key={s} className="flex gap-2.5 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <ShieldCheck size={14} className="flex-shrink-0 text-emerald-600 mt-0.5" strokeWidth={2.2} />
              <p className="text-[12.5px] text-slate-600 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          No system is perfectly secure. In the unlikely event of a personal data breach affecting your rights, we
          will notify you and the relevant supervisory authority without undue delay, consistent with our incident
          response procedures and applicable law.
        </p>
      </LegalSection>

      <LegalSection id="sec-9" number="09" title="Your Rights & Requests">
        <p>
          Depending on your jurisdiction, you may exercise the following rights over your personal data at any time:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: <Eye size={15} strokeWidth={2} />, t: 'Right of Access', d: 'Request a copy of the personal data we hold about you.' },
            { icon: <Pencil size={15} strokeWidth={2} />, t: 'Rectification', d: 'Correct inaccurate or incomplete personal data.' },
            { icon: <Trash2 size={15} strokeWidth={2} />, t: 'Erasure', d: 'Request deletion, subject to legal retention duties.' },
            { icon: <Pause size={15} strokeWidth={2} />, t: 'Restriction', d: 'Ask us to pause processing pending dispute or review.' },
            { icon: <Download size={15} strokeWidth={2} />, t: 'Portability', d: 'Receive your data in a structured, machine-readable format.' },
            { icon: <XCircle size={15} strokeWidth={2} />, t: 'Objection', d: 'Object to processing based on legitimate interests.' },
          ].map((r) => (
            <div key={r.t} className="p-4 rounded-xl border border-slate-200/70 bg-slate-50/80">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-slate-200 text-brand shadow-xs mb-2.5">
                {r.icon}
              </span>
              <p className="text-[13px] font-bold text-slate-900 font-display mb-1">{r.t}</p>
              <p className="text-[12px] text-slate-500 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          You may also <strong className="text-slate-800">withdraw consent</strong> for marketing or non-essential
          cookies at any time — withdrawal does not affect the lawfulness of earlier processing. To exercise any
          right, email{' '}
          <a href="mailto:info@intactic.net" className="text-brand font-semibold hover:underline">
            info@intactic.net
          </a>
          . We respond within thirty (30) days, may verify your identity before acting, and never charge a fee —
          except where requests are manifestly excessive or repetitive.
        </p>
      </LegalSection>

      <LegalSection id="sec-10" number="10" title="Understanding Cookies">
        <p>
          Cookies are small text files placed on your device when you visit a website. They allow the site to remember
          your actions and preferences — enabling everything from keeping you signed in to understanding which
          articles resonate with readers.
        </p>
        <p>
          Cookies are not programs: they cannot install malware, access your files, or transmit viruses. They simply
          store small amounts of data — set either by us (first-party) or by embedded third-party services
          (third-party) — that your browser returns on subsequent visits.
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <p className="text-[13px] font-bold text-slate-900 font-display mb-1.5">Session Cookies</p>
            <p className="text-[12.5px] text-slate-500 leading-relaxed">
              Temporary cookies that expire automatically when you close your browser. Used for session integrity and
              security during a single visit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <p className="text-[13px] font-bold text-slate-900 font-display mb-1.5">Persistent Cookies</p>
            <p className="text-[12.5px] text-slate-500 leading-relaxed">
              Remain on your device for a defined period — remembering preferences and enabling analytics continuity
              across visits.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="sec-11" number="11" title="Cookies We Use">
        <p>
          The following table presents our complete cookie inventory, reviewed regularly by our engineering team:
        </p>

        {/* Cookie inventory table */}
        <div className="not-prose overflow-x-auto rounded-xl border border-slate-200/80 custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#070d19] text-white">
                <th className="px-4 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.12em] eyebrow-kicker text-white/70">
                  Category
                </th>
                <th className="px-4 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.12em] eyebrow-kicker text-white/70">
                  Purpose
                </th>
                <th className="px-4 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.12em] eyebrow-kicker text-white/70">
                  Examples
                </th>
                <th className="px-4 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.12em] eyebrow-kicker text-white/70">
                  Duration
                </th>
                <th className="px-4 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.12em] eyebrow-kicker text-white/70">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {cookieRows.map((row, i) => (
                <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-4 align-top">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                      <span className="text-[12.5px] font-bold text-slate-900 leading-snug">{row.category}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top text-[12px] text-slate-500 leading-relaxed max-w-[260px]">
                    {row.purpose}
                  </td>
                  <td className="px-4 py-4 align-top text-[12px] text-slate-500 leading-relaxed max-w-[200px]">
                    {row.examples}
                  </td>
                  <td className="px-4 py-4 align-top text-[12px] text-slate-600 font-semibold whitespace-nowrap">
                    {row.duration}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: `${row.color}14`, color: row.color }}
                    >
                      {row.status === 'Always Active' && (
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: row.color }} />
                      )}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[13px] text-slate-500 !mt-5">
          We periodically audit this inventory and remove cookies that are no longer required. Changes are reflected
          in the &quot;Last Updated&quot; date on this page.
        </p>
      </LegalSection>

      <LegalSection id="sec-12" number="12" title="Managing Cookie Preferences">
        <p>
          You have full control over non-essential cookies through your browser settings. Blocking any category is
          straightforward — note that blocking strictly necessary cookies may affect core site functionality:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: <Chrome size={15} strokeWidth={2} />,
              name: 'Google Chrome',
              path: 'Settings → Privacy & Security → Third-party cookies',
            },
            {
              icon: <Flame size={15} strokeWidth={2} />,
              name: 'Mozilla Firefox',
              path: 'Settings → Privacy & Security → Cookies & Site Data',
            },
            {
              icon: <Compass size={15} strokeWidth={2} />,
              name: 'Apple Safari',
              path: 'Settings → Privacy → Manage Website Data',
            },
            {
              icon: <Globe size={15} strokeWidth={2} />,
              name: 'Microsoft Edge',
              path: 'Settings → Cookies & Site Permissions',
            },
          ].map((b) => (
            <div key={b.name} className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200/70 bg-slate-50/80">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200 text-brand shadow-xs">
                {b.icon}
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-slate-900 font-display leading-tight">{b.name}</p>
                <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5">{b.path}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="!mt-5">
          You may also opt out of Google Analytics tracking entirely using the official{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline inline-flex items-center gap-1"
          >
            Analytics opt-out browser add-on
            <ExternalLink size={11} strokeWidth={2.2} />
          </a>
          . Deleting cookies is equally effective — most browsers offer a clear-cookies action within the same
          settings panels shown above.
        </p>
      </LegalSection>

      <LegalSection id="sec-13" number="13" title="Third-Party Technologies">
        <p>
          The Site embeds or relies upon a small number of established third-party technologies — including Google
          Analytics for aggregate traffic measurement, Cloudflare for security and performance, and select media or
          video embeds within our insights. These parties may set their own cookies under their own policies.
        </p>
        <p>
          We apply a least-privilege approach to third-party integrations: each one must serve a defined purpose, and
          each is reviewed before deployment. We encourage you to consult the privacy policies of these providers
          through the links available when their content is presented.
        </p>
      </LegalSection>

      <LegalSection id="sec-14" number="14" title="Children’s Privacy">
        <p>
          The Site is intended for business audiences and is not directed at children under 16 years of age. We do
          not knowingly collect personal data from children. If you are a parent or guardian who believes a child has
          provided us with personal data, please contact us at{' '}
          <a href="mailto:info@intactic.net" className="text-brand font-semibold hover:underline">
            info@intactic.net
          </a>{' '}
          and we will delete such data promptly upon verification.
        </p>
      </LegalSection>

      <LegalSection id="sec-15" number="15" title="Changes to This Notice">
        <p>
          We may update this Notice to reflect changes in our data practices, technology stack, or legal
          requirements. Material changes will be signaled by an updated &quot;Last Updated&quot; date and, where
          appropriate, a revised version number and direct notice to affected individuals.
        </p>
        <p>
          We recommend reviewing this page periodically. Your continued use of the Site following any update
          constitutes acknowledgment of the revised Notice, except where additional consent is required by law — in
          which case we will request it explicitly.
        </p>
      </LegalSection>

      {/* ── Contact panel ── */}
      <ContactPanel
        heading="Contact Our Data Team"
        intro="For privacy questions, data subject requests, cookie concerns, or to exercise any right described in this Notice — reach our data governance desk through any channel below. Every request receives a documented response."
        emails={[
          { label: 'Privacy & Data Requests', email: 'info@intactic.net', note: 'DSARs, privacy queries, concerns' },
          { label: 'Products & Platform Data', email: 'products@intactic.net', note: 'Product data handling' },
        ]}
      />

      {/* ── Cross-link ── */}
      <CrossLink
        href="/terms-policies"
        kicker="Companion Document"
        title="Terms & Policies"
        desc="Review the contractual framework governing your use of intactic.net — intellectual property, acceptable use, payment terms, liability, and governing law."
        cta="View Terms & Policies"
      />
    </LegalLayout>
  );
}
