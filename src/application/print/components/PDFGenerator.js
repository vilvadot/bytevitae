import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PDFDownloadLink as RenderPDF } from '@react-pdf/renderer'
import { Ref } from 'semantic-ui-react'
import Template from '../templates'

const Trigger = ({ children, ...props }) => React.cloneElement(children, {
  ...props,
})

class PDFGenerator extends Component {
  static defaultProps = {
    isFirstUse: false,
  }

  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    templateName: PropTypes.string.isRequired,
    isFirstUse: PropTypes.bool,
    fileName: PropTypes.string,
  }

  static defaultProps = {
    fileName: `${Date.now()}_curriculum.pdf`,
  }

  state = {
    isGenerating: false,
  }

  constructor(props) {
    super(props)
    this.downloadRef = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, state) {
    const isTemplateDifferent = state.template !== nextProps.templateName
    if (isTemplateDifferent) {
      return {
        isGenerating: false,
      }
    }
    return {}
  }

  activate = () => {
    this.setState({
      isGenerating: true,
      template: this.props.templateName,
    })
  }

  downloadPDF = () => {
    // Hack to auto-download the PDF
    setTimeout(() => {
      this.downloadRef.current.click()
    }, 100)
  }

  render() {
    const {
      children, data, templateName, isFirstUse, fileName,
    } = this.props
    const { isGenerating } = this.state

    const template = (
      <Template
        name={templateName}
        data={data}
        isFirstUse={isFirstUse}
      />
    )

    if (isGenerating) {
      return (
        <RenderPDF document={template} fileName={fileName}>
          {({ loading }) => {
            if (!loading) this.downloadPDF()
            return (
              // Download Button
              <Ref innerRef={this.downloadRef}>
                <Trigger>{children(true, loading)}</Trigger>
              </Ref>
            )
          }}
        </RenderPDF>
      )
    }
    // Generate Button
    return <Trigger onClick={this.activate}>{children(false)}</Trigger>
  }
}

export default PDFGenerator
