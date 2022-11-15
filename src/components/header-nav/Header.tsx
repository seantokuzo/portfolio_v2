import { useAppContext } from '../../context/appContext'
import HamburgerNav from './HamburgerNav'
import HeaderNav from './HeaderNav'

const Header: React.FC = () => {
  const { windowSize } = useAppContext()

  console.log(windowSize)

  return (
    <header className="header">
      {/* <HeaderNav /> */}
      <HamburgerNav />
    </header>
  )
}

export default Header
