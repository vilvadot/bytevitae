import React from 'react'
import styled from 'styled-components'
import { Select } from 'semantic-ui-react'

const MonthSelect = styled(Select)`
  &&&& {
    background: var(--grey-light);
    border: none;
    width: 100%;
  }
`

const Months = [
  { key: 'January', value: 'January', text: 'January' },
  { key: 'February', value: 'February', text: 'February' },
  { key: 'March', value: 'March', text: 'March' },
  { key: 'April', value: 'April', text: 'April' },
  { key: 'May', value: 'May', text: 'May' },
  { key: 'June', value: 'June', text: 'June' },
  { key: 'July', value: 'July', text: 'July' },
  { key: 'August', value: 'August', text: 'August' },
  { key: 'September', value: 'September', text: 'September' },
  { key: 'October', value: 'October', text: 'October' },
  { key: 'November', value: 'November', text: 'November' },
  { key: 'December', value: 'December', text: 'December' },
]

export const MonthSelector = props => <MonthSelect placeholder="Month" options={Months} {...props} />
