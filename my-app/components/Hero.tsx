export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="bg-orb w-[500px] h-[500px] bg-purple-600/20 top-[-10%] left-[-10%] animate-float-slow" />
      <div className="bg-orb w-[400px] h-[400px] bg-cyan-500/15 bottom-[-5%] right-[-5%] animate-float-slow [animation-delay:300ms]" />
      <div className="bg-orb w-[300px] h-[300px] bg-indigo-500/10 top-[40%] right-[20%] animate-pulse-glow" />

      <div className="relative max-w-4xl text-center z-10">
        <p className="text-gray-400 mb-4 tracking-widest uppercase text-sm animate-fade-up">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight animate-fade-up [animation-delay:100ms]">
          <span className="gradient-text">Chrinsley James</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-up [animation-delay:200ms]">
          Software Engineering Student
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:300ms]">
          Passionate about backend development, mobile applications, and solving
          real-world problems using Java, Django, Flutter, and modern
          technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [animation-delay:400ms]">
          <a
            href="#projects"
            className="btn-primary relative z-10 px-8 py-3.5 rounded-xl font-semibold text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="btn-outline px-8 py-3.5 rounded-xl font-semibold"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:800ms]">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-purple-400 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
