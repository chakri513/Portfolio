import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Users, Calendar, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'SIH 2024 Finalist',
      description: 'Selected as a finalist in Smart India Hackathon 2024, one of the most prestigious hackathons in India.',
      role: 'Team Member',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600',
      year: '2024',
      type: 'Competition',
      impact: 'National Recognition'
    },
    {
      title: 'National Level Hackathon (SAP) Finalist',
      description: 'Reached finals in SAP National Level Hackathon, demonstrating enterprise solution development skills.',
      role: 'Team Member',
      icon: Award,
      color: 'from-blue-500 to-purple-600',
      year: '2024',
      type: 'Corporate Challenge',
      impact: 'Industry Recognition'
    },
    {
      title: 'IDE Bootcamp Phase-III (SIH with AICTE)',
      description: 'Successfully completed intensive development bootcamp preparing for Smart India Hackathon.',
      role: 'Participant',
      icon: Medal,
      color: 'from-green-500 to-teal-600',
      year: '2024',
      type: 'Training Program',
      impact: 'Skill Enhancement'
    },
    {
      title: '24-hour National Hackathon Participant',
      description: 'Participated in intensive 24-hour coding marathon, showcasing rapid prototyping and teamwork skills.',
      role: 'Developer',
      icon: Target,
      color: 'from-red-500 to-pink-600',
      year: '2024',
      type: 'Endurance Challenge',
      impact: 'Technical Growth'
    }
  ];

  const stats = [
    { label: 'Hackathons', value: '4+', icon: Trophy },
    { label: 'Finals Reached', value: '2', icon: Award },
    { label: 'Team Collaborations', value: '10+', icon: Users },
    { label: 'Coding Hours', value: '500+', icon: Target }
  ];

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
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Hackathons & Achievements
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Recognition and accomplishments that showcase my competitive spirit, teamwork abilities, and technical expertise in challenging environments.
          </motion.p>
        </motion.div>

        {/* Achievement Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative mb-16"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600" />
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Achievement Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl`}>
                      <achievement.icon className="text-white" size={24} />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {achievement.year}
                      </span>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        {achievement.type}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Role:</span>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {achievement.role}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Impact:</span>
                      <div className="text-sm font-medium text-blue-600 dark:text-cyan-400">
                        {achievement.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-cyan-400 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl inline-block mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-3xl text-white text-center"
          >
            <Trophy size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Competitive Excellence
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              These achievements reflect my passion for innovation, collaborative problem-solving, 
              and the drive to excel in competitive environments. Each experience has contributed 
              to my growth as a developer and team player.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Team Leadership', 'Problem Solving', 'Innovation', 'Time Management', 'Technical Skills'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;