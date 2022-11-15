import { ActionType } from './actions'
import { StateInterface } from './appContext'

type Action =
  | { type: ActionType.TOGGLE_DARK_MODE }
  | {
      type: ActionType.RESIZE_WINDOW
      payload: { newWindowSize: { width: number; height: number } }
    }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case ActionType.RESIZE_WINDOW:
      return {
        ...state,
        windowSize: action.payload.newWindowSize
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
