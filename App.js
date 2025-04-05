import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './src/pages/Home';
import Experience from './src/pages/Experience';
import Projects from './src/pages/Projects';
import Blog from './src/pages/Blog';
import { Sun, Moon } from 'lucide-react';
import './App.css';

import './index.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for user preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <header className={`sticky top-0 z-10 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">
              <NavLink to="/" className="hover:text-blue-500 transition-colors">YourName</NavLink>
            </div>
            
            <div className="flex items-center space-x-6">
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
              
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <footer className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;