// Enhanced Home.jsx with animated sections and SEO improvements
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowDown, Download, Code, Award, Server, Database } from 'lucide-react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Set page title and meta description for SEO
    document.title = "Sebastien Brown | Associate @ Boston Consulting Group";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sebastien Brown - Associate Consultant.');
    }
  }, []);

  // Staggered animation for skills
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Tech stack data
  const techStack = [
    { 
      category: "Frontend", 
      icon: <Code size={24} />,
      skills: ["React.js", "TypeScript", "Next.js", "Redux", "Tailwind CSS"]
    },
    { 
      category: "Backend", 
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "Python", "GraphQL", "REST API"]
    },
    { 
      category: "Database", 
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma ORM"]
    },
    { 
      category: "DevOps", 
      icon: <Award size={24} />,
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "GitHub Actions"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="lg:w-1/3 flex justify-center order-2 lg:order-1">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img 
                src="./assets/react.svg" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-blue-500">Sebastien Brown</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6"
            >
              Associate @ Boston Consulting Group
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I love problem-solving, building and learning a little more every day.<br></br>
              Learning about AI, math and full-stack design in my free time.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="./assets/SBrown_Resume.pdf" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a 
                href="https://github.com/SebastienBrown" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sebastien-brown/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:sebastienbrown1@gmail.com" 
                className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="animate-bounce">
            <ArrowDown size={24} className="text-blue-500" />
          </a>
        </motion.div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              I'm a <strong>Senior Software Engineer</strong> at Google with over 8 years of experience building robust web applications and leading engineering teams. My expertise spans the full stack with a particular focus on creating performant React frontends and scalable Node.js backends.
            </p>
            <p className="text-lg mb-4">
              Previously, I worked at <strong>Meta</strong> where I contributed to improving the performance of key components in their ad platform, resulting in a 40% load time reduction. I've also led teams at startups where I implemented architecture decisions that allowed for 10x user growth.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and speaking at tech conferences. I'm passionate about clean code, performance optimization, and building products that solve real-world problems.
            </p>
          </div>
        </motion.div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My Tech Stack</h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-lg shadow-lg ${
                  index % 4 === 0 ? 'bg-blue-50 dark:bg-blue-900/30' : 
                  index % 4 === 1 ? 'bg-green-50 dark:bg-green-900/30' : 
                  index % 4 === 2 ? 'bg-purple-50 dark:bg-purple-900/30' : 
                  'bg-orange-50 dark:bg-orange-900/30'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full mr-3 ${
                    index % 4 === 0 ? 'bg-blue-100 dark:bg-blue-800' : 
                    index % 4 === 1 ? 'bg-green-100 dark:bg-green-800' : 
                    index % 4 === 2 ? 'bg-purple-100 dark:bg-purple-800' : 
                    'bg-orange-100 dark:bg-orange-800'
                  }`}>
                    {tech.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{tech.category}</h4>
                </div>
                <ul className="space-y-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Highlight Stats Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <h4 className="text-4xl font-bold text-blue-500 mb-2">8+</h4>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-500 mb-2">50+</h4>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-500 mb-2">20+</h4>
              <p className="text-lg">Open Source Contrib</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-500 mb-2">10+</h4>
              <p className="text-lg">Tech Talks</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;