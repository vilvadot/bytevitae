import React from 'react'
import PropTypes from 'prop-types'
import { uniqBy, orderBy } from 'lodash'
import PanelHeader from '../../PanelHeader'
import EmptyState from '../../EmptyState'
import EducationForm from './EducationForm'
import EducationDisplay from './EducationDisplay'
import { emptyItem } from './emptyItem'
import ModalCRUD from '../../ModalCRUD'
import { useItemCRUD } from '../../../../../hooks'


const Education = ({ values, isActive }) => {
  const updateFormValues = (updatedValues) => {
    values.education = uniqBy(updatedValues.reverse(), 'uuid') // eslint-disable-line
  }

  const {
    items,
    handleChange,
    handleEdit,
    handleDelete,
    handleSave,
    toggleModal,
    isModalOpen,
    activeItem,
  } = useItemCRUD(values.education, emptyItem(), updateFormValues)
  const itemsOrderedByDate = orderBy(items, 'startYear', 'desc')

  if (!isActive) return null

  return (
    <>
      <PanelHeader title="Education" />
      {itemsOrderedByDate.map(item => (
        <EducationDisplay values={item} onEdit={() => handleEdit(item)} key={item.uuid} />
      ))}
      {!items.length && (
        <EmptyState>Got any degrees or titles?</EmptyState>
      )}
      <ModalCRUD
        size="tiny"
        open={isModalOpen}
        title="Education"
        triggerMessage="Add education"
        onClose={toggleModal}
        onTrigger={toggleModal}
        onSave={handleSave}
        onDelete={handleDelete}
      >
        <EducationForm onChange={handleChange} values={activeItem} />
      </ModalCRUD>
    </>
  )
}

Education.defaultProps = {
  values: {
    education: [],
  },
  isActive: PropTypes.bool,
}

Education.propTypes = {
  values: PropTypes.shape({
    education: PropTypes.arrayOf(
      PropTypes.shape({
        centre: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        endYear: PropTypes.string.isRequired,
        startYear: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }),
  isActive: PropTypes.bool,
}

export default Education
