export interface PortfolioResult {
  label: string
  value: string
}

export interface PortfolioProject {
  slug: string
  title: string
  category: string
  client: string
  summary: string
  challenge: string
  solution: string
  image: string
  imageAlt: string
  tags: string[],
  livePreview: string
  technologies: string[]
}

export const portfolioProjects: PortfolioProject[] = [
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
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}