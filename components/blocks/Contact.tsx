import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const FORM_ENDPOINT = "https://formsubmit.co/hello@manaztechnologies.com"

const contactInfo = [
  {
    icon: Mail,
    label: "Emails",
    lines: ["hello@manaztechnologies.com", "manaztechnology@gmail.com"],
    hrefPrefix: "mailto:",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+233 240 960 422", "+233 241 450 884"],
    hrefPrefix: "tel:",
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["New Madina, Estate"],
    hrefPrefix: null,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Get In Touch</p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Contact & Call to Action
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Ready to transform your business with innovative technology
            solutions? Let&apos;s discuss your project and bring your vision to
            life.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Info column*/}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Let&apos;s build your next big idea</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                Whether you&apos;re a startup with a groundbreaking concept or an
                enterprise ready for digital transformation, we&apos;re here to
                make it happen.
              </p>

              <dl className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="mt-1 space-y-0.5">
                        {item.lines.map((line) =>
                          item.hrefPrefix ? (
                            <a
                              key={line}
                              href={`${item.hrefPrefix}${line.replace(/\s+/g, "")}`}
                              className="block text-sm font-medium hover:text-primary"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm font-medium">
                              {line}
                            </p>
                          )
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/*Form column */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Send Us a Message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your project and we&apos;ll get back to you within
                24 hours.
              </p>

              <form
                action={FORM_ENDPOINT}
                method="POST"
                className="mt-6 space-y-5"
              >
                {/* FormSubmit configuration — no account/API key needed */}
                <input type="hidden" name="_subject" value="New project inquiry — ManazTech website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                {/* Honeypot field: bots fill this in, real users never see it */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" name="First Name" required autoComplete="given-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" name="Last Name" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="Email" type="email" required autoComplete="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="Company" autoComplete="organization" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Project details</Label>
                  <Textarea
                    id="details"
                    name="Project Details"
                    required
                    rows={5}
                    placeholder="Tell us a bit about what you're looking to build..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto group">
                  Send Message
                  <Send className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}