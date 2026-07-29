import FadeIn from "@/components/FadeIn";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    title: "Web & Frameworks",
    skills: [
      { name: "Django", icon: "🌿" },
      { name: "Django REST", icon: "🔗" },
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "EC2", icon: "🖥️" },
      { name: "Vercel", icon: "▲" },
      { name: "Railway", icon: "🚂" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "Machine Learning", icon: "🧠" },
      { name: "RAG Systems", icon: "📚" },
      { name: "Deep Learning", icon: "🧬" },
      { name: "LLMs", icon: "💬" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "GitLab", icon: "🦊" },
      { name: "GitLab CI/CD", icon: "🔄" },
      { name: "REST APIs", icon: "🔌" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 py-32">
      <div className="bg-orb w-[350px] h-[350px] bg-purple-600/10 top-1/2 left-[-15%] -translate-y-1/2 absolute pointer-events-none" />

      <FadeIn>
        <h2 className="section-heading text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-16 max-w-lg">
          Technologies and tools I use to build modern web apps and explore AI.
        </p>
      </FadeIn>

      <div className="space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <FadeIn delay={groupIndex * 40}>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                {group.title}
              </h3>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.skills.map((skill, i) => (
                <FadeIn key={skill.name} delay={groupIndex * 40 + i * 40}>
                  <div className="skill-pill glass-card rounded-xl p-5 text-center cursor-default group">
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
