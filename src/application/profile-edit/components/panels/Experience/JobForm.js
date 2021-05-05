import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import {
  Field, Flex, Spacer, MonthSelector,
} from '../../../../../ui'
import { emptyItem } from './emptyItem'

const JobForm = ({ values = emptyItem(), onChange }) => {
  const [item, setItem] = useState(values)
  const {
    role, startYear, startMonth, endMonth, endYear, company, description,
  } = item

  const setState = (newState) => {
    setItem(newState)
    onChange(newState)
  }

  const handleChange = (key, value) => {
    const updated = {
      ...item,
      [key]: value,
    }
    setState(updated)
  }

  const currentYear = new Date().getFullYear()
  return (
    <Form>
      <Field>
        <label htmlFor="role">
          Role
          <input
            id="role"
            name="role"
            type="text"
            onChange={e => handleChange('role', e.target.value)}
            value={role}
          />
        </label>
        <Flex direction="column">
          Start date
          <br />
          <Flex>
            <MonthSelector
              onChange={(e, data) => handleChange('startMonth', data.value)}
              value={startMonth}
            />
            <input
              name="startYear"
              onChange={e => handleChange('startYear', e.target.value)}
              type="number"
              placeholder="Year"
              step="1"
              min="1950"
              max={currentYear}
              value={startYear}
            />
          </Flex>
          <Spacer height={16} />
        </Flex>
        <Flex direction="column">
          End date
          <br />
          <Flex>
            <MonthSelector
              onChange={(e, data) => handleChange('endMonth', data.value)}
              value={endMonth}
            />
            <input
              name="endYear"
              onChange={e => handleChange('endYear', e.target.value)}
              type="number"
              placeholder="Year"
              step="1"
              min="1950"
              max={currentYear}
              value={endYear}
            />
          </Flex>
          <Spacer height={16} />
        </Flex>
        <label htmlFor="company">
          Company
          <input
            id="company"
            name="company"
            type="text"
            onChange={e => handleChange('company', e.target.value)}
            value={company}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            rows="4"
            id="description"
            name="description"
            type="text"
            onChange={e => handleChange('description', e.target.value)}
            value={description}
          />
        </label>
      </Field>
    </Form>
  )
}

JobForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default JobForm
