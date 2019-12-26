import * as React from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import './fonts.css'
import { useContext } from 'react'
import { themes } from '../../base'

export function Text({
  className,
  text,
  align,
  width,
  type,
  color,
  theme,
  customColor,
  style,
  display,
  ...props
}) {
  const selectedTheme = useContext(ThemeContext) || themes[theme]
  const locale =
    typeof text === 'string' ? (text.match(/[A-Za-z0-9]/) ? 'en' : 'ko') : 'en' // check the text is en or ko

  const P = styled.p`
    width: ${width}px;
    display: ${display};
    text-align: ${align};
    ${props =>
      props.type === 'Heading-1' &&
      css`
        font-family: ${selectedTheme.font.type1};
        font-size: 36px;
        font-weight: 800;
        line-height: 1.2;
        color: ${selectedTheme.color.primaryText};
        @media (max-width: 414px) {
          font-size: 28px;
        }
      `}
    ${props =>
      props.type === 'Heading-2' &&
      css`
        font-family: ${selectedTheme.font.type1};
        font-weight: 700;
        font-size: 26px;
        line-height: 1.2;

        color: ${selectedTheme.color.secondaryText};
        @media (max-width: 414px) {
          font-size: 22px;
        }
      `}
    /* custom text color options */
    color: ${customColor && color};
    
  `
  return (
    <P
      className={className}
      type={type}
      dangerouslySetInnerHTML={{ __html: text }}
      style={style}
    />
  )
}

Text.defaultProps = {
  text: 'Type Text',
  align: 'left',
  display: 'inline-block',
  type: 'Heading-1',
  height: 36,
  theme: 'light',
  customColor: false,
  color: themes.light.color.primaryText, // default custom color value from light theme
}
