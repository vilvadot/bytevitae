/* eslint-disable jsx-a11y/accessible-emoji */
import pdf from '@react-pdf/styled-components'
import { Link } from '@react-pdf/renderer'
import React from 'react'

const Footer = pdf.View`
  position:absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
`

const TextWatermark = pdf.Text`
  font-size: 10px;
`

const GreyText = pdf.Text`
  color: grey;
`

export const Watermark = () => (
  <Footer fixed>
    <Link src="https://bytevitae.com">
      <TextWatermark>
        <GreyText>💡 Do you like what you see? Create your own CV with: </GreyText>
        bytevitae.com
      </TextWatermark>
    </Link>
  </Footer>
)
