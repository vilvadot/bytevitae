import React from 'react'
import pdf from '@react-pdf/styled-components'
import PropTypes from 'prop-types'
import publicFile from '../../../../../../utilities/publicFile'
import { Flex } from '../../../components'

const Icon = pdf.Image`
  height:24px;
  width:24px;
  margin-right:4px;
`
const Text = pdf.Text`
  font-size:18px;
  font-family: "Raleway-regular";
`

export const Title = ({ children, icon }) => (
  <Flex align="center" justify="flex-start">
    {icon && <Icon src={icon || publicFile('icon.jpg')} />}
    <Text>{children}</Text>
  </Flex>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
