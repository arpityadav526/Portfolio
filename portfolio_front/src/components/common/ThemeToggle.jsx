import './ThemeToggle.css'

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <label className="switch">
      <input 
        className="cb" 
        type="checkbox" 
        checked={darkMode}
        onChange={toggleTheme}
      />
      <span className="toggle">
        <span className="left">light</span>
        <span className="right">dark</span>
      </span>
    </label>
  )
}

export default ThemeToggle