import React from 'react'
import PropTypes from 'prop-types'
import { RemovableInput } from '../../../../../ui'
import { useCrud } from '../../../../../hooks/useCrud'
import PanelHeader from '../../PanelHeader'
import EmptyState from '../../EmptyState'
import { skillTypes } from './types'
import AddItemButton from '../../AddItemButton'

const Skills = ({ values, isActive }) => {
  const maxSkills = 15

  const filterValues = skills => skills.filter(el => el.length)

  const updateFormValues = (updatedValues) => {
    values.topics = filterValues(updatedValues) // eslint-disable-line no-param-reassign
  }

  const {
    items, handleItemAdd, handleItemRemove, handleItemChange,
  } = useCrud(
    values.topics,
    '',
    updateFormValues,
  )

  const skillQuantity = items ? items.length : 0
  const isMaxSkills = skillQuantity === maxSkills

  const addSkill = () => {
    if (!isMaxSkills) {
      handleItemAdd()
    }
  }

  if (!isActive) return null
  return (
    <>
      <PanelHeader
        title="Skills"
        tooltip="Here you can include any random skills you might want to highlight in
          your resume."
      />
      {items.map((skill, id) => (
        <RemovableInput
          isLast={id === items.length - 1}
          placeholder="Skill"
          key={id}
          type="text"
          name="skill"
          onChange={value => handleItemChange(value, id)}
          value={skill}
          onRemove={() => handleItemRemove(id)}
          onEnter={addSkill}
        />
      ))}
      {!items.length && (
        <EmptyState>
          Here you can include any skills you might want to highlight in your resume.
        </EmptyState>
      )}
      <AddItemButton onClick={addSkill} disabled={isMaxSkills}>{`Add skill (${skillQuantity}/${maxSkills})`}</AddItemButton>
    </>
  )
}

Skills.defaultProps = {
  values: {
    skills: [],
  },
  isActive: PropTypes.bool,
}

Skills.propTypes = {
  values: PropTypes.shape({
    skills: PropTypes.arrayOf(skillTypes),
  }),
  isActive: PropTypes.bool,
}

export default Skills
