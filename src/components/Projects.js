import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project. Explain the key features and technologies used.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-blue-400 to-purple-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Project Two",
    description: "Description of your second project. What problems did it solve? What did you learn?",
    tech: ["Next.js", "Tailwind", "Firebase"],
    gradient: "from-purple-400 to-pink-500",
    pattern: "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    title: "Project Three",
    description: "Your third project's description. Highlight the unique aspects and your role in it.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    gradient: "from-pink-400 to-orange-500",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
    liveLink: "https://project3.com",
    githubLink: "https://github.com/yourusername/project3"
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                <motion.div 
                  className={`w-full md:w-1/2 h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative elements */}
                  <div 
                    className="absolute inset-0" 
                    style={{ backgroundImage: project.pattern }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-9xl font-bold opacity-20">
                      {index + 1}
                    </div>
                  </div>
                  {/* Floating shapes */}
                  <motion.div
                    className="absolute w-20 h-20 rounded-full bg-white/10"
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -30, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      top: '20%',
                      left: '20%'
                    }}
                  />
                  <motion.div
                    className="absolute w-16 h-16 rounded-lg bg-white/10"
                    animate={{
                      x: [0, -20, 0],
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      bottom: '20%',
                      right: '20%'
                    }}
                  />
                </motion.div>

                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 