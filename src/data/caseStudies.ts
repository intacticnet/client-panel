export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientIndustry: 'Fintech & Banking' | 'Logistics & Supply Chain' | 'Healthcare & Biotech' | 'Enterprise SaaS' | 'Defence & Security';
  clientLocation: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    metric: string;
    label: string;
    description: string;
  }[];
  heroImage: string;
  technologies: string[];
  deliverables: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  architectureHighlights: string[];
  featured?: boolean;
}

export function getTechLogo(tech: string): string {
  const normalized = tech.toLowerCase().trim();

  // Exact or word-boundary matches to avoid false positives
  // (e.g., 'go' should not match 'mongodb', 'logo', 'golang')
  if (normalized === 'go' || normalized === 'golang') {
    return 'https://cdn.simpleicons.org/go/00ADD8';
  }
  if (normalized.includes('kubernetes')) {
    return 'https://cdn.simpleicons.org/kubernetes/326CE5';
  }
  if (normalized.includes('kafka')) {
    return 'https://cdn.simpleicons.org/apachekafka/231F20';
  }
  if (normalized.includes('cockroach')) {
    return 'https://cdn.simpleicons.org/cockroachlabs/6933FF';
  }
  if (normalized.includes('grpc')) {
    return 'https://cdn.simpleicons.org/grpc/244C5A';
  }
  if (normalized.includes('python')) {
    return 'https://cdn.simpleicons.org/python/3776AB';
  }
  if (normalized.includes('rust')) {
    return 'https://cdn.simpleicons.org/rust/000000';
  }
  if (normalized.includes('redis')) {
    return 'https://cdn.simpleicons.org/redis/DC382D';
  }
  if (normalized.includes('react')) {
    return 'https://cdn.simpleicons.org/react/61DAFB';
  }
  if (normalized.includes('next')) {
    return 'https://cdn.simpleicons.org/nextdotjs/000000';
  }
  if (normalized.includes('postgres') || normalized.includes('timescale')) {
    return 'https://cdn.simpleicons.org/postgresql/4169E1';
  }
  if (normalized.includes('docker')) {
    return 'https://cdn.simpleicons.org/docker/2496ED';
  }
  if (normalized.includes('gcp') || normalized.includes('google cloud')) {
    return 'https://cdn.simpleicons.org/googlecloud/4285F4';
  }
  if (normalized.includes('aws') || normalized.includes('graviton')) {
    return 'https://cdn.simpleicons.org/amazonwebservices/232F3E';
  }
  if (normalized.includes('tailwind')) {
    return 'https://cdn.simpleicons.org/tailwindcss/06B6D4';
  }
  if (normalized.includes('graphql')) {
    return 'https://cdn.simpleicons.org/graphql/E10098';
  }
  if (normalized.includes('typescript')) {
    return 'https://cdn.simpleicons.org/typescript/3178C6';
  }
  if (normalized.includes('c++')) {
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
  }
  if (normalized.includes('terraform')) {
    return 'https://cdn.simpleicons.org/terraform/844FBA';
  }
  if (normalized.includes('fastapi')) {
    return 'https://cdn.simpleicons.org/fastapi/009688';
  }
  if (normalized.includes('node')) {
    return 'https://cdn.simpleicons.org/nodedotjs/5FA04E';
  }
  if (normalized.includes('mapbox')) {
    return 'https://cdn.simpleicons.org/mapbox/000000';
  }
  if (normalized.includes('webrtc')) {
    return 'https://cdn.simpleicons.org/webrtc/333333';
  }
  if (normalized.includes('stripe')) {
    return 'https://cdn.simpleicons.org/stripe/635BFF';
  }
  if (normalized.includes('webassembly') || normalized.includes('wasm')) {
    return 'https://cdn.simpleicons.org/webassembly/654FF0';
  }

  // Fallback high-tech chip icon
  return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'apexfin-cloud-core-banking',
    title: 'Cloud-Native Core Banking Modernization: Scaled to 120,000 TPS with Zero-Downtime Migration',
    client: 'ApexFin International',
    clientIndustry: 'Fintech & Banking',
    clientLocation: 'Singapore & London',
    summary:
      'Re-architected a legacy mainframe banking pipeline into an event-driven, multi-region Kubernetes microservices topology capable of processing $4.2B daily transactional volume.',
    challenge:
      'ApexFin was constrained by a 14-year-old monolithic ledger architecture that suffered 3.2-hour reconciliation delays and high licensing overhead. Cross-border settlement latency was eroding competitive edge.',
    solution:
      'Intactic deployed an active-active event-sourcing engine built with Go, Apache Kafka, and CockroachDB. We designed zero-loss state synchronization, hybrid HSM cryptographic signing, and automated SOC-2 auditing.',
    impactMetrics: [
      { metric: '120k', label: 'Peak TPS', description: 'Transaction throughput sustained during high-frequency volatility.' },
      { metric: '99.999%', label: 'Production SLA', description: 'Zero unscheduled downtime across 8 global regions over 18 months.' },
      { metric: '-78%', label: 'Infrastructure Cost', description: 'Saved annually by retiring proprietary legacy mainframe licensing.' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=75',
    technologies: ['Go', 'Kubernetes', 'Apache Kafka', 'CockroachDB', 'gRPC', 'AWS Graviton', 'Terraform'],
    deliverables: [
      'Event-Driven Microservices Engine',
      'Multi-Region Distributed Database Mesh',
      'Real-Time Anti-Fraud Scoring Cluster',
      'PCI-DSS & ISO-27001 Compliance Pipeline',
    ],
    timeline: '9 Months (Phased Rollout)',
    testimonial: {
      quote:
        'Intactic engineered an architectural marvel for our core ledger. Moving $4.2 billion daily without a second of downtime is testimony to their world-class engineering discipline.',
      author: 'David Van Houten',
      role: 'Chief Technology Officer',
      company: 'ApexFin Group',
    },
    architectureHighlights: [
      'CQRS architecture segregating high-throughput writes from low-latency analytical queries.',
      'Hardware security module (HSM) automated key rotation via Vault clusters.',
      'Automated chaos engineering suites running continuous regression simulations in staging.',
    ],
    featured: true,
  },
  {
    slug: 'omnilogistics-autonomous-fleet-ai',
    title: 'Autonomous Multi-Agent Fleet Dispatch: 82% Manual Triage Reduction across 14,000 Vehicles',
    client: 'OmniLogistics Global',
    clientIndustry: 'Logistics & Supply Chain',
    clientLocation: 'Rotterdam & Chicago',
    summary:
      'Engineered an edge-synchronized multi-agent dispatch intelligence platform utilizing speculative constraint solvers to dynamically route overland freight and optimize container turnover.',
    challenge:
      'Static route planning tools failed to adapt to weather emergencies, customs congestions, and carrier cancellations, requiring over 200 dispatchers to work 24/7 manual phone triage.',
    solution:
      'Intactic designed a real-time reactive telemetry pipeline streaming GPS, OBD-II telemetry, and localized port APIs into an ensemble of lightweight neural optimization agents.',
    impactMetrics: [
      { metric: '82%', label: 'Triage Reduction', description: 'Autonomous dispatch resolutions without human dispatcher intervention.' },
      { metric: '$18.4M', label: 'Fuel Saved', description: 'Annual fuel expenditure reduction achieved in the first 12 months.' },
      { metric: '< 400ms', label: 'Re-routing Speed', description: 'Dynamic rerouting calculation upon unexpected road anomalies.' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=75',
    technologies: ['Python', 'Rust', 'TimescaleDB', 'Redis Cluster', 'React', 'Mapbox GL', 'FastAPI'],
    deliverables: [
      'Predictive Telemetry Ingestion Hub',
      'Agentic Dispatch Engine',
      'Real-Time Driver Mobility Mobile App',
      'Executive Operations Control Room Dashboard',
    ],
    timeline: '6 Months',
    testimonial: {
      quote:
        'The operational velocity shift was immediate. Intactic didn’t just write software; they fundamentally upgraded how our global shipping network functions.',
      author: 'Elena Rostova',
      role: 'Global VP of Supply Chain Ops',
      company: 'OmniLogistics',
    },
    architectureHighlights: [
      'Edge CRDT synchronization on driver mobile hardware ensuring 0% data loss in offline freight yards.',
      'Geospatial indexing with H3 hex algorithms processing 45,000 coordinate pings per second.',
    ],
    featured: true,
  },
  {
    slug: 'healthpulse-realtime-telehealth-platform',
    title: 'HIPAA-Compliant Real-Time Clinical Diagnostics Platform Serving 3.1M+ Active Patients',
    client: 'HealthPulse Systems',
    clientIndustry: 'Healthcare & Biotech',
    clientLocation: 'Boston, MA',
    summary:
      'Built an end-to-end encrypted WebRTC telehealth consultation and AI clinical documentation suite with zero packet loss across mobile networks.',
    challenge:
      'Legacy video providers suffered frequent connection drops in rural areas, while clinical documentation burden caused physician burnout, averaging 22 minutes per patient encounter.',
    solution:
      'Engineered custom adaptive WebRTC SFU relays with sub-100ms latency, coupled with on-device speech-to-clinical-note LLM inference satisfying rigorous HIPAA audit trails.',
    impactMetrics: [
      { metric: '3.1M+', label: 'Active Patients', description: 'Managed securely across 42 medical specialties.' },
      { metric: '-68%', label: 'Documentation Time', description: 'Physicians reduced charting overhead from 22 mins to 7 mins per visit.' },
      { metric: '99.98%', label: 'Call Reliability', description: 'Zero connection drops even on degraded 3G cellular signals.' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=75',
    technologies: ['TypeScript', 'Next.js', 'WebRTC', 'Go Media Server', 'PostgreSQL', 'Docker', 'GCP'],
    deliverables: [
      'Encrypted Real-Time Video SFU Architecture',
      'AI Clinical Scribe & EHR Sync Engine',
      'Cross-Platform Patient Portal (iOS, Android, Web)',
      'HIPAA & HITECH Compliance Certifications',
    ],
    timeline: '7 Months',
    testimonial: {
      quote:
        'Intactic delivered an airtight, ultra-reliable telehealth engine that our doctors and patients genuinely love using every single day.',
      author: 'Dr. Marcus Vance',
      role: 'Chief Medical Information Officer',
      company: 'HealthPulse',
    },
    architectureHighlights: [
      'End-to-end SRTP encryption with ephemeral symmetric key rotation per medical session.',
      'Local WebAssembly audio noise cancellation models reducing background clinic distortion.',
    ],
  },
  {
    slug: 'hyperscale-ecommerce-sub-50ms',
    title: 'Sub-50ms Micro-Frontend Retail Architecture: 185% Mobile Conversion Lift for Multi-Brand Enterprise',
    client: 'Vanguard Retail Holdings',
    clientIndustry: 'Enterprise SaaS',
    clientLocation: 'New York & Dubai',
    summary:
      'Decoupled a monolithic Magento stack into an edge-cached Next.js 15 micro-frontend architecture processing 85,000 concurrent Black Friday shoppers.',
    challenge:
      'Average mobile page load time was 4.8 seconds. Slow checkout flows caused a 42% cart abandonment rate and multiple platform outages during seasonal promotional surges.',
    solution:
      'Intactic engineered headless composable storefronts deployed on global edge nodes with predictive prefetching, instant cart state syncing, and headless checkout orchestration.',
    impactMetrics: [
      { metric: '38ms', label: 'Global TTFB', description: 'Average server response time measured across 40 global CDN edges.' },
      { metric: '+185%', label: 'Mobile Conversion', description: 'Increase in checkout completion rate within the first 60 days.' },
      { metric: '$64M+', label: 'GMV Processed', description: 'Flawlessly handled during peak flash-sale weekend with 0 errors.' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75',
    technologies: ['Next.js 15', 'Tailwind CSS', 'GraphQL', 'Stripe Elements', 'Edge KV', 'Node.js', 'Vercel'],
    deliverables: [
      'Headless Micro-Frontend Architecture',
      'Global Edge Multi-Storefront CDN',
      'Unified Brand Design System in Tailwind',
      'Dynamic Inventory & Pricing Pipeline',
    ],
    timeline: '5 Months',
    testimonial: {
      quote:
        'Our site speed went from lagging behind to setting the industry standard. Intactic transformed our digital flagship into a high-performance revenue engine.',
      author: 'Sophia Sterling',
      role: 'Executive VP of Digital Commerce',
      company: 'Vanguard Retail',
    },
    architectureHighlights: [
      'Server-driven UI rendering with dynamic JSON schema configuration for global marketing squads.',
      'Sub-millisecond cart reconciliation via edge key-value distributed memory.',
    ],
  },
  {
    slug: 'securevault-zero-trust-telemetry',
    title: 'Zero-Trust Telemetry & Lattice Post-Quantum Security for Classified Defence Infrastructure',
    client: 'SecureVault Aerospace',
    clientIndustry: 'Defence & Security',
    clientLocation: 'Geneva & Washington, D.C.',
    summary:
      'Architected air-gapped, post-quantum cryptographic telemetry pipelines utilizing Kyber-768 lattice encryption for satellite flight systems and industrial SCADA meshes.',
    challenge:
      'Legacy RSA-2048 encryption was identified as vulnerable to emerging quantum decryption intercepts. The client required military-grade tamper resistance without adding transmission latency.',
    solution:
      'Deployed hybrid lattice cryptographic handshakes, immutable Merkle DAG audit ledgers, and zero-trust service mesh validation at micro-second hardware execution boundaries.',
    impactMetrics: [
      { metric: '0.0ms', label: 'Cryptographic Overhead', description: 'Zero perceptible latency penalty added to real-time flight telemetry.' },
      { metric: '100%', label: 'Quantum-Resistant', description: 'Fully compliant with NIST post-quantum standardizations (FIPS 203/204).' },
      { metric: 'Tier 4', label: 'Air-Gapped Isolation', description: 'Deployed within fully isolated sovereign enclave datacenters.' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=75',
    technologies: ['Rust', 'C++', 'Lattice ML-KEM', 'WireGuard', 'eBPF', 'FreeBSD', 'Kubernetes'],
    deliverables: [
      'Post-Quantum Ingress / Egress Gateway',
      'Immutable Merkle Ledger Telemetry Store',
      'Air-Gapped CI/CD Binary Signing Hub',
      'Real-Time Intrusion Detection Enclave',
    ],
    timeline: '8 Months',
    testimonial: {
      quote:
        'The depth of engineering rigor Intactic demonstrated in post-quantum cryptography is unmatched. They operate at the cutting edge of sovereign security.',
      author: 'Col. Arthur Pendelton (Ret.)',
      role: 'Director of Cyber Architecture',
      company: 'SecureVault Enclave',
    },
    architectureHighlights: [
      'Hardware-accelerated AVX-512 lattice polynomial multiplications for microsecond cryptographic signing.',
      'Kernel-level eBPF packet inspection filtering unauthorized subnet egress attempts.',
    ],
  },
];
