import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Cloud, Users, Book } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      code: 'wURmG-H9dR',
      verifyText: 'Verify at Certiport',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      description: 'Fundamental concepts of cloud services and Microsoft Azure',
      skills: ['Cloud Computing', 'Azure Services', 'Cloud Security']
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      issuer: 'SmartInternz',
      code: 'SISFVIPAD2023-69855',
      verifyText: 'Certificate ID',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      description: 'Comprehensive Salesforce development training program',
      skills: ['Salesforce', 'CRM Development', 'Apex Programming']
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      code: 'Verify at Coursera',
      verifyText: 'Coursera Verification',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      description: 'Professional cybersecurity skills and best practices',
      skills: ['Cybersecurity', 'Risk Assessment', 'Incident Response']
    }
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Certifications
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Professional certifications that validate my expertise and commitment to continuous learning in technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 p-4 rounded-2xl inline-block mb-2 backdrop-blur-sm">
                      <cert.icon className="text-white" size={32} />
                    </div>
                    <Award className="text-white/80 mx-auto" size={20} />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-1"
                  >
                    <ExternalLink size={16} className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors" />
                  </motion.div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-xs font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification */}
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {cert.verifyText}
                  </div>
                  <div className="font-mono text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    {cert.code}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
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
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-lg opacity-90">Professional Certifications</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Verification Rate</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">2023-24</div>
                <div className="text-lg opacity-90">Recent Achievements</div>
              </motion.div>
            </div>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">Commitment to Excellence</h3>
              <p className="opacity-90">
                Each certification represents hours of dedicated learning and practical application, 
                demonstrating my commitment to professional growth and industry standards.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;