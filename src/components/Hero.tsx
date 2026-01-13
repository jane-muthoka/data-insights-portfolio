import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            DATA SCIENTIST & ANALYTICS ENGINEER
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Turning Data into{" "}
            <span className="text-gradient">Insights</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I specialize in transforming complex datasets into actionable intelligence. 
            From predictive models to interactive dashboards, I bring data to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="outline" size="xl">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
