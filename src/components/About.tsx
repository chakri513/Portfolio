import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, Target, Award } from 'lucide-react';

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

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'BTech Student' },
    { icon: Briefcase, label: 'Current Role', value: 'Intern @ Coastal Seven' },
    { icon: Award, label: 'Certifications', value: '4+ Certified' },
    { icon: Target, label: 'Focus', value: 'Software Development' }
  ];

  const softSkills = [
    'Leadership',
    'Teamwork',
    'Problem-solving',
    'Communication',
    'Adaptability',
    'Time Management'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Tech Enthusiast & Future Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate BTech student at Chalapathi Institute of Technology (2021–2025), 
                currently serving as an intern at Coastal Seven. My journey in technology is driven 
                by a desire to create innovative solutions that solve real-world problems and make 
                a meaningful impact on people's lives.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Experience
              </h3>
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="text-blue-600 dark:text-cyan-400" size={20} />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Current Intern @ Coastal Seven
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Working with cutting-edge technologies and contributing to innovative projects 
                that enhance my practical skills and industry knowledge.
              </p>
              <a 
                href="https://coastalseven.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-blue-600 dark:text-cyan-400 hover:underline"
              >
                Visit Coastal Seven →
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="bg-white/20 p-4 rounded-xl mb-3 inline-block">
                      <stat.icon size={32} />
                    </div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                    <div className="font-bold text-lg">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                To leverage technology in creating innovative solutions that address real-world 
                challenges while continuously learning and growing as a software developer.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400">
                <Target size={20} />
                <span className="font-semibold">Always aiming for excellence</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Bachelor of Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chalapathi Institute of Technology
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2021 - 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;