import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Flex } from '../../../../../ui'
import ItemEditable from '../../ItemEditable'

const Title = styled.h4`
  margin-bottom: 8px;
`

const EducationDisplay = ({ values, onEdit }) => {
  const {
    centre, title, description, endYear, startYear,
  } = values

  return (
    <ItemEditable onClick={onEdit}>
      <Flex direction="column" style={{ width: '100%', paddingRight: '2rem' }}>
        <Title>{`${title}, ${centre} (${startYear}${endYear && ` - ${endYear || 'present'}`})`}</Title>
        {description && <p>{description}</p>}
      </Flex>
      <FontAwesomeIcon icon={faPencilAlt} className="button--edit" />
    </ItemEditable>
  )
}

EducationDisplay.propTypes = {
  onEdit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    centre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
  }).isRequired,
}

export default EducationDisplay
