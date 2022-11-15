import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

const HamburgerNav: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false)

  const closeNav = () => setDisplayNav(false)
  return (
    <div className={displayNav ? 'nav-div nav-open' : 'nav-div'} id="top">
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => setDisplayNav(!displayNav)}
      >
        <div className="hamburger"></div>
      </button>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item" onClick={closeNav}>
            <a href="#top" className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#about" className="navbar__link">
              About Me
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#projects" className="navbar__link">
              Projects
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
    </div>
  )
}

export default HamburgerNav
