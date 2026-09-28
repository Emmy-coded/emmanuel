import { motion, Variants } from "framer-motion";

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const focusAreas = [
    "Predictive modeling and machine learning",
    "Data analysis, visualization, and business insights",
    "Risk, fraud, and financial analytics",
    "AI-driven solutions and applied research"
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 font-mono">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p variants={itemVariants}>
                I'm a Computer Science graduate from the University of Ilorin, Nigeria,
                focused on building depth in data science, machine learning, analytics,
                and applied AI.
              </motion.p>
              <motion.p variants={itemVariants}>
                My experience includes data science and AI work during my internship at
                NCAIR, where I explored how data and intelligent systems can be applied
                to real-world problems.
              </motion.p>
              <motion.p variants={itemVariants}>
                I enjoy taking a problem from raw data through analysis, modeling,
                evaluation, and communication of results. My portfolio reflects that
                approach across fraud detection, forecasting, predictive maintenance,
                and analytics.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="bg-surface-elevated p-8 rounded-2xl border border-border"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6 font-mono">What I Work On</h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                    />
                    <p className="text-muted-foreground">{area}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/30 rounded rotate-45"
              animate={{ y: [0, -10, 5, 0], rotate: [45, 50, 40, 45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"
              animate={{ y: [0, 10, -5, 0], scale: [1, 1.1, 0.9, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
