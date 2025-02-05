'use client'
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';
import ImageGallery from './ImageGallery';
import Skills from './Skills';
import Experience from './Expierence';

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'SK Blog',
      description: 'Developed a dynamic Blog web app using Next.js with Prisma ORM and MongoDB for data storage',
      images: [
        '/Projects/SK/1.png',
      ],
      github: 'https://github.com/username/ecommerce',
      live: 'https://sahil-blog-opal.vercel.app/'
    },
    {
      title: 'Visitors Deals',
      description: 'Engineered a sleek hotel booking web app with React JS, ensuring a polished user interface and smooth navigation.',
      images: [
        '/Projects/VD/1.png',
      ],
      github: 'https://github.com/username/ecommerce',
      live: 'https://www.visitorsdeals.com/'
    },
    {
      title: 'CPP Buzz',
      description: 'Developed a multilingual coding test platform, providing users with the flexibility to code in their preferred programming language.',
      images: [
        '/Projects/CPP/1.png',
      ],
      github: 'https://github.com/username/ecommerce',
      live: 'https://www.cppbuzz.com/'
    },
    {
      title: 'MXA - Force',
      description: 'Full-stack construction outsourcing platform built with Vue JS, PHP and SQL.',
      images: [
        '/Projects/MXA/1.png',
        '/Projects/MXA/2.png',
        '/Projects/MXA/3.png',
        '/Projects/MXA/4.png',
        '/Projects/MXA/5.png',
        '/Projects/MXA/6.png',
      ],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      title: 'Affinity Bank',
      description: 'Activity tracking platform built with React JS, PHP and SQL.',
      images: [
        '/Projects/AFB/1.png',
        '/Projects/AFB/2.png',
        '/Projects/AFB/3.png',
        '/Projects/AFB/4.png',
        '/Projects/AFB/5.png',
      ],
      github: 'https://github.com/username/taskmanager',
      live: 'https://task-manager-demo.com'
    },
    {
      title: 'Royal Flush',
      description: 'Home maintainance website built with Next JS',
      images: [
        '/Projects/RFP/1.png',
        '/Projects/RFP/2.png',
        '/Projects/RFP/3.png',
        '/Projects/RFP/4.png',
        '/Projects/RFP/5.png',
        '/Projects/RFP/6.png',
        '/Projects/RFP/7.png',
        '/Projects/RFP/8.png',
        '/Projects/RFP/9.png',
      ],
      github: 'https://github.com/username/weather',
      live: 'https://weather-dashboard-demo.com'
    },
    {
      title: 'Venture Future Bean',
      description: 'Institutional Coffee Provider built with Solid JS, GO Lang and SQL',
      images: [
        '/Projects/VFB/1.png',
        '/Projects/VFB/2.png',
        '/Projects/VFB/3.png',
        '/Projects/VFB/4.png',
        '/Projects/VFB/5.png',
        '/Projects/VFB/6.png',
        '/Projects/VFB/7.png',
        '/Projects/VFB/8.png',
        '/Projects/VFB/9.png',
        '/Projects/VFB/10.png',
        '/Projects/VFB/11.png',
        '/Projects/VFB/12.png',
        '/Projects/VFB/13.png',
        '/Projects/VFB/14.png',
        '/Projects/VFB/15.png',
      ],
      github: 'https://github.com/username/weather',
      live: 'https://weather-dashboard-demo.com'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />

      <header className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollPosition * 0.02}px) rotate(${scrollPosition * 0.005}deg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sahil Kandari
            </h1>
            <h2 className="text-xl text-gray-300 mb-6">Senior Software Engineer</h2>
            <p className="text-gray-400 max-w-2xl mb-8">
              Experienced Front-End Developer with almost 5 years of experience, skilled in JavaScript, jQuery, React JS, Next JS, Solid JS, and Vue JS. Committed to delivering exceptional code and user experiences. Passionate about innovation and staying current with industry trends.
            </p>
            <div className="flex space-x-4 flex-wrap gap-5">
              <a href="https://github.com/SahilKandari"
                className="flex items-center px-4 py-2 rounded-lg bg-gray-800 
                           transition-all duration-300 transform hover:scale-105
                           hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/20 group">
                <Github className="w-5 h-5 mr-2 group-hover:text-blue-400" />
                <span className="group-hover:text-blue-400">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sahil-kandari/"
                className="flex items-center px-4 py-2 rounded-lg bg-gray-800 
                           transition-all duration-300 transform hover:scale-105
                           hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/20 group">
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-purple-400" />
                <span className="group-hover:text-purple-400">LinkedIn</span>
              </a>
              <a href="mailto:kandarisahil13@gmail.com"
                className="flex items-center px-4 py-2 rounded-lg bg-gray-800 
                           transition-all duration-300 transform hover:scale-105
                           hover:bg-gray-700 hover:shadow-lg hover:shadow-pink-500/20 group">
                <Mail className="w-5 h-5 mr-2 group-hover:text-pink-400" />
                <span className="group-hover:text-pink-400">Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <Experience />
      <section className="py-20 relative">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${(scrollPosition - 500) * 0.05}px)`,
            opacity: Math.max(0, Math.min(1, 1 - scrollPosition / 1000))
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_80%)]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <h2
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
            style={{
              transform: `translateY(${(scrollPosition - 500) * 0.05}px)`
            }}
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl 
                         overflow-hidden border border-gray-700 hover:border-gray-500 
                         transition-all duration-300 hover:shadow-xl 
                         hover:shadow-purple-500/10"
                style={{
                  transform: `translateY(${Math.max(0, (scrollPosition - 600 - index * 100) * 0.05)}px)
                             rotateX(${Math.min(20, Math.max(-20, (scrollPosition - 600 - index * 100) * 0.02))}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <ImageGallery images={project.images} title={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    {/* <a href={project.github}
                      className="flex items-center transition-all duration-300
                                group hover:text-blue-400 transform hover:scale-105 hidden">
                      <Github className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                      <span>Code</span>
                    </a> */}
                    <a href={project.live}
                      className="flex items-center transition-all duration-300
                                group hover:text-purple-400 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:text-purple-400" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default Portfolio;