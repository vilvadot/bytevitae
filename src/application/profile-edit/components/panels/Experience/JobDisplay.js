import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '../../../../../ui'
import ItemEditable from '../../ItemEditable'

const Title = styled.h4`
  margin-bottom: 8px;
`

const JobDisplay = ({ values, onEdit }) => {
  const {
    company, description, role, endMonth, startMonth, endYear, startYear,
  } = values

  const startDate = `${startMonth} ${startYear}`
  const endDate = endYear ? `${endMonth} ${endYear}` : 'Present'

  return (
    <ItemEditable onClick={onEdit}>
      <Flex direction="column" style={{ width: '100%', paddingRight: '2rem' }}>
        <Title>
          {`${role}, ${company} (${startDate || ''} ${endDate ? ` - ${endDate}` : ''})`}
        </Title>
        {description && <p>{description}</p>}
      </Flex>
    </ItemEditable>
  )
}

JobDisplay.propTypes = {
  onEdit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default JobDisplay
