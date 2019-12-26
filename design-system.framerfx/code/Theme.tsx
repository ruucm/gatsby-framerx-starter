import * as React from 'react'
import { addPropertyControls, ControlType } from 'framer'
import * as System from '../../design-system'
import { themes } from '../../base'

const colors = Object.keys(themes.light.color)
const themeOptions = Object.keys(themes)

export function Theme(props) {
  return <System.Theme {...props} />
}

Theme.defaultProps = { ...System.Theme.defaultProps, width: 1920, height: 1080 } // add same default props from System
addPropertyControls(Theme, {
  theme: {
    type: ControlType.Enum,
    title: 'Theme',
    options: themeOptions,
    optionTitles: themeOptions.map(themeOption => themeOption),
  },
  background: {
    type: ControlType.Enum,
    title: 'Background',
    defaultValue: 'background',
    options: colors,
    optionTitles: colors.map(
      color => color.charAt(0).toUpperCase() + color.slice(1)
    ),
  },
  children: {
    type: ControlType.ComponentInstance,
    title: 'Content',
  },
})
