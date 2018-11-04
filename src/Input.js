import styled from 'styled-components'

import {borderColor, color, space, fontSize, width} from 'styled-system'

import theme from './theme'

export const Input = styled.input`
  appearance: none;
  border: thin solid;
  outline: none;
  border-radius: 6px;

  &:hover {
    border-color: ${theme.colors.grays[3]};
  }

  &:focus {
    border-color: ${theme.colors.blues[5]};
  }

  ${borderColor}
  ${color}
  ${fontSize}
  ${space}
  ${width}
`

Input.displayName = 'unified.Input'
Input.defaultProps = {
  bg: 'transparent',
  borderColor: 'grays.1',
  p: 2,
  fontSize: 2
}
