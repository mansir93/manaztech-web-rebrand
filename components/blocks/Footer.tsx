import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { footerNav } from "@/lib/footerNav";
import Mark from "../Mark";
import { services } from "@/lib/services-data";
import { nav } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2" aria-label="ManazTech — home">
              <Mark />
              <span className="text-lg font-semibold tracking-tight">
                Manaz<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground text-pretty">
              Innovate. Transform. Deliver. Your trusted partner in digital
              transformation.
            </p>

            <ul className="mt-6 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@manaztechnologies.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Mail className="size-4 shrink-0" />
                  hello@manaztechnologies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233241450884"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-4 shrink-0" />
                  +233 241 450 884
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0" />
                New Madina, Estate
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <nav aria-label="Services" className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`services/${item.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold">Industries</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.industries.map((label) => (
                <li key={label} className="text-sm text-muted-foreground">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} Manaz Technologies & Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}