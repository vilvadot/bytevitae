import React, { Fragment } from 'react'
import pdf, { css } from '@react-pdf/styled-components'
import { Document, Image as PDFImage } from '@react-pdf/renderer'
import { styleProps } from '../utilities'
import { publicFile } from '../../../../utilities'

export const BaseTemplate = ({ children, ...props }) => (
  <Document>
    <Page size="A4" {...props}>
      {children}
    </Page>
  </Document>
)

export const Link = pdf.Link`
  color: black;
  ${({ isWhite }) => isWhite && css`
    color: white !important;
  `}
`
export const Image = PDFImage

export const Page = pdf.Page`
  padding: 25px;
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const Block = pdf.View`
  ${props => styleProps(props)}
`

export const Text = pdf.Text`
  font-size: 10px;
  ${({ isWhite }) => isWhite && css`
    color: white !important;
  `}
  ${props => styleProps(props)}
`

export const Flex = pdf.View`
  display:flex;
  flex-direction: row;
  ${({ justify }) => `justify-content: ${justify}`}
  ${({ align }) => `align-items: ${align}`}
  ${({ column }) => column
    && `
    flex-direction:column;
  `}
`

export const Spacer = pdf.View`
  height: ${props => props.height}px
`

export const Optional = ({ showIf, children }) => {
  if (!showIf) return <Fragment />
  return children
}

const IconImage = pdf.Image`
`

const IconWrapper = pdf.View`
  height: 16px;
  width: 16px;
  display:flex;
  align-items: center;
  justfy-content: center;
`

export const Icon = ({ name, style }) => (
  <IconWrapper style={style}>
    <IconImage src={publicFile(`img/templates/icons/${name}.png`)} />
  </IconWrapper>
)
