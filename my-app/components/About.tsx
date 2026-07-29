import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-32">
      <FadeIn>
        <h2 className="section-heading text-4xl font-bold mb-16">About Me</h2>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="gradient-border">
          <div className="glass-card rounded-2xl p-8 sm:p-10 overflow-x-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                developer.js
              </span>
            </div>

            <pre className="code-block text-sm sm:text-base">
              <code>
                <span className="keyword">const</span>{" "}
                <span className="property">developer</span>{" "}
                <span className="bracket">{"= {"}</span>
                {"\n"}
                {"  "}
                <span className="property">name</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;Cocotte Chrinsley James&quot;
                </span>
                <span className="bracket">,</span>
                {"\n"}
                {"  "}
                <span className="property">role</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;Full-Stack &amp; AI Developer&quot;
                </span>
                <span className="bracket">,</span>
                {"\n"}
                {"  "}
                <span className="property">education</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;B.Sc.(Hons) Software Engineering&quot;
                </span>
                <span className="bracket">,</span>
                {"\n"}
                {"  "}
                <span className="property">university</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;Université des Mascareignes / University of Limoges&quot;
                </span>
                <span className="bracket">,</span>
                {"\n\n"}
                {"  "}
                <span className="property">skills</span>
                <span className="bracket">: [</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;Python&quot;</span>
                <span className="bracket">,</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;Java&quot;</span>
                <span className="bracket">,</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;TypeScript&quot;</span>
                <span className="bracket">,</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;Django&quot;</span>
                <span className="bracket">,</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;React / Next.js&quot;</span>
                <span className="bracket">,</span>
                {"\n"}
                {"    "}
                <span className="string">&quot;Spring Boot&quot;</span>
                {"\n"}
                {"  "}
                <span className="bracket">],</span>
                {"\n\n"}
                {"  "}
                <span className="property">passion</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;Building modern, scalable web apps&quot;
                </span>
                <span className="bracket">,</span>
                {"\n\n"}
                {"  "}
                <span className="property">currentlyLearning</span>
                <span className="bracket">:</span>{" "}
                <span className="string">
                  &quot;AI / ML, RAG systems &amp; LLMs&quot;
                </span>
                {"\n"}
                <span className="bracket">{"};"}</span>
                <span className="cursor" />
              </code>
            </pre>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
