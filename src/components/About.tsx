import { BarChart3, Brain, Database, LineChart } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models that drive business decisions",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing scalable pipelines and data infrastructure",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Creating insights through statistical analysis",
  },
  {
    icon: LineChart,
    title: "Visualization",
    description: "Crafting dashboards that tell compelling stories",
  },
];

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About{" "}
              <span className="text-gradient">Data-Driven</span> Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in data science and analytics, 
                I've helped organizations across fintech, e-commerce, and healthcare 
                unlock the value hidden in their data.
              </p>
              <p>
                My approach combines rigorous statistical methodology with practical 
                business acumen. I believe the best data solutions are not just 
                technically sound but also intuitive and actionable for stakeholders.
              </p>
              <p>
                When I'm not building models or crafting dashboards, you'll find me 
                contributing to open-source projects and writing about emerging trends 
                in AI and machine learning.
              </p>
            </div>
          </div>
          
          {/* Right side - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
