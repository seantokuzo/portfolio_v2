import { ActionType } from './actions'
import { StateInterface } from './appContext'

type Action =
  | { type: ActionType.TOGGLE_DARK_MODE }
  | { type: ActionType.CHANGE_THEME_COLOR; payload: { color: string } }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  // const reducer = () => {
  console.log(action.type)
  switch (action.type) {
    case ActionType.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case ActionType.CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload!.color
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
