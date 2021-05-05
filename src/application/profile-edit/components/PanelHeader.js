import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const TooltipIcon = styled.span`
  font-size: 12px;
  margin-left: 8px;
  color: var(--grey-dark);
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  svg {
    margin-right: 8px;
  }
  h3 {
    margin-top: 16px;
    margin-bottom: 0;
    margin-right: 24px;
  }
`

const PanelHeader = ({
  children,
  title = '',
  description = '',
  tooltip = '',
}) => {
  const popup = (
    <Popup
      position="bottom left"
      content={tooltip}
      trigger={(
        <TooltipIcon>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </TooltipIcon>
)}
    />
  )
  return (
    <Header title="Basic Information">
      <div>{children}</div>
      {title && (
        <h3>
          {title}
          {tooltip && popup}
        </h3>
      )}
      {description && <p>{description}</p>}
    </Header>
  )
}

PanelHeader.defaultProps = {
  children: null,
  description: '',
  tooltip: '',
}

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  description: PropTypes.string,
  tooltip: PropTypes.string,
}

export default PanelHeader
