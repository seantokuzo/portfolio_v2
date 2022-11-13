import { useReducer, useContext, createContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'

enum ThemeColor {
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  purple = 'purple',
  blue = 'blue',
  vanilla = 'vanilla'
}

export interface StateInterface {
  darkMode: boolean
  themeColor: string
}

const initialState: StateInterface = {
  darkMode: true,
  themeColor: 'blue'
}

interface AppContextInterface extends StateInterface {
  toggleDarkMode: () => void
  changeThemeColor: (color: ThemeColor) => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  toggleDarkMode: () => null,
  changeThemeColor: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.TOGGLE_DARK_MODE })
  }

  const changeThemeColor = (color: string) => {
    dispatch({ type: ActionType.CHANGE_THEME_COLOR, payload: { color } })
  }

  return (
    <AppContext.Provider value={{ ...state, toggleDarkMode, changeThemeColor }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface
}

export { initialState, AppContextProvider, useAppContext }
