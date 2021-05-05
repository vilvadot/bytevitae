import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'
import media from '../utilities/media'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  ${({ center }) => center
    && `
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
  ${media.mobile`
    padding: 1rem;
  `}

`

export const View = ({
  isLoading, children, center, ...props
}) => {
  if (isLoading) {
    return (
      <Container center>
        <Loader active inline>
          Loading...
        </Loader>
      </Container>
    )
  }
  return <Container center={center} {...props}>{children}</Container>
}

View.propTypes = {
  isLoading: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

View.defaultProps = {
  isLoading: false,
  center: false,
}

export default View
