import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import { Button, Flex, Spacer } from '../../../ui'

const FloatingModal = styled(Modal)`
  background: #ffffff;
  box-shadow: 0 0 53px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 2rem;
`

const Title = styled.h3`
  text-align: center;
`

const FirstTimeModal = ({ isOpen }) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <FloatingModal open={open} size="tiny" dimmer="inverted">
      <Modal.Header>
        <Title>Fine tune your resume</Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Flex align="center" justify="center" direction="column">
            <p style={{ textAlign: 'center' }}>
              In this section you can add/remove stuff from your resume. If you
              change your mind,
              <b> you can always come back later to edit it.</b>
            </p>
            <Spacer height={16} />
            <p style={{ textAlign: 'center' }}>
              Once you are happy with what you have, head to
              <b> &quot;Designs&quot;</b>
              on the top navigation bar and choose your favorite one!
            </p>
            <Spacer height={16} />
            <Button primary onClick={() => setOpen(false)} id="onboarding_finish">
              Ok got it
              {' '}
              <span role="img" aria-label="thumbs up">👍🏻</span>
            </Button>
          </Flex>
        </Modal.Description>
      </Modal.Content>
    </FloatingModal>
  )
}

FirstTimeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default FirstTimeModal
