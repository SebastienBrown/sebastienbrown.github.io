import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a production-grade e-commerce experience with secure authentication, optimized Stripe checkout, and admin dashboard for managing inventory and orders.",
    impact: "Handled 1,000+ concurrent users during peak sales simulation.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.yourdomain.com",
    image: "/images/ecommerce-preview.png"
  },
  {
    title: "Weather Dashboard",
    description: "Crafted a fast, responsive weather app with dynamic charts and personalized forecasts using geolocation. Prioritized accessibility and performance.",
    impact: "Achieved Lighthouse score of 95+ across all metrics.",
    technologies: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation API"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather.yourdomain.com",
    image: "/images/weather-preview.png"
  },
  {
    title: "Task Management App",
    description: "Designed a collaborative Kanban tool with real-time syncing, productivity metrics, and intuitive drag-and-drop UX.",
    impact: "Adopted by 5+ teams for internal workflow management.",
    technologies: ["React", "TypeScript", "Firebase", "Beautiful DnD"],
    github: "https://github.com/yourusername/task-app",
    demo: "https://tasks.yourdomain.com",
    image: "/images/task-preview.png"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden border dark:border-gray-800 group"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 italic mb-4">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
