import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Hello! I'm a passionate developer with a love for creating beautiful and functional web applications.
              I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me [your interests/hobbies].
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 