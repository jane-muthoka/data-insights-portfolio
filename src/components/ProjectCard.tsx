import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: "analytics" | "data-science";
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  category,
  githubUrl,
  liveUrl 
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge 
            variant="outline" 
            className={`text-xs font-mono ${
              category === "analytics" 
                ? "border-primary/50 text-primary" 
                : "border-accent/50 text-accent"
            }`}
          >
            {category === "analytics" ? "Analytics" : "Data Science"}
          </Badge>
          
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs font-mono px-2 py-1 bg-secondary rounded-md text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className={`h-1 w-full ${
        category === "analytics" 
          ? "bg-gradient-to-r from-primary/50 via-primary to-primary/50" 
          : "bg-gradient-to-r from-accent/50 via-accent to-accent/50"
      } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
};

export default ProjectCard;
