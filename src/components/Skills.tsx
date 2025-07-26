import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Brain, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'Java', level: 80, icon: Code, color: 'from-orange-500 to-red-600' },
    { name: 'HTML/CSS', level: 90, icon: Globe, color: 'from-orange-500 to-pink-500' },
    { name: 'MySQL', level: 75, icon: Database, color: 'from-blue-600 to-indigo-600' },
  ];

  const softSkills = [
    { name: 'Leadership', level: 90, icon: Users, color: 'from-purple-500 to-purple-600' },
    { name: 'Teamwork', level: 95, icon: Users, color: 'from-green-500 to-green-600' },
    { name: 'Problem Solving', level: 88, icon: Brain, color: 'from-cyan-500 to-blue-600' },
    { name: 'Communication', level: 85, icon: Users, color: 'from-pink-500 to-rose-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl`}>
            <skill.icon className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical abilities and soft skills that drive my success in software development.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Code className="mr-3 text-blue-600 dark:text-cyan-400" size={28} />
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Users className="mr-3 text-blue-600 dark:text-cyan-400" size={28} />
              Soft Skills
            </motion.h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-3xl text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Constantly Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in continuous improvement and staying updated with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies 
              that can enhance my development capabilities.
            </p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'Docker'].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;