import Contact from '@/components/blocks/Contact';
import { Metadata } from 'next';

const SITE_URL = "https://manaztech.com"
const PAGE_TITLE = "Contact"
const PAGE_DESCRIPTION =
  "Have a project in mind? Get in touch with Manaz Technologies & Solutions for custom software, web and mobile apps, cloud solutions, automation, and IT consulting.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
  },
}

export default function page() {
  return (
    <section>
        <Contact />
    </section>
  )
}
