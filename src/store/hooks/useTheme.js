import { useSelector, useDispatch } from 'react-redux'
import { getTheme } from './selectors/themeSelector'

export default function hook() {
  const theme = useSelector(getTheme)
  const dispatch = useDispatch()
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' })
  const setTheme = payload => dispatch({ type: 'SET_THEME', payload })
  return [theme, toggleTheme, setTheme]
}
