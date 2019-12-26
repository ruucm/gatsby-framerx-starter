import * as React from 'react'
import { addPropertyControls, ControlType } from 'framer'
import * as System from '../../design-system'
import { themes } from '../../base'

const defaultThemeOptions = Object.keys(themes)
const themeOptions = ['automatic', ...defaultThemeOptions]

export function Button(props) {
  return <System.Button {...props} />
}

Button.defaultProps = { ...System.Button.defaultProps, width: 150, height: 48 }
addPropertyControls(Button, {
  theme: {
    type: ControlType.Enum,
    title: 'Theme',
    options: themeOptions,
    optionTitles: themeOptions.map(themeOption => themeOption),
  },
  text: {
    type: ControlType.String,
  },
})
