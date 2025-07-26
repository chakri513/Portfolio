import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Heart, Brain, Shield, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Care Routing Agent (Mediconnect)',
      description: 'Intelligent healthcare platform that optimizes patient care routing using AI algorithms to connect patients with the most suitable healthcare providers.',
      features: [
        'AI-powered patient-provider matching',
        'Real-time appointment scheduling',
        'Healthcare analytics dashboard',
        'Emergency care routing system'
      ],
      techStack: ['Python', 'Machine Learning', 'Flask', 'React', 'PostgreSQL'],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      category: 'Healthcare AI'
    },
    {
      id: 2,
      title: 'AI-Powered Mock Interview App',
      description: 'Comprehensive AI-driven mock interview platform that provides real-time feedback, speech analysis, and personalized improvement suggestions.',
      features: [
        'AI speech recognition and analysis',
        'Real-time feedback system',
        'Interview performance analytics',
        'Customizable interview scenarios'
      ],
      techStack: ['Python', 'Natural Language Processing', 'React', 'Node.js', 'MongoDB'],
      icon: Brain,
      color: 'from-purple-500 to-blue-600',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      category: 'AI Application'
    },
    {
      id: 3,
      title: 'Nexus - Disaster Response Web App',
      description: 'Emergency response coordination platform that facilitates rapid disaster response through real-time communication and resource management.',
      features: [
        'Real-time disaster reporting',
        'Resource allocation system',
        'Emergency contact coordination',
        'Geographical incident mapping'
      ],
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps API'],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      image: 'https://images.pexels.com/photos/73833/wax-fire-burns-hot-73833.jpeg',
      category: 'Emergency Response'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Showcasing innovative solutions that demonstrate my technical skills and passion for creating impactful applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="lg:w-1/2 w-full space-y-6">
                <motion.div
                  whileHover={{ x: index % 2 === 1 ? -5 : 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-3xl text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Innovation Through Code
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
              Each project represents a unique challenge solved through creative thinking, 
              technical expertise, and a commitment to creating meaningful solutions that 
              address real-world problems.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Code size={40} className="mx-auto mb-3 opacity-80" />
                <div className="text-2xl font-bold">3</div>
                <div className="opacity-90">Featured Projects</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Database size={40} className="mx-auto mb-3 opacity-80" />
                <div className="text-2xl font-bold">12+</div>
                <div className="opacity-90">Technologies Used</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Globe size={40} className="mx-auto mb-3 opacity-80" />
                <div className="text-2xl font-bold">100%</div>
                <div className="opacity-90">Problem Solving Focus</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;