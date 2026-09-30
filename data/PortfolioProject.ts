export interface PortfolioResult {
  label: string;
  value: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  tags: string[];
  livePreview: string;
  technologies: string[];
  // Optional "what shipped" facts. Only add entries that are verifiable against the
  // live product — do not publish user counts, rankings or revenue figures we
  // cannot substantiate.
  results?: PortfolioResult[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "duodemia",
    livePreview: "https://www.duodemia.com",
    title: "DuoDemia",
    category: "AI study platform for university students",
    client: "DuoDemia — designed, built and shipped in-house by ManazTech",
    summary:
      "A multi-app study platform that turns a student's own lecture notes, slides and past questions into summaries, spaced-repetition flashcards, topic quizzes and timed mock exams — shipping as a web app, an Android app, an LMS and a real-time community hub.",
    challenge:
      "University students in Ghana revise from whatever they can find: a pile of lecture PDFs, handwritten notes, and a screenshot of a senior's past questions. Exams then arrive in dense clusters with barely a few weeks between them, so time spent re-reading material you already understand is time lost. Generic AI chatbots appear to solve this, but they answer confidently from the open internet rather than from the student's actual course material — which makes them worse than useless when the answer is wrong, because a student has no way to tell. Most existing study apps are priced in dollars, assume the student has a long exam runway, and were not built around a compressed semester calendar or local pricing.",
    solution:
      "We built DuoDemia as a product suite rather than a single app: a Next.js web app, an Android app on Expo, an LMS for course material, and a real-time community hub for study groups, all backed by an Express and MongoDB API with Socket.IO for live sessions and leaderboards. The core move is grounding. Every uploaded document is chunked and indexed, and the AI tutor retrieves only the most relevant passages from the student's own files to answer a question — and explicitly tells them when their material does not support an answer, rather than inventing one. Each document then becomes a revision pack: a short summary, the key concepts, likely exam questions, spaced-repetition flashcards and a practice quiz, with performance tracked topic by topic so the weakness map points at what to revise next. On the growth side we ran a static-export marketing site with full structured data, per-university landing pages, and a published study-guides hub, so organic search brings students in rather than paid acquisition.",
    image: "/portfolio/duodemia.png",
    imageAlt:
      "DuoDemia dashboard showing a student's courses, study streak and XP progress",
    tags: ["Next.js", "React Native", "MongoDB", "Socket.IO"],
    technologies: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "Express",
      "MongoDB",
      "Socket.IO",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Zod",
    ],
    results: [
      { label: "Platforms shipped", value: "Web app + Android on Google Play" },
      { label: "University landing pages", value: "6 Ghanaian universities" },
      { label: "Study guides published", value: "6 long-form guides" },
      { label: "Free plan", value: "No card required" },
      {
        label: "AI grounding",
        value: "Answers only from the student's own uploads",
      },
      { label: "Student documents", value: "Never used to train AI models" },
    ],
  },
  {
    slug: "ecommerce-platform",
    livePreview: "#",
    title: "E-Commerce Platform",
    category: "Full-stack marketplace solution",
    client: "Retail marketplace startup",
    summary:
      "A scalable e-commerce platform with real-time inventory management, payment processing, and an advanced analytics dashboard built for a fast-growing marketplace.",
    challenge:
      "The client's existing platform couldn't handle traffic spikes during promotional events, and inventory counts frequently went out of sync between the storefront and warehouse, leading to overselling.",
    solution:
      "We rebuilt the platform on a horizontally scalable architecture with a dedicated inventory service, real-time stock sync via webhooks, and a caching layer in front of the product catalog to absorb traffic spikes without touching the database on every request.",
    image: "/portfolio/ecommerce-platform.png",
    imageAlt:
      "E-commerce platform dashboard showing product inventory and sales analytics",
    tags: ["React", "Node.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Stripe"],
  },
  {
    slug: "healthcare-management-system",
    livePreview: "#",
    title: "Healthcare Management System",
    category: "Digital transformation for healthcare",
    client: "Multi-clinic healthcare provider",
    summary:
      "A comprehensive patient management system with appointment scheduling, electronic health records, and telemedicine capabilities for a multi-clinic provider.",
    challenge:
      "Patient records were fragmented across paper files and a legacy desktop system that didn't communicate between the client's five clinic locations, making it impossible to get a full patient history at the point of care.",
    solution:
      "We built a centralized, HIPAA-conscious patient records system accessible across all locations, with role-based access control, appointment scheduling with automated reminders, and an integrated telemedicine module for remote consultations.",
    image: "/portfolio/healthcare-management-system.png",
    imageAlt:
      "Healthcare management system interface showing patient records and scheduling",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "WebRTC"],
  },
  {
    slug: "educational-platform",
    livePreview: "#",
    title: "Educational Platform",
    category: "Learning management system",
    client: "Remote-first education provider",
    summary:
      "An interactive learning platform with course management, progress tracking, and collaborative tools built for modern, remote-first education.",
    challenge:
      "The client was running courses through a patchwork of spreadsheets, video calls, and email — with no single place for students to track progress or for instructors to see who was falling behind.",
    solution:
      "We built a purpose-built LMS with structured course modules, automatic progress tracking, and collaborative tools (discussion threads, live sessions) so instructors could see engagement in real time rather than finding out at the end of a course.",
    image: "/portfolio/educational-platform.png",
    imageAlt:
      "Educational platform interface showing course modules and student progress",
    tags: ["Next.js", "Express", "MySQL"],
    technologies: ["Next.js", "Express", "MySQL", "Socket.io"],
  },

  // Add more projects as needed
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
