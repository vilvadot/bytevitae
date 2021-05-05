import styled from 'styled-components'

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background: #ffffff;
  box-shadow: 0 0 53px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: ${({ padding }) => padding || '3rem'};
  margin: 0 16px;
  img {
    width: 120px;
  }
`
