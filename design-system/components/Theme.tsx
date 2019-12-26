import * as React from 'react'
import { isValidElement, cloneElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { themes } from '../../base'

const defaultThemeOptions = Object.keys(themes)

export function Theme({ children, background, theme }) {
  const selectedTheme =
    themes[defaultThemeOptions.indexOf(theme) >= 0 ? theme : '']
  const [child] = children
  return (
    <ThemeProvider theme={selectedTheme}>
      {child && (
        <motion.div
          style={{
            width: '100%',
            height: '100%',
          }}
          animate={{
            background: selectedTheme.color.background || background,
          }}
          transition={selectedTheme.transitions.long}
        >
          {React.Children.map(
            children,
            child => isValidElement(child) && cloneElement(child)
          )}
        </motion.div>
      )}
    </ThemeProvider>
  )
}

Theme.defaultProps = {
  theme: 'light',
}
