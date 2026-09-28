import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experience = {
    title: "Intern - Data Science & AI",
    company: "NITDA Nigeria (NCAIR)",
    duration: "Apr 2024 - Oct 2024 · 7 months",
    location: "Abuja, Federal Capital Territory, Nigeria · Hybrid",
    description:
      "Explored AI, robotics, and data-driven innovations to address real-world problems in Nigeria and beyond.",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Statistical Data Analysis",
      "Artificial Intelligence",
      "Big Data",
      "Data Science",
      "Python Programming",
      "Data Mining",
      "Data Management",
      "Deep Learning"
    ]
  };

  const education = {
    institution: "University of Ilorin, Nigeria",
    degree: "Bachelor of Science - Computer Science",
    duration: "2021 - 2025",
    activities: "NACOSS",
    description:
      "Focused on Machine Learning and Software Engineering. Completed coursework in Machine Learning, Data Structures and Algorithms, Database Management Systems, and Artificial Intelligence.",
    finalProject:
      "Comparative Analysis of Machine Learning Approaches to Fraud Detection in Nigerian Financial Transactions"
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-surface p-8 rounded-2xl border border-border relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-primary font-medium mb-1">{experience.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{experience.duration}</p>
              <p className="text-sm text-muted-foreground mb-4">{experience.location}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-medium font-mono">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface-elevated text-sm rounded-full border border-border hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-surface p-8 rounded-2xl border border-border"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs text-primary font-mono uppercase tracking-wide">
                Leadership
              </span>
              <h3 className="text-2xl font-semibold mt-2 mb-2">
                President, NYSC Digital Literacy CDS
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Njikoka Zone · 2026
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led digital literacy outreach initiatives, coordinated volunteers,
                supported school-based training, and helped organize practical
                computer and digital skills programmes for young learners.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-surface p-8 rounded-2xl border border-border relative overflow-hidden h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
              <p className="text-accent font-medium mb-1">{education.institution}</p>
              <p className="text-sm text-muted-foreground mb-2">{education.duration}</p>
              <p className="text-sm text-muted-foreground mb-4">
                Activities: {education.activities}
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {education.description}
              </p>

              <motion.div
                className="bg-surface-elevated p-4 rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h4 className="font-medium font-mono mb-2">Final Year Project:</h4>
                <p className="text-sm text-muted-foreground italic">
                  "{education.finalProject}"
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 border border-accent/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
