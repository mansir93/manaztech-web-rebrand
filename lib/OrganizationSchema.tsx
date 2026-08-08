const SITE_URL = "https://manaztech.com"

export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manaz Technologies & Solutions",
    alternateName: "ManazTech",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Custom software development, mobile apps, cloud solutions, and digital transformation services for startups and enterprises.",
    email: "hello@manaztechnologies.com",
    telephone: "+233241450884",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Madina, Estate",
      addressCountry: "GH",
    },
    sameAs: [
      // add real social profile URLs here, e.g.
      // "https://www.linkedin.com/company/manaztech",
      // "https://twitter.com/manaztech",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}