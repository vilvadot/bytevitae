import React from 'react'
import { Button, Modal as SUIModal } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Flex } from './Flex'

const CloseButton = styled(Button)`
  &&& {
    float: right;
    background: none;
  }
`

export const Modal = ({
  title, children, onClose, ...props
}) => (
  <SUIModal {...props}>
    <SUIModal.Header>
      <Flex justify="space-between" align="center">
        {title}
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      </Flex>
    </SUIModal.Header>
    <SUIModal.Content>
      <SUIModal.Description>{children}</SUIModal.Description>
    </SUIModal.Content>
  </SUIModal>
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  onClose: () => {},
}
