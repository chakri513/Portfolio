import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            About Me
          </motion.h2>

        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="text-white space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                Hi, I'm <span className="font-bold text-cyan-400">Chakradhar Reddy Bijjamula</span>, a passionate Backend Developer and Software Engineer based in Guntur, Andhra Pradesh, currently working as a Backend Development Intern at Coastal Seven where I specialize in Python (FastAPI), MongoDB, and building robust RESTful APIs while collaborating with cross-functional teams to develop scalable solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-200">
                My passion for technology extends beyond coding, having been selected as a <span className="font-bold text-cyan-400">Smart India Hackathon (SIH) Grand Finalist 2024</span> and a national-level hackathon organized by SAP, experiences that shaped my commitment to using technology for social impact through projects like <span className="font-bold text-cyan-400">MediConnect</span> for healthcare provider matching, an <span className="font-bold text-cyan-400">AI-powered mock interview platform</span> for job seekers, and <span className="font-bold text-cyan-400">Nexus</span> for disaster response management.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-200">
                I'm always excited to collaborate on challenging projects and contribute to innovative solutions that drive organizational growth while making a positive impact on society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;