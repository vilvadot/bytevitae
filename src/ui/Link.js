import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Anchor = styled(({ isActive, ...props }) => <RouterLink {...props} />)`
  ${({ isActive }) => isActive && 'color: var(--primary-color) !important'}
`

export const Link = ({ children, isActive, ...props }) => (
  <Anchor isActive={isActive} {...props}>
    {children}
  </Anchor>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
}

Link.defaultProps = {
  isActive: false,
}
