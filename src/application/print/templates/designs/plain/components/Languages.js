import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Text, Spacer } from '../../../components'
import { Title } from './Title'

const renderLanguages = languages => languages.map(language => (
  <Fragment key={language.name}>
    <Spacer height={8} />
    <Text color="#888" fontSize={10}>
      {language.name}
    </Text>
  </Fragment>
))

export const Languages = ({ languages }) => {
  if (!languages.length) return <Fragment />
  return (
    <>
      <Title>LANGUAGES</Title>
      {renderLanguages(languages)}
    </>
  )
}

Languages.propTypes = {
  languages: PropTypes.array,
}

Languages.defaultProps = {
  languages: [],
}
