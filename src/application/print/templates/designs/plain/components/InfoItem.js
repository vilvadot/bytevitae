import React, { Fragment } from 'react'
import { View, Link } from '@react-pdf/renderer'
import pdf from '@react-pdf/styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components'
import { trimToSidebar } from '../../../utilities'

export const Block = pdf.View`
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-top:4px;
`

const Icon = pdf.View`
  width: 35px;
  max-height: 25px;
  padding-right:12px;
  display:flex;
  align-items: center;
  justify-content: center;
`

export const InfoItem = ({
  label, value, icon, link,
}) => {
  const valueComponent = !link ? (
    value
  ) : (
    <Link src={link}>{trimToSidebar(value)}</Link>
  )
  if (!value) return <Fragment />
  return (
    <Block style={{ marginTop: '8px' }}>
      <Icon>{icon}</Icon>
      <View>
        <Text bold style={{ maxWidth: '80px' }} align="left">
          {valueComponent}
        </Text>
        <Text grey>{label}</Text>
      </View>
    </Block>
  )
}

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  icon: PropTypes.object.isRequired,
  link: PropTypes.string,
}

InfoItem.defaultProps = {
  link: '',
}
