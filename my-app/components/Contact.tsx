import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/site";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: `github.com/${site.githubUsername}`,
    href: site.github,
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: site.linkedinDisplay,
    href: site.linkedin,
    icon: "🔗",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-32">
      <div className="bg-orb w-[400px] h-[400px] bg-cyan-500/10 bottom-0 right-[-10%] absolute pointer-events-none" />

      <FadeIn>
        <h2 className="section-heading text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-16 max-w-lg">
          Feel free to reach out if you&apos;d like to collaborate or just say
          hello.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-3 gap-4">
        {contacts.map((contact, i) => (
          <FadeIn key={contact.label} delay={i * 100}>
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="gradient-border group block h-full"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </span>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {contact.label}
                </p>
                <p className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors break-all">
                  {contact.value}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
