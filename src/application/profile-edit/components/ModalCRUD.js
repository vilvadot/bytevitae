import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { Modal, Flex } from '../../../ui'
import AddItemButton from './AddItemButton'

const SaveButton = styled(Button)`
  &&& {
    width: 150px;
    margin: auto;
  }
`

const DeleteButton = styled.a`
  font-size: 12px;
  font-weight: regular;
  color: red;
  background: none
  margin-top: 16px;
  justify-self: end;
  &:hover{
    cursor:pointer;
    opacity: .9;
  }
`

const ModalCRUD = ({
  onTrigger, onSave, onDelete, children, triggerMessage, ...props
}) => (
  <Modal
    {...props}
    trigger={<AddItemButton onClick={onTrigger}>{triggerMessage}</AddItemButton>}
    title={triggerMessage}
  >
    {children}
    <Flex justify="center">
      <SaveButton onClick={onSave} type="button" positive circular>
        Add
      </SaveButton>
      <DeleteButton onClick={onDelete} type="button">
        Delete
      </DeleteButton>
    </Flex>
  </Modal>
)

ModalCRUD.propTypes = {
  onTrigger: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  triggerMessage: PropTypes.string.isRequired,
}

export default ModalCRUD
