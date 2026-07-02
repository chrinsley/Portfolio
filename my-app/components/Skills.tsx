import FadeIn from "@/components/FadeIn";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌿" },
  { name: "Django REST", icon: "🔗" },
  { name: "Flutter", icon: "📱" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "SQL", icon: "🗄️" },
  { name: "Android Studio", icon: "🤖" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 py-32">
      <div className="bg-orb w-[350px] h-[350px] bg-purple-600/10 top-1/2 left-[-15%] -translate-y-1/2 absolute pointer-events-none" />

      <FadeIn>
        <h2 className="section-heading text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-16 max-w-lg">
          Technologies and tools I use to bring ideas to life.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 60}>
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
    </section>
  );
}
