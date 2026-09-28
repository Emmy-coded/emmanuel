import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fraud Detection",
      description:
        "Machine learning project focused on detecting potentially fraudulent Nigerian financial transactions through data preprocessing, feature engineering, model comparison, and evaluation.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      type: "Risk & Financial Analytics",
      status: "Completed",
      link: "https://github.com/Emmy-coded/fraud-detection"
    },
    {
      title: "Oil Price Forecasting",
      description:
        "Time-series forecasting project exploring historical oil price patterns and building predictive models to support data-driven analysis of energy market trends.",
      technologies: ["Python", "Pandas", "Time Series", "Forecasting"],
      type: "Forecasting",
      status: "Completed",
      link: "https://github.com/Emmy-coded/energy-forecasting"
    },
    {
      title: "Predictive Maintenance",
      description:
        "Machine learning project for analyzing equipment-related data and predicting maintenance needs, with a focus on practical predictive analytics.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Predictive Modeling"],
      type: "Machine Learning",
      status: "Completed",
      link: "https://github.com/Emmy-coded/predictive-maintenance"
    },
    {
      title: "SQL Business Dashboard",
      description:
        "SQL and Streamlit dashboard project combining database querying, data analysis, and interactive reporting to turn structured data into usable business insights.",
      technologies: ["SQL", "MySQL", "Streamlit", "Data Visualization"],
      type: "Analytics",
      status: "Completed",
      link: "https://github.com/Emmy-coded/SQL-dashboard"
    },
    {
      title: "AI Research at NCAIR",
      description:
        "Research experience exploring AI, robotics, and data-driven approaches to real-world problems during a data science and AI internship.",
      technologies: ["AI/ML", "Data Science", "Research", "Python"],
      type: "Research Experience",
      status: "Completed",
      link: ""
    }
  ];

  const upcomingProjects = [
    "Credit Risk / Default Prediction",
    "Web Scraping & Data Pipeline",
    "NLP / Text Classification",
    "AML / Transaction Monitoring"
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected work across machine learning, forecasting, risk analytics, and
          data applications. Each project is built to demonstrate practical
          problem-solving, not just model training.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <motion.div
                className="bg-surface p-6 rounded-2xl border border-border h-full flex flex-col relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                    {project.type}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary shrink-0">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-elevated text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 text-sm text-center border border-border rounded-lg hover:bg-surface-elevated transition-colors group-hover:border-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project
                    </motion.a>
                  ) : (
                    <span className="block w-full py-2 text-sm text-center border border-border rounded-lg text-muted-foreground">
                      Research Experience
                    </span>
                  )}
                </div>

                <motion.div
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-surface p-8 rounded-2xl border border-border max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <span className="text-xs text-primary font-mono uppercase tracking-wide">
              In Development
            </span>
            <h3 className="text-2xl font-semibold mt-2 font-mono">Next Portfolio Builds</h3>
            <p className="text-muted-foreground mt-2">
              These are planned projects, not yet presented as completed work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {upcomingProjects.map((project) => (
              <div
                key={project}
                className="px-4 py-3 bg-surface-elevated rounded-lg border border-border text-sm text-center"
              >
                {project}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on data science or machine learning projects?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
