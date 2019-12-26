import { localStorageSevice } from '../../base/utils'

const [storedValue, setValue] = localStorageSevice('theme', 'light')
const reducer = (
  //  set initial state(theme) using localStorageSevice
  state = {
    theme: storedValue,
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      setValue(newTheme)
      return Object.assign({}, state, { theme: newTheme })
    case 'SET_THEME':
      setValue(action.payload)
      return Object.assign({}, state, {
        theme: action.payload,
      })
    default:
      return state
  }
}

export default reducer
