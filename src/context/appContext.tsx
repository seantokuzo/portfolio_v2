import { useReducer, useContext, createContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'

type WindowSize = {
  width: number
  height: number
}

export interface StateInterface {
  windowSize: WindowSize
  darkMode: boolean
}

const initialState: StateInterface = {
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  darkMode: true
}

interface AppContextInterface extends StateInterface {
  resizeWindow: (newWindowSize: WindowSize) => void
  toggleDarkMode: () => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  resizeWindow: () => null,
  toggleDarkMode: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.TOGGLE_DARK_MODE })
  }

  const resizeWindow = (newWindowSize: { width: number; height: number }) => {
    dispatch({ type: ActionType.RESIZE_WINDOW, payload: { newWindowSize } })
  }

  return (
    <AppContext.Provider value={{ ...state, toggleDarkMode, resizeWindow }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface
}

export { initialState, AppContextProvider, useAppContext }
