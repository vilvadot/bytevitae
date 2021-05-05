import React, { createRef, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Field } from './Field'

const RemoveButton = styled(Button)`
  &&& {
    height: 36px;
    &:hover {
      opacity: 0.7;
    }
  }
`

const RemovableField = styled(Field)`
  display: flex;
  align-items: center;
  input {
    margin-right: 8px;
  }
`

export const RemovableInput = ({
  onRemove,
  onChange,
  isLast = false,
  value,
  onEnter,
  ...props
}) => {
  const inputRef = createRef()

  useEffect(() => {
    if (!value) {
      inputRef.current.focus()
    }
  }, [isLast]) // eslint-disable-line

  const preventEnterSubmit = (e) => {
    const isEnterKey = e.charCode === 13
    if (isEnterKey) {
      if (isLast) {
        onEnter()
      }
      e.preventDefault()
    }
  }

  return (
    <RemovableField>
      <input
        {...props}
        value={value}
        ref={inputRef}
        style={{ marginRight: '8px' }}
        onChange={e => onChange(e.target.value)}
        onKeyPress={preventEnterSubmit}
      />
      <RemoveButton type="button" onClick={onRemove} negative circular basic size="tiny">
        <FontAwesomeIcon icon={faTimes} />
      </RemoveButton>
    </RemovableField>
  )
}

RemovableInput.propTypes = {
  value: PropTypes.any.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
  isLast: PropTypes.bool,
}

RemovableInput.defaultProps = {
  onEnter: () => {},
  isLast: false,
}
