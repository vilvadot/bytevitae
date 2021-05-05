import React from 'react'
import PropTypes from 'prop-types'

export const Loader = ({ isLoading, children }) => {
  if (isLoading) return <p>Loading...</p>
  return children
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
