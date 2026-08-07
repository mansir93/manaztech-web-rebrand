import {
  Code2,
  Smartphone,
  Compass,
  Cloud,
  Workflow,
  RefreshCw,
  type LucideIcon,
} from "lucide-react"

export interface ServiceFeature {
  title: string
  body: string
}

export interface Service {
  slug: string
  title: string
  /** Short line shown on the homepage card */
  tagline: string
  /** Longer intro paragraph shown at the top of the detail page */
  summary: string
  icon: LucideIcon
  tags: string[]
  image: string
  imageAlt: string
  /** Rich content for the detail page */
  overview: string[]
  features: ServiceFeature[]
  process: string[]
  isFeatured: boolean
  technologies: string[]
}

export const services: Service[] = [
  {
    slug: "software-development",
    isFeatured: true,
    title: "Software Development",
    tagline:
      "Custom software built with modern technologies and best practices.",
    summary:
      "From MVPs to enterprise applications, we design and ship scalable, maintainable software tailored to how your business actually works not a generic template stretched to fit.",
    icon: Code2,
    tags: ["React", "Node.js", "Python"],
    image: "/services/software-development.jpg",
    imageAlt: "Developers reviewing custom software architecture on screen",
    overview: [
      "Every product we build starts with your workflow, not a boilerplate. We map the real business problem, define a lean scope, and architect a system that can grow without a rewrite.",
      "We favor proven, well-supported technology over novelty for its own sake which means faster onboarding for your future team and fewer surprises in production.",
    ],
    features: [
      {
        title: "Custom architecture",
        body: "Systems designed around your actual data model and business logic, not a one-size-fits-all template.",
      },
      {
        title: "Maintainable codebases",
        body: "Typed, tested, and documented code that a new engineer can pick up without a week of onboarding.",
      },
      {
        title: "MVP to enterprise",
        body: "We build for where you are today and design so scaling later doesn't require starting over.",
      },
    ],
    process: [
      "Requirements & scope workshop",
      "Technical architecture & data modeling",
      "Iterative development with weekly demos",
      "QA, hardening, and handover documentation",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
  },
  {
    slug: "mobile-web-apps",
    isFeatured: true,
    title: "Mobile & Web Apps",
    tagline:
      "Responsive web and native mobile apps with exceptional user experience.",
    summary:
      "Cross-platform products that feel native wherever they run one codebase, consistent behavior, and interfaces designed for how people actually hold and tap their devices.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "PWA"],
    image: "/services/mobile-web-apps.png",
    imageAlt: "Mobile app interface displayed across phone and tablet screens",
    overview: [
      "We build for the device your customers actually use which today means a mobile-first web app or a native app, often both, sharing as much logic as sensibly possible.",
      "Every screen is designed against real usage patterns: thumb reach, load time on patchy connections, and offline states that don't just show a spinner.",
    ],
    features: [
      {
        title: "Cross-platform efficiency",
        body: "One shared core across iOS, Android, and web where it makes sense, without sacrificing platform feel.",
      },
      {
        title: "Offline-first where it matters",
        body: "Apps that stay useful on a bad connection,syncing gracefully once one is available.",
      },
      {
        title: "Performance budgets",
        body: "Real load-time targets set and measured from day one, not bolted on after launch.",
      },
    ],
    process: [
      "UX research & wireframes",
      "Design system & prototype",
      "Native/cross-platform build",
      "Store submission & rollout support",
    ],
    technologies: ["React Native", "Next.js PWA", "Firebase", "MongoDB", "PostgreSQL"],
  },
  {
    slug: "it-consulting",
    isFeatured: false,
    title: "IT Consulting",
    tagline: "Strategic technology guidance for informed decisions.",
    summary:
      "Before you commit budget to a stack or a rebuild, get an outside technical read: what will actually hold up, what's overkill, and what's quietly a liability.",
    icon: Compass,
    tags: ["Strategy", "Architecture", "Planning"],
    image: "/services/it-consulting.png",
    imageAlt: "Consultant presenting a technology roadmap on a whiteboard",
    overview: [
      "We act as the technical co-founder in the room when you don't have one on staff reviewing existing systems, sizing new ones, and giving a direct opinion, not a vendor pitch.",
      "Engagements are scoped tightly: a stack selection, an architecture review, or a full technology roadmap, delivered as a document your team can act on immediately.",
    ],
    features: [
      {
        title: "Vendor-neutral advice",
        body: "We recommend what fits your constraints, not what we happen to sell.",
      },
      {
        title: "Architecture review",
        body: "A clear-eyed audit of what's working, what's fragile, and what to fix first.",
      },
      {
        title: "Technology roadmapping",
        body: "A prioritized plan tied to business goals, not just a wishlist of upgrades.",
      },
    ],
    process: [
      "Discovery interviews & systems audit",
      "Findings & risk assessment",
      "Roadmap with prioritized recommendations",
      "Optional hands-on implementation support",
    ],
    technologies: ["AWS", "Azure", "GCP", "Architecture Diagramming"],
  },
  {
    slug: "cloud-solutions",
    isFeatured: true,
    title: "Cloud Solutions",
    tagline: "Scalable infrastructure and migration services.",
    summary:
      "We design and migrate cloud infrastructure that scales with real traffic patterns, secured and monitored from day one on AWS, Azure, or GCP.",
    icon: Cloud,
    tags: ["AWS", "Azure", "GCP"],
    image: "/services/cloud-solutions.png",
    imageAlt: "Cloud infrastructure dashboard showing server regions",
    overview: [
      "Whether you're moving off a single server or re-architecting for real scale, we handle the migration path so there's no surprise downtime and no guesswork about cost.",
      "Security and observability are built into the infrastructure from the start, not added after the first incident.",
    ],
    features: [
      {
        title: "Migration without downtime",
        body: "Phased cutovers with rollback plans, so your users never notice the move.",
      },
      {
        title: "Cost-aware architecture",
        body: "Infrastructure sized to actual load, with monitoring that flags waste early.",
      },
      {
        title: "Security by default",
        body: "Least-privilege access, encrypted data paths, and audit logging from launch.",
      },
    ],
    process: [
      "Infrastructure audit & cost modeling",
      "Migration plan & staging environment",
      "Phased cutover with monitoring",
      "Post-migration optimization",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    slug: "automation",
    isFeatured: false,
    title: "Automation",
    tagline: "Streamline operations with intelligent automation.",
    summary:
      "We find the manual, repetitive steps quietly costing your team hours every week and replace them with reliable, monitored automation — not a fragile script nobody understands.",
    icon: Workflow,
    tags: ["AI/ML", "RPA", "Workflows"],
    image: "/services/automation.png",
    imageAlt: "Workflow automation diagram with connected process nodes",
    overview: [
      "Automation only pays off if it's trustworthy. We build workflows with logging, alerting, and clear failure states, so when something does go wrong, someone finds out immediately not a customer.",
      "Where AI genuinely helps document processing, classification, summarization we use it. Where a plain rule-based workflow is more reliable, we use that instead.",
    ],
    features: [
      {
        title: "Process mapping first",
        body: "We document the current manual process before automating it, so nothing gets lost in translation.",
      },
      {
        title: "Monitored workflows",
        body: "Every automation ships with logging and alerts, not a black box you hope keeps running.",
      },
      {
        title: "AI where it earns its keep",
        body: "Machine learning applied only where it measurably beats a simpler rule-based approach.",
      },
    ],
    process: [
      "Process audit & opportunity mapping",
      "Workflow design & tooling selection",
      "Build, test, and monitored rollout",
      "Ongoing tuning based on real usage",
    ],
    technologies: ["Python", "n8n", "Zapier", "OpenAI API"],
  },
  {
    slug: "digital-transformation",
    isFeatured: false,
    title: "Digital Transformation",
    tagline: "End-to-end modernization for legacy systems.",
    summary:
      "We help teams move off legacy systems in stages modernizing what's business-critical first, integrating along the way, rather than a risky big-bang rewrite.",
    icon: RefreshCw,
    tags: ["Migration", "Modernization", "Integration"],
    image: "/services/digital-transformation.png",
    imageAlt: "Team reviewing a system modernization roadmap on a screen",
    overview: [
      "Legacy systems rarely need to be thrown out entirely. We identify what's genuinely holding your business back, and modernize in a sequence that keeps operations running throughout.",
      "Integration is treated as a first-class concern from the start new systems need to talk to what you're keeping, not replace everything at once.",
    ],
    features: [
      {
        title: "Staged migration",
        body: "Modernize in phases tied to business priority, not a single high-risk cutover.",
      },
      {
        title: "System integration",
        body: "New and legacy systems connected cleanly, with no duplicated data entry.",
      },
      {
        title: "Change management support",
        body: "Documentation and training so your team adopts the new system confidently.",
      },
    ],
    process: [
      "Legacy systems assessment",
      "Modernization roadmap & sequencing",
      "Phased build & integration",
      "Training & handover",
    ],
    technologies: ["Node.js", "REST/GraphQL APIs", "PostgreSQL", "Docker"],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}