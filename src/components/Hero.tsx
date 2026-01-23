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
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQGSlHnTbHbhYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713698924616?e=1770854400&v=beta&t=6F6oQJ6XnnEYAdOQFkU-GhXk25k_UKsk86qS_oBw2Wc"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            DATA SCIENTIST & ANALYTICS ENGINEER
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient">Jane Muthoka</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
            Turning Data into Insights
          </p>
          
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
              href="https://github.com/jane-muthoka" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jane-muthoka-364781216/" 
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
