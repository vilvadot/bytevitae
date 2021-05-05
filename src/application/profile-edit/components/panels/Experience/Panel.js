import React from 'react'
import PropTypes from 'prop-types'
import { uniqBy, orderBy } from 'lodash'
import JobForm from './JobForm'
import JobDisplay from './JobDisplay'
import PanelHeader from '../../PanelHeader'
import EmptyState from '../../EmptyState'
import ModalCRUD from '../../ModalCRUD'
import { useItemCRUD } from '../../../../../hooks'
import { emptyItem } from './emptyItem'

const Experience = ({ values, isActive }) => {
  const updateFormValues = (updatedValues) => {
    values.experience = uniqBy(updatedValues.reverse(), 'uuid') // eslint-disable-line
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
  } = useItemCRUD(values.experience, emptyItem(), updateFormValues)

  const itemsOrderedByDate = orderBy(items, 'startYear', 'desc')

  if (!isActive) return null

  return (
    <>
      <PanelHeader title="Experience" />
      {itemsOrderedByDate.map(item => (
        <JobDisplay values={item} onEdit={() => handleEdit(item)} key={item.uuid} />
      ))}
      {!items.length && (
        <EmptyState>
          Your past experience is useful to show what achievements, responsibilities and goals you
          have acomplished in the past.
        </EmptyState>
      )}
      <ModalCRUD
        size="tiny"
        open={isModalOpen}
        title="Work experience"
        triggerMessage="Add experience"
        onClose={toggleModal}
        onTrigger={toggleModal}
        onSave={handleSave}
        onDelete={handleDelete}
      >
        <JobForm onChange={handleChange} values={activeItem} />
      </ModalCRUD>
    </>
  )
}

Experience.defaultProps = {
  values: {
    experience: [],
  },
  isActive: PropTypes.bool,
}

Experience.propTypes = {
  values: PropTypes.shape({
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        role: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  }),
  isActive: PropTypes.bool,
}

export default Experience
