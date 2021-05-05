import uuid from 'uuid/v4'

export const emptyItem = () => ({
  uuid: uuid(),
  company: '',
  role: '',
  description: '',
  endMonth: '',
  endYear: '',
  startYear: '',
  startMonth: '',
})
