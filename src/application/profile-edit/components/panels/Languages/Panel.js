import React from 'react'
import PropTypes from 'prop-types'
import { RemovableInput } from '../../../../../ui'
import { useCrud } from '../../../../../hooks/useCrud'
import PanelHeader from '../../PanelHeader'
import EmptyState from '../../EmptyState'
import { languageTypes, empty } from './types'
import AddItemButton from '../../AddItemButton'

const Languages = ({ values, isActive }) => {
  const filterValues = vals => vals.filter(el => el.name)

  const updateFormValues = (updatedValues) => {
    values.languages = filterValues(updatedValues) // eslint-disable-line
  }

  const {
    items, handleItemAdd, handleItemRemove, handleItemChange,
  } = useCrud(
    values.languages,
    empty,
    updateFormValues,
  )

  if (!isActive) return null
  return (
    <>
      <PanelHeader title="Languages" />
      {items.map((language, id) => (
        <RemovableInput
          isLast={id === items.length - 1}
          placeholder="Language (Proficiency)"
          key={language}
          type="text"
          name="language"
          onEnter={handleItemAdd}
          onChange={value => handleItemChange(
            {
              name: value,
            },
            id,
          )
          }
          value={language.name}
          onRemove={() => handleItemRemove(id)}
        />
      ))}
      {!items.length && <EmptyState>English, Spanish, Portuguese... Klingon?</EmptyState>}
      <AddItemButton onClick={handleItemAdd}>Add Language</AddItemButton>
    </>
  )
}

Languages.defaultProps = {
  values: {
    languages: [],
  },
  isActive: PropTypes.bool,
}

Languages.propTypes = {
  values: PropTypes.shape({
    languages: PropTypes.arrayOf(languageTypes),
  }),
  isActive: PropTypes.bool,
}

export default Languages
