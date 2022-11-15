import { useEffect } from 'react'
import {
  Header,
  Home,
  About,
  Projects,
  Contact
} from './components/components.io'
import FloatingNav from './components/header-nav/FloatingNav'
import { useAppContext } from './context/appContext'

const App: React.FC = () => {
  const { darkMode, resizeWindow } = useAppContext()

  // WINDOW RESIZE LISTENER - ATTACH / CLEANUP
  useEffect(() => {
    const handleWindowResize = () => {
      resizeWindow({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
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
      <FloatingNav />
    </div>
  )
}

export default App
