import { css } from 'styled-components'

export const makeFloating = color => css`
  transition: box-shadow 0.3s ease-in-out;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 10px 2px ${color || 'rgba(0, 0, 0, 0.5)'};
  }
`
