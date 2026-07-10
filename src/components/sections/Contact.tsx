import { useState } from 'react'
import type { FormEvent } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { siteConfig } from '#/data/portfolio'
import { SectionWrapper } from '#/components/layout/SectionWrapper'
import { SectionHeading } from '#/components/ui/SectionHeading'
import { Button } from '#/components/ui/Button'
import { Reveal } from '#/components/ui/Reveal'

type FormState = {
  name: string
  email: string
  message: string
}

const initialForm: FormState = { name: '', email: '', message: '' }

const socialLinks = [
  {
    label: 'GitHub',
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
] as const

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <SectionWrapper id="contact" ariaLabelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <Reveal>
          <div>
            <SectionHeading
              label="// contact"
              title="Get In Touch"
              description="Have a project in mind or want to connect? I'd love to hear from you."
              titleId="contact-heading"
              className="mb-8 md:mb-10"
            />

            <p className="text-base leading-relaxed text-muted-foreground md:leading-8">
              Whether you have a question, a project idea, or just want to say hello — feel free
              to reach out. I typically respond within 1–2 business days.
            </p>

            <ul className="mt-8 space-y-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-border bg-surface shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[var(--shadow-glow)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="surface-card flex h-full flex-col space-y-5 p-6 md:p-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="contact-field w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="contact-field w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="contact-field contact-message min-h-[8rem] flex-1 resize-none border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-300"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              <Send size={16} aria-hidden="true" />
              Send Message
            </Button>

            {status === 'success' && (
              <p className="text-sm text-accent" role="status">
                Your email client should open shortly. Thank you for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </SectionWrapper>
  )
}
