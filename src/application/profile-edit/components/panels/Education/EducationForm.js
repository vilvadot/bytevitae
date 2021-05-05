import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { Field, Flex } from '../../../../../ui'
import { emptyItem } from './emptyItem'

const EducationForm = ({ values = emptyItem(), onChange }) => {
  const [item, setItem] = useState(values)
  const {
    title, centre, startYear, endYear, description,
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

  return (
    <Form>
      <Field style={{ width: '100%' }}>
        <Flex>
          <Flex direction="column">
            <label htmlFor="title">
              Title
              <input
                id="title"
                name="title"
                type="text"
                onChange={e => handleChange('title', e.target.value)}
                value={title}
              />
            </label>
            <Flex>
              <label htmlFor="startYear">
                Start Year
                <input
                  id="startYear"
                  name="startYear"
                  type="number"
                  min="1900"
                  max="2099"
                  step="1"
                  onChange={e => handleChange('startYear', e.target.value)}
                  value={startYear}
                />
              </label>
              <label htmlFor="endYear">
                End Year
                <input
                  id="endYear"
                  name="endYear"
                  type="number"
                  min="1900"
                  max="2099"
                  step="1"
                  onChange={e => handleChange('endYear', e.target.value)}
                  value={endYear}
                />
              </label>
            </Flex>
            <label htmlFor="centre">
              School/centre
              <input
                id="centre"
                name="centre"
                type="text"
                onChange={e => handleChange('centre', e.target.value)}
                value={centre}
              />
            </label>
            <label htmlFor="description">
              Description
              <textarea
                rows="3"
                id="description"
                name="description"
                type="text"
                onChange={e => handleChange('description', e.target.value)}
                value={description}
              />
            </label>
          </Flex>
        </Flex>
      </Field>
    </Form>
  )
}

EducationForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    centre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
  }).isRequired,
}

export default EducationForm
