import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSpacer = styled.div`
  height: ${({ height }) => height}px;
`

export const Spacer = ({ height }) => <StyledSpacer height={height} />

Spacer.propTypes = {
  height: PropTypes.number,
}

Spacer.defaultProps = {
  height: 0,
}
