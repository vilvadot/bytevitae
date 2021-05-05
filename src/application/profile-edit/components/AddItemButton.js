import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

const AddButton = styled(Button)`
  &&& {
    width: 100%;
    height: 60px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`

const AddItemButton = ({ children, ...props }) => (
  <AddButton type="button" basic positive {...props}>
    <FontAwesomeIcon icon={faPlusSquare} fixedWidth />
    <span>{children || 'Add Item'}</span>
  </AddButton>
)

AddItemButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AddItemButton
