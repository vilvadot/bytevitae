import styled from 'styled-components'
import { Segment as SUISegment } from 'semantic-ui-react'

export const Segment = styled(SUISegment)`
  &&& {
    .button--edit {
      visibility: hidden;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      .button--edit {
        visibility: visible;
      }
    }
  }
`
