import { useEffect } from 'react'
import {
  Header,
  Home,
  About,
  Projects,
  Contact
} from './components/components.io'
import { useAppContext } from './context/appContext'

const App: React.FC = () => {
  const { darkMode, resizeWindow } = useAppContext()

  const handleWindowResize = () => {
    resizeWindow({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div className={darkMode ? 'dark-mode app' : 'light-mode app'}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
