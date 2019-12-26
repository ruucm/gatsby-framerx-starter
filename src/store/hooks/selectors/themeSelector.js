import { createSelector } from 'reselect'

export const getTheme = createSelector(
  state => state.app,
  appStates => appStates.theme
)
