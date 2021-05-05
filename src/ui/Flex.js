import styled from 'styled-components'

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: ${({ padding }) => padding || '0'};
  align-items: ${({ align }) => align || 'inherit'};
  justify-content: ${({ justify }) => justify || 'inherit'};
`
