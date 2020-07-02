import * as React from 'react'
import styled, { css, ThemeContext, ThemeProvider } from 'styled-components'
import './fonts.css'
import { useContext } from 'react'
import { themes } from '../../base'

const P = styled.p`
text-align: ${p => p.align};
${props =>
  props.type === 'Heading-1' &&
  css`
    font-family: ${p => p.theme.font.type1};
    font-size: 36px;
    font-weight: 800;
    line-height: 1.2;
    color: ${p => p.theme.color.primaryText};
    @media (max-width: 414px) {
      font-size: 28px;
    }
  `}
${props =>
  props.type === 'Heading-2' &&
  css`
    font-family: ${p => p.theme.font.type1};
    font-weight: 700;
    font-size: 26px;
    line-height: 1.2;

    color: ${p => p.theme.color.secondaryText};
    @media (max-width: 414px) {
      font-size: 22px;
    }
  `}
/* custom text color options */
color: ${p => p.theme.customColor && p.theme.color};

`

export function Text({
  className,
  text,
  align,
  type,
  theme,
  customColor,
  color,
  style,
  ...props
}) {
  const selectedTheme = useContext(ThemeContext) || themes[theme]
  const locale =
    typeof text === 'string' ? (text.match(/[A-Za-z0-9]/) ? 'en' : 'ko') : 'en' // check the text is en or ko

  return (
    <ThemeProvider theme={selectedTheme}>
      <P
        className={className}
        type={type}
        dangerouslySetInnerHTML={{ __html: text }}
        style={style}
        align={align}
        customColor={customColor}
        color={color}
      />
    </ThemeProvider>
  )
}

Text.defaultProps = {
  text: 'Type Text',
  align: 'left',
  type: 'Heading-1',
  theme: 'light',
  customColor: false,
  color: themes.light.color.primaryText, // default custom color value from light theme
}
