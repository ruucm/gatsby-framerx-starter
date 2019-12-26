import * as React from 'react'
import { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { Text } from './Text'
import { themes } from '../../base'

export function Button({ text, theme, onClick, ...props }) {
  const selectedTheme = useContext(ThemeContext) || themes[theme]
  const locale =
    typeof text === 'string' ? (text.match(/[A-Za-z0-9]/) ? 'en' : 'ko') : 'en' // check the text is en or ko

  const Wrap = styled.button`
    font-family: ${selectedTheme.font.type1};
    color: ${selectedTheme.color.buttonText};
    width: 150px;
    height: 48px;
    overflow: visible;
    background: linear-gradient(270deg, #6222e2 0%, rgba(134, 7, 255, 1) 100%);
    border-radius: 28px;
    box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.15);
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    @media (max-width: 414px) {
      width: 130px;
      height: 48px;
    }
  `
  return (
    <Wrap onClick={onClick}>
      <Text type="Button" text={text} align="center" />
    </Wrap>
  )
}

Button.defaultProps = {
  text: 'Button',
  theme: 'light',
}
