import { useState } from 'react'

export const useCrud = (initialValues, emptyItem, updateCallback) => {
  const [items, setItems] = useState(initialValues)

  const updateState = (value) => {
    setItems(value)
    updateCallback(value)
  }

  const handleItemAdd = () => {
    const newItems = [...items, emptyItem]
    updateState(newItems)
  }

  const handleItemRemove = (index) => {
    const updated = [...items]
    updated.splice(index, 1)

    updateState(updated)
  }

  const handleItemChange = (value, index) => {
    const updated = [...items]
    updated.splice(index, 1, value)

    updateState(updated)
  }

  return {
    items,
    handleItemAdd,
    handleItemRemove,
    handleItemChange,
  }
}

export default useCrud
