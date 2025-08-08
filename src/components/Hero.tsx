import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Open the new CV link in a new tab
    window.open('https://drive.google.com/file/d/1Vkr7JEHOTFMzFMNLqQJvx3B7VR1fdIwa/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a192f] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-left leading-tight">
            Chakradhar Reddy
            <div className="text-4xl md:text-5xl lg:text-6xl mt-2">Bijjamula</div>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium text-left">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-cyan-400 font-medium text-left">
            "Building solutions that make an impact."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToProjects}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
            >
              <span>View My Work</span>
            </button>
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-base"
            >
              <span>Download Resume</span>
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src="/images/Chakradharreddy.png" alt="Profile" className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;