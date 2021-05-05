import styled, { css } from 'styled-components'

const CTA = styled.button`
  &&&& {
    font-weight: bold;
    min-width: 160px;
    padding: 1em 3em;
    color: white;
    border: none;
    background-image: linear-gradient(270deg, #84279e 0%, #d72eec 100%);
    box-shadow: 0 0 10px 2px rgba(182, 32, 224, 0.62);
    border-radius: 100px;
    max-width: 250px;
    margin: auto;
    transition: box-shadow 0.3s ease-in-out;
    transition: transform 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.05, 1.05);
      box-shadow: 0 0 10px 2px rgba(182, 32, 224, 0.62);
    }
    ${({ success }) => success
      && css`
        background-image: linear-gradient(270deg, #277c23 0%, #97ec2e 100%);
        box-shadow: 0 0 10px 2px rgba(159, 224, 32, 0.62);
        transition: box-shadow 0.3s ease-in-out;
        transition: transform 0.2s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.05, 1.05);
          box-shadow: 0 0 10px 2px rgba(159, 224, 32, 0.62);
        }
      `}
    ${({ disabled }) => disabled
      && css`
        opacity: 0.5;
        pointer-events: none;
      `}
    span {
      font-weight: bold;
    }
  }
`

export default CTA
