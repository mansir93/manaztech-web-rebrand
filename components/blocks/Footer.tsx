import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerNav } from "@/lib/footerNav";
import Mark from "../Mark";
import { services } from "@/lib/services-data";
import { nav } from "@/lib/nav";
import { Button } from "../ui/button";
import type { SVGProps } from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="ManazTech — home"
            >
              <Mark />
              <span className="text-lg font-semibold tracking-tight">
                Manaz<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-3 max-w-xs text-sm text-pretty">
              Innovate. Transform. Deliver. Your trusted partner in digital
              transformation.
            </p>

            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@manaztechnologies.com"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  <Mail className="size-4 shrink-0" />
                  hello@manaztechnologies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233241450884"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  <Phone className="size-4 shrink-0" />
                  +233 241 450 884
                </a>
              </li>
              <li className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
                <MapPin className="size-4 shrink-0" />
                New Madina, Estate
              </li>
              <li>
                <a
                  href={
                    "https://www.linkedin.com/company/manaz-technologies-and-solutions/posts/?feedView=all"
                  }
                  target="_blank"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  <LinkedIn className="size-4 shrink-0" />
                  LinkedIn
                </a>
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
                    className="text-muted-foreground hover:text-primary text-sm"
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
                    className="text-muted-foreground hover:text-primary text-sm"
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
                <li key={label} className="text-muted-foreground text-sm">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row sm:justify-between">
          <p className="text-muted-foreground text-xs">
            © {year} Manaz Technologies & Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="#0A66C2"
    />
  </svg>
);

export { LinkedIn };
