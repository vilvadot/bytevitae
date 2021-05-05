import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { Popup } from 'semantic-ui-react'

const PreviewIcon = styled.a`
  color: black;
  margin: 0 4px;
  opacity: .4;
  &:hover {
    color: black;
    opacity: 1;
  }
`

const TemplateSampleButton = ({ href, onClick }) => {
  if (!href) return null
  const EyeButton = (
    <PreviewIcon href={href} target="_blank" onClick={onClick}>
      <FontAwesomeIcon icon={faEye} />
    </PreviewIcon>
  )
  return <Popup position="bottom left" content="Download sample" trigger={EyeButton} />
}

TemplateSampleButton.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TemplateSampleButton
