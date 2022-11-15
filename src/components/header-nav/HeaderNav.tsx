const HeaderNav: React.FC = () => {
  return (
    <nav className="header-navbar">
      <ul className="header-navbar__list">
        <li className="header-navbar__item">
          <a href="#home" className="header-navbar__link">
            Home
          </a>
        </li>
        <li className="header-navbar__item">
          <a href="#about" className="header-navbar__link">
            About Me
          </a>
        </li>
        <li className="header-navbar__item">
          <a href="#projects" className="header-navbar__link">
            Projects
          </a>
        </li>
        <li className="header-navbar__item">
          <a href="#contact" className="header-navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
