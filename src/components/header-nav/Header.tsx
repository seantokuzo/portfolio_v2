import { useAppContext } from '../../context/appContext'
import DarkModeToggle from './DarkModeToggle'
import HamburgerNav from './HamburgerNav'
import HeaderNav from './HeaderNav'

const Header: React.FC = () => {
  const { windowSize } = useAppContext()

  console.log(windowSize)

  return (
    <header className="header" id="home">
      {windowSize.width > 480 && <HeaderNav />}
      {windowSize.width <= 480 && <HamburgerNav />}
      {/* <DarkModeToggle /> */}
    </header>
  )
}

export default Header
