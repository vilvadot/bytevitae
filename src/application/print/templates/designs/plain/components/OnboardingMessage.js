import React from 'react'
import pdf from '@react-pdf/styled-components'
import { Flex } from '../../../components'
import publicFile from '../../../../../../utilities/publicFile'

const Overlay = pdf.View`
  width:100%;
  height: 300px;
  background: white;
  padding: 10px 0;
  display:flex;
  align-items: center;
  justify-content: center;
`

const Notice = pdf.Text`
  margin-top: 10px;
  text-align: center;
  color: #E020DF;
  font-size: 12px;
`

const Icon = pdf.Image`
  height: 115px;
  width: 100px;
  margin-bottom: 20px;
`

export const OnboardingMessage = () => (
  <Overlay>
    <Icon src={publicFile('img/templates/onboarding_notice.png')} />
    <Flex column>
      <Notice>This looks good, right?... but good is not enough!</Notice>
      <Notice>What did you study? Where did you work?</Notice>
      <Notice>
        Don't worry in 5 min we will have a kickass resume. We just have to add a bit more of
        information next.
      </Notice>
    </Flex>
  </Overlay>
)
