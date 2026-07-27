import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/site";

const projects = [
  {
    title: "Library Management System",
    description:
      "A Django application for managing books and borrowers with full CRUD operations.",
    tags: ["Django", "Python", "SQL"],
    gradient: "from-purple-500/20 to-indigo-500/20",
    codeUrl: `https://github.com/${site.githubUsername}/library-management`,
    demoUrl: "https://your-demo-url.com/library",
  },
  {
    title: "Football Management System",
    description:
      "Manage players, fixtures, and team statistics with an intuitive dashboard.",
    tags: ["Java", "OOP", "MySQL"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    codeUrl: `https://github.com/${site.githubUsername}/football-management`,
    demoUrl: "http://51.21.96.93:3000/",
  },
  {
    title: "Food Ordering App",
    description:
      "Android frontend with Django REST backend for seamless food ordering.",
    tags: ["Flutter", "Django REST", "Android"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    codeUrl: `https://github.com/${site.githubUsername}/food-ordering-app`,
    demoUrl: "https://your-demo-url.com/food-ordering",
  },
  {
    title: "To-Do App",
    description:
      "Web application connected to a Django API with real-time sync.",
    tags: ["React", "Django", "REST API", "GitHub", "Vercel", "Railway"],
    gradient: "from-violet-500/20 to-purple-500/20",
    codeUrl: `https://github.com/${site.githubUsername}/To-Do-App.git`,
    demoUrl: "https://to-do-app-chrinsley.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-32">
      <FadeIn>
        <h2 className="section-heading text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-16 max-w-lg">
          A selection of projects I&apos;ve built during my studies.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 100}>
            <div className="gradient-border group h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-lg">🚀</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm px-5 py-2 rounded-lg font-medium"
                  >
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary relative z-10 text-sm px-5 py-2 rounded-lg font-medium text-white"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
