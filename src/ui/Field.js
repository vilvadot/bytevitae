import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

export const Field = styled(Form.Field)`
  &&&& {
    &:first-letter {
      text-transform: capitalize;
    }
    label {
      width: 100%;
      font-weight: lighter;
      margin-bottom: 16px;
    }
    input, textarea {
      border-color: white;
      background: var(--grey-light);

      &:focus{
        border-color: var(--primary-color);
      }
    }
  }
`
