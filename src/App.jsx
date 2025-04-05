
// App.jsx - Enhanced with smooth page transitions and improved navigation
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './App.css';

// Create a wrapper for route transitions
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <header className={`sticky top-0 z-20 shadow-md backdrop-blur-sm ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`}>
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">
              <NavLink to="/" className="hover:text-blue-500 transition-colors">
                <span className="text-blue-500">Dev</span>Portfolio
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className={({ isActive }) => 
                `hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
              }>
                Home
              </NavLink>
              <NavLink to="/experience" className={({ isActive }) => 
                `hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
              }>
                Experience
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => 
                `hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
              }>
                Projects
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => 
                `hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
              }>
                Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
              }>
                Contact
              </NavLink>
              
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block py-2 hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/experience" 
                  className={({ isActive }) => 
                    `block py-2 hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </NavLink>
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => 
                    `block py-2 hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
                <NavLink 
                  to="/blog" 
                  className={({ isActive }) => 
                    `block py-2 hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block py-2 hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-medium' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </main>

        <footer className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-center md:text-left">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
              </div>
              <div className="flex">
              <a href="#" className="hover:text-blue-500 transition-colors mr-8">GitHub</a>
              <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;