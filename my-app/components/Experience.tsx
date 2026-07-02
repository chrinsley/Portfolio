import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Unstop",
    period: "Sep 2024 - Present",
    highlights: [
      "Developed and maintained backend services using Django REST Framework",
      "Built automation workflows with n8n to streamline internal processes",
      "Collaborated in an Agile team using Jira and Git for version control",
      "Set up and managed CI/CD pipelines with Jenkins for automated deployments",
    ],
    tags: ["n8n", "REST APIs", "Git", "Jenkins", "Jira"],
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
        {/* Timeline line */}
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent"
          aria-hidden
        />

        {experiences.map((exp, i) => (
          <FadeIn key={exp.title} delay={i * 120}>
            <div className="relative pl-10 sm:pl-12 pb-4 last:pb-0">
              {/* Timeline dot */}
              <div
                className="timeline-dot absolute left-0 top-8"
                aria-hidden
              />

              {/* Card */}
              <div className="gradient-border group">
                <div className="glass-card rounded-2xl p-6 sm:p-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
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
