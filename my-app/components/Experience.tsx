import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Active Services Digital – Websites, eCommerce and SEO",
    location: "Port Louis, Mauritius · On-site",
    period: "Apr 2026 – Jul 2026",
    highlights: [
      "Built and maintained full-stack web applications end to end",
      "Delivered data-driven features including interactive dashboards and reporting tools",
      "Optimized database performance and query efficiency",
    ],
    tags: ["Full-Stack", "Dashboards", "Databases"],
  },
  {
    title: "Administrative Assistant · Part-time",
    company: "Wally Plush Toys",
    location: "Black River, Mauritius · On-site",
    period: "Feb 2025 – Jul 2025",
    highlights: [
      "Maintained digital and physical filing systems, updated databases, and typed documents",
      "Stocked office supplies and tracked deliveries",
      "Logged sales records with the exact calendar date of each transaction",
    ],
    tags: ["Administration", "Databases", "Operations"],
  },
  {
    title: "Logistics Coordinator · Part-time",
    company: "STAR KNITWEAR",
    location: "Beau Bassin, Plaines Wilhems, Mauritius · On-site",
    period: "Oct 2022 – Dec 2022",
    highlights: [
      "Delivered sensitive messages, legal documents, and small packages quickly and securely",
      "Packed and labeled warehouse items to prepare them for delivery drivers",
      "Assisted drivers with drop-offs of packages and goods to manufacturers and retailers",
    ],
    tags: ["Logistics", "Coordination", "Operations"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-4xl mx-auto px-6 py-32">
      <FadeIn>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">
            My professional journey and key experiences
          </p>
        </div>
      </FadeIn>

      <div className="relative">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent"
          aria-hidden
        />

        {experiences.map((exp, i) => (
          <FadeIn key={`${exp.company}-${exp.title}`} delay={i * 120}>
            <div className="relative pl-10 sm:pl-12 pb-10 last:pb-0">
              <div
                className="timeline-dot absolute left-0 top-8"
                aria-hidden
              />

              <div className="gradient-border group">
                <div className="glass-card rounded-2xl p-6 sm:p-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base shrink-0 sm:pt-1">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm mb-6">{exp.location}</p>

                  <ul className="space-y-3 mb-8">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-gray-400 leading-relaxed text-sm sm:text-base"
                      >
                        <span className="text-purple-400 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
