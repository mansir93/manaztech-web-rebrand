import type { Metadata } from "next"
import { services } from "@/lib/services-data"
import ServiceCard from "@/components/services/ServiceCard";

const SITE_URL = "https://manaztech.com"
const PAGE_TITLE = "Services"
const PAGE_DESCRIPTION =
  "Custom software development, mobile & web apps, cloud solutions, IT consulting, automation, and digital transformation — explore what Manaz Technologies & Solutions can build for you."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
  },
}

export default function ServicesPage() {
  return (
    <section>
      <div>
        {/* Context */}
        <header className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-primary">What We Do</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Services & Solutions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
              {PAGE_DESCRIPTION}
            </p>
          </div>
        </header>

        {/* Services */}
        <div className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <li key={service.slug}>
                  <ServiceCard service={service} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

