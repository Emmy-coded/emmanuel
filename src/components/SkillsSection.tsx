import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "Pandas", "NumPy"]
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "Predictive Modeling", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Analytics & Visualization",
      skills: ["Data Analysis", "Matplotlib", "Seaborn", "Business Dashboards"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Streamlit", "MySQL", "Git", "GitHub"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A practical toolkit built through projects, coursework, research, and
          hands-on experimentation.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-surface-elevated p-6 rounded-2xl border border-border h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-6 font-mono text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-background text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-1 bg-primary/30 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="bg-background p-8 rounded-2xl border border-border max-w-3xl mx-auto"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-mono">Current Focus</h3>
            <p className="text-muted-foreground mb-6">
              Deepening practical expertise through portfolio projects in credit risk,
              data pipelines, NLP, and transaction monitoring while strengthening
              end-to-end machine learning and analytics skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Credit Risk", "Data Pipelines", "NLP", "AML / Transaction Monitoring"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
