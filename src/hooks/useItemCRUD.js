import { useState } from 'react'

export const useItemCRUD = (items, blankItem, updateCallback, isModalOpenInitially) => {
  const [activeItem, setActiveItem] = useState(blankItem)
  const [isModalOpen, openModal] = useState(isModalOpenInitially)

  const toggleModal = () => {
    openModal(!isModalOpen)
    if (!isModalOpen) {
      setActiveItem(blankItem)
    }
  }

  const handleChange = (item) => {
    setActiveItem(item)
  }

  const handleSave = () => {
    updateCallback([...items, activeItem])
    toggleModal()
  }

  const handleEdit = (itemToEdit) => {
    toggleModal()
    setActiveItem(itemToEdit)
  }

  const handleDelete = () => {
    const updatedValues = items.filter(n => n.uuid !== activeItem.uuid)
    updateCallback(updatedValues)
    toggleModal()
  }

  return {
    items,
    activeItem,
    toggleModal,
    isModalOpen,
    handleChange,
    handleEdit,
    handleDelete,
    handleSave,
  }
}
