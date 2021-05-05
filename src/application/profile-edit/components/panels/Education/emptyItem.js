import uuid from 'uuid/v4'

export const emptyItem = () => ({
  uuid: uuid(),
  centre: '',
  title: '',
  description: '',
  endYear: '',
  startYear: '',
})
