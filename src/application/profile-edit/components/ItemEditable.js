import React from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Segment } from '../../../ui'

const ItemEditable = ({ children, ...props }) => (
  <Segment {...props}>
    {children}
    <FontAwesomeIcon icon={faPencilAlt} className="button--edit" />
  </Segment>
)

ItemEditable.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ItemEditable
