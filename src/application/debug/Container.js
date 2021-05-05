/* eslint-disable */
import { PDFViewer } from '@react-pdf/renderer'
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { View, Flex } from '../../ui'
import Template from '../print/templates'

const PDFPreview = styled(PDFViewer)`
  width: 1000px;
  height: 1000px;
`

class CurriculumContainer extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    templates: PropTypes.array.isRequired,
  }

  open(template) {
    window.open(`/debug/${template}`, '_self')
  }

  render() {
    const { loading, profile, templates } = this.props
    const activeTemplate = this.props.match.params.template || 'plain'
    return (
      <View isLoading={loading}>
        <Flex direction="column">
          <Flex>
            {templates.map(({ code }) => {
              return (
                <Button primary onClick={() => this.open(code)} basic key={code}>
                  {code}
                </Button>
              )
            })}
            <Button primary onClick={() => this.open('plain-first')} basic>
              Plain (first use)
            </Button>
          </Flex>
          <PDFPreview>
            <Template
              name={activeTemplate}
              data={profile}
              isFirstUse={activeTemplate === 'plain-first'}
            />
          </PDFPreview>
        </Flex>
      </View>
    )
  }
}

export default CurriculumContainer
