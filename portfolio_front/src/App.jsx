import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import CardNav from './components/common/CardNav'

import ThemeToggle from './components/common/ThemeToggle'
import DotGrid from './components/common/DotGrid'

import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Contact from './pages/contacts'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const navItems = [
  {
    label: "Home",
    bgColor: darkMode ? "#1a0d2e" : "#f0e8ff",
    textColor: darkMode ? "#fff" : "#000",
    links: [
      { label: "Welcome", href: "/", ariaLabel: "Home Page" },
      { label: "Portfolio", href: "/", ariaLabel: "My Portfolio" }
    ]
  },
  {
    label: "About",
    bgColor: darkMode ? "#0D0716" : "#e8d5ff",
    textColor: darkMode ? "#fff" : "#000",
    links: [
      { label: "My Story", href: "/about", ariaLabel: "About Me" },
      { label: "Skills", href: "/about", ariaLabel: "My Skills" }
    ]
  },
  {
    label: "Projects", 
    bgColor: darkMode ? "#170D27" : "#d4c5e8",
    textColor: darkMode ? "#fff" : "#000",
    links: [
      { label: "All Projects", href: "/projects", ariaLabel: "View All Projects" },
      { label: "Featured", href: "/projects", ariaLabel: "Featured Projects" }
    ]
  },
  {
    label: "Contact",
    bgColor: darkMode ? "#271E37" : "#c0b5d4",
    textColor: darkMode ? "#fff" : "#000",
    links: [
      { label: "Get In Touch", href: "/contact", ariaLabel: "Contact Form" },
      { label: "Email", href: "/contact", ariaLabel: "Email Me" }
    ]
  }
]

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>

      {/* Global Animated Background */}
<DotGrid
  className="app-dot-background"
  dotSize={6}
  gap={30}
  baseColor={darkMode ? "#3a2f5c" : "#c9b8f0"}
  activeColor={darkMode ? "#a855f7" : "#7c3aed"}
  proximity={120}
  bulgeStrength={30}
/>


      <BrowserRouter>
  <CardNav
    logo="/images/icons/cute-squirrel-logo-continuous-line-vector-24234455.avif"
    logoAlt="Portfolio Logo"
    items={navItems}
    baseColor={darkMode ? '#1a1a1a' : '#ffffff'}
    menuColor={darkMode ? '#ffffff' : '#000000'}
    buttonBgColor={darkMode ? '#ffffff' : '#111'}
    buttonTextColor={darkMode ? '#000000' : '#fff'}
    ease="power3.out"
  />

  {/* Theme Toggle - Fixed z-index */}
  {/* Theme Toggle */}
<div style={{ 
  position: 'fixed', 
  top: '2.5rem', 
  right: '3rem', 
  zIndex: 9999
}}>
  <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
</div>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
