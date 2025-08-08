import React, { useState, useEffect, useRef } from 'react';

const skills = [
  // Programming Languages
  { name: 'C Program', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  
  // Web Technologies
  { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  
  // Databases
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  
  // Frameworks & Libraries
  { name: 'FastAPI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  // Cloud & APIs
  { name: 'Google Maps API', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  
  // Development Tools
  { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  
  // Additional Technologies
  { name: 'RESTful APIs', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'JWT', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
];
const Skills: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += 1;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 pb-32 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <span className="px-6 py-2 rounded-xl bg-[#4746a3] text-white text-2xl font-medium mb-8">Skills</span>
        </div>
        
        <div 
          ref={scrollRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-8 min-w-max">
            {/* First set of skills */}
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center bg-[#181b34] rounded-2xl px-10 py-8 min-w-[180px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={skill.img} alt={skill.name} className="w-20 h-20 object-contain mb-4" />
                <span className="text-white text-lg font-semibold mt-2">{skill.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for continuous scrolling */}
            {skills.map((skill) => (
              <div key={`${skill.name}-duplicate`} className="flex flex-col items-center bg-[#181b34] rounded-2xl px-10 py-8 min-w-[180px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={skill.img} alt={skill.name} className="w-20 h-20 object-contain mb-4" />
                <span className="text-white text-lg font-semibold mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;