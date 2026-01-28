import {Link} from 'react-router-dom';
import ThemeToggle from './ThemeToggle'
import './navbar.css'
import './ThemeToggle.css'


function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav>
      <h2>My Portfolio</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Navbar