import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Google",
      logo: "/api/placeholder/60/60?text=G",
      location: "Mountain View, CA",
      period: "Jun 2022 - Present",
      description: [
        "Lead a team of 6 engineers in developing and maintaining the Google Cloud Platform's user interface, focusing on performance optimization and scalability.",
        "Reduced application bundle size by 35% through code splitting and lazy loading strategies, resulting in a 40% improvement in initial load time.",
        "Designed and implemented a real-time data synchronization system using WebSockets that decreased data staleness issues by 90%.",
        "Pioneered the adoption of TypeScript and strict type checking across the team, reducing type-related bugs by 65%.",
        "Mentored junior developers and conducted knowledge-sharing sessions, improving team velocity by 25%."
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Kubernetes", "GCP"]
    },
    {
      title: "Full Stack Engineer",
      company: "Meta",
      logo: "/api/placeholder/60/60?text=M",
      location: "Menlo Park, CA",
      period: "Jan 2020 - May 2022",
      description: [
        "Developed high-performance components for Meta's advertising platform that handled over 10M daily active users.",
        "Implemented data visualization dashboards that improved advertiser insight capabilities, leading to a 15% increase in ad spend.",
        "Optimized database queries resulting in a 50% reduction in average API response time.",
        "Collaborated with UX designers to implement a redesigned campaign creation flow, increasing campaign completion rate by 30%.",
        "Participated in the company's hackathon, creating a real-time collaboration tool that was later integrated into the main product."
      ],
      technologies: ["React", "Redux", "PHP", "MySQL", "Jest", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      logo: "/api/placeholder/60/60?text=A",
      location: "Seattle, WA",
      period: "Aug 2017 - Dec 2019",
      description: [
        "Built and maintained microservices for Amazon's fulfillment system, handling over 1M packages daily.",
        "Implemented CI/CD pipelines that reduced deployment time from hours to minutes.",
        "Developed a monitoring system that reduced mean time to detection for critical issues by 60%.",
        "Created a dashboard for operational metrics that improved visibility into system health.",
        "Contributed to the architecture design of a new inventory management system."
      ],
      technologies: ["Java", "Spring Boot", "AWS Lambda", "DynamoDB", "Kubernetes", "Jenkins"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      logo: "/api/placeholder/60/60?text=S",
      period: "2015 - 2017",
      details: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Real-time Distributed Systems for ML Pipelines'."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      logo: "/api/placeholder/60/60?text=UCB",
      period: "2011 - 2015",
      details: "Minor in Data Science. Graduated with honors. Member of ACM student chapter."
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2021"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2020"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-2 text-center md:text-left"
      >
        Experience
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center md:text-left"
      >
        Over 8 years of professional experience building cutting-edge applications
      </motion.p>
      
      {/* Work Experience Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8">Work History</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot and line for medium screens and up */}
              <div className="hidden md:block absolute left-0 ml-6 -translate-x-1/2 h-full">
                <div className="w-px h-full bg-blue-300 dark:bg-blue-700 transform translate-x-px"></div>
              </div>
              <div className="hidden md:block absolute top-1 left-0 ml-6 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 dark:border-gray-900"></div>
              
              {/* Content */}
              <div className="md:ml-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                    <span className="block md:text-right">{exp.period}</span>
                    <span className="block md:text-right">{exp.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Education Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <div className="md:w-1/6 flex justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-5/6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                </div>
                <p className="text-blue-500 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Certifications Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-800 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </div>
              <div className="ml-11">
                <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Issued {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;