const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "SQL", "R", "Scala", "JavaScript"],
  },
  {
    title: "ML & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Hugging Face"],
  },
  {
    title: "Data Engineering",
    skills: ["Spark", "Airflow", "dbt", "Kafka", "Snowflake"],
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Looker", "Plotly", "D3.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "Redshift"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning the full data lifecycle—from ingestion 
            and transformation to modeling and visualization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-mono px-3 py-1.5 bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
