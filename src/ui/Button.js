import styled, { css } from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'

export const Button = styled(SemanticButton)`
  &&&& {
    text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
    padding: 1rem 3rem;
    min-width: 180px;
    ${({ primary }) => primary
      && css`
        background-image: linear-gradient(270deg, #84279e 0%, #d72eec 100%);
        box-shadow: 0 0 10px 2px rgba(182, 32, 224, 0.6);
        transition: box-shadow 0.2s ease-in-out;
        transition: transform 0.1s ease-in-out;
        color: white;
        &:hover {
          transform: scale(1.05, 1.05);
          box-shadow: 0 0 10px 2px rgba(182, 32, 224, 0.6);
        }
      `};
      ${({ success }) => success
      && css`
        background-image: linear-gradient(270deg, green 0%, green 100%);
        box-shadow: 0 0 10px 2px green
        color: white;
        transition: box-shadow 0.2s ease-in-out;
        transition: transform 0.1s ease-in-out;
        &:hover {
          transform: scale(1.05, 1.05);
          box-shadow: 0 0 10px 2px green;
        }
      `};
  }
`

Button.defaultProps = {
  circular: true,
}
