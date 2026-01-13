import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Customer Churn Prediction Model",
    description: "Built a machine learning pipeline using XGBoost to predict customer churn with 94% accuracy. Integrated with real-time scoring API for production deployment.",
    tags: ["Python", "XGBoost", "Scikit-learn", "FastAPI"],
    category: "data-science" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive Tableau dashboard tracking $50M+ in annual revenue across multiple product lines. Automated data refresh with Snowflake integration.",
    tags: ["Tableau", "SQL", "Snowflake", "dbt"],
    category: "analytics" as const,
    liveUrl: "#",
  },
  {
    title: "NLP Sentiment Analysis Engine",
    description: "Deep learning model for social media sentiment analysis processing 100K+ posts daily. Achieved 89% F1-score on multi-class classification.",
    tags: ["PyTorch", "Transformers", "BERT", "Docker"],
    category: "data-science" as const,
    githubUrl: "#",
  },
  {
    title: "Marketing Attribution Model",
    description: "Multi-touch attribution analysis using Markov chains to optimize $2M marketing budget. Identified 35% efficiency gains in channel allocation.",
    tags: ["Python", "Pandas", "Looker", "BigQuery"],
    category: "analytics" as const,
    liveUrl: "#",
  },
  {
    title: "Demand Forecasting System",
    description: "Time series forecasting with Prophet and LSTM networks for inventory optimization. Reduced stockouts by 40% while minimizing carrying costs.",
    tags: ["Prophet", "TensorFlow", "Airflow", "AWS"],
    category: "data-science" as const,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Real-time KPI Monitoring",
    description: "End-to-end data pipeline with Kafka streaming to Power BI dashboards. Monitors 50+ business KPIs with alerting and anomaly detection.",
    tags: ["Kafka", "Power BI", "Python", "Redis"],
    category: "analytics" as const,
    liveUrl: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "analytics" | "data-science">("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in analytics engineering and data science, 
            showcasing end-to-end solutions from data pipelines to production models.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "analytics" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("analytics")}
          >
            Analytics
          </Button>
          <Button
            variant={filter === "data-science" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("data-science")}
          >
            Data Science
          </Button>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
