import { useAppContext } from '../../context/appContext'

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useAppContext()
  const toggleButton = (
    <button className="toggle-btn" aria-label="toggle" onClick={toggleDarkMode}>
      <i className="fa-solid fa-moon toggle-moon toggle-icon"></i>
      <i className="fa-solid fa-sun toggle-sun toggle-icon"></i>
    </button>
  )

  return (
    <div className={darkMode ? 'toggle toggle-on' : 'toggle'}>
      {toggleButton}
    </div>
  )
}

export default DarkModeToggle
