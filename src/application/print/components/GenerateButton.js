import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'
import PDFGenerator from './PDFGenerator'
import CTA from './CTA'
import { Flex } from '../../../ui'

const ButtonMessage = ({ isLoading, isReady }) => {
  if (isLoading) return <Loader inline active inverted size="tiny" />
  if (isReady) {
    return (
      <span>
        3. Download
      </span>
    )
  }

  return (
    <span>
      2. Generate PDF
    </span>
  )
}

ButtonMessage.propTypes = {
  isReady: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const GenerateButton = ({ template, data }) => (
  <Flex align="center" justify="center">
    <PDFGenerator data={data} templateName={template}>
      {(isReady, isLoading) => (
        <CTA success={isReady} disabled={isLoading}>
          <ButtonMessage isLoading={isLoading || false} isReady={isReady} />
        </CTA>
      )}
    </PDFGenerator>
  </Flex>
)

GenerateButton.propTypes = {
  data: PropTypes.object.isRequired,
  template: PropTypes.string.isRequired,
}

export default GenerateButton
