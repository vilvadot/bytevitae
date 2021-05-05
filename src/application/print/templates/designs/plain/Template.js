import React from 'react'
import pdf from '@react-pdf/styled-components'
import {
  Experience,
  Watermark,
  Skills,
  Repositories,
  Education,
  Text,
  BaseTemplate,
  Spacer,
} from '../../components'
import {
  InfoItem, Title, Languages, OnboardingMessage,
} from './components'
import publicFile from '../../../../../utilities/publicFile'
import { setupAssets, setupFonts } from '../../utilities'

const SIDEBAR_WITH = 200
const PAGE_WIDTH = 600

export const Sidebar = pdf.View`
  border: 1px solid;
  border-color: white;
  border-right-color: #999;
  height: 100%;
  width: ${SIDEBAR_WITH}px;
  text-overflow: ellipsis;
  padding:20px;
  padding-top: 0;
  padding-botom:0;
  color: #323234;
  display:flex;
  flex-direction:column;
`

export const Content = pdf.View`
  width: ${PAGE_WIDTH - SIDEBAR_WITH};
  padding-left: 25px;
  padding-right: 25px;
`

export const Name = pdf.Text`
  width: 100%;
  font-family: "Montserrat-bold
  font-size: 22px;
  text-align:center;
  font-weight: bold;
`

export const Avatar = pdf.Image`
  border-radius:10px;
`

export const Icon = pdf.Image`
  width: 100%;
  margin-right:10px;
  opacity:.2;
`

const Template = ({ data, isFirstUse }) => {
  setupAssets()
  setupFonts()
  const {
    name,
    avatarUrl,
    position,
    topics,
    bio,
    location,
    phone,
    email,
    username,
    languages,
    education,
    experience,
    repositories,
  } = data
  const pageStyles = {
    paddingLeft: 0,
  }

  return (
    <BaseTemplate style={pageStyles}>
      <Sidebar>
        <Name>{name}</Name>
        <Spacer height={2} />
        <Text fontSize={13} textAlign="center">
          {position}
        </Text>
        <Spacer height={4} />
        <Avatar src={avatarUrl} />
        <Spacer height={8} />
        <Text>{bio}</Text>
        <Spacer height={16} />
        <InfoItem
          label="location"
          value={location}
          icon={
            <Icon src={publicFile('img/templates/location_icon.png')} style={{ width: '20px' }} />
          }
        />
        <InfoItem
          label="email"
          link={`mailto:${email}`}
          value={email}
          icon={<Icon src={publicFile('img/templates/email_icon.png')} />}
        />
        <InfoItem
          label="github"
          link={`https://github.com/${username}`}
          value={username}
          icon={<Icon src={publicFile('img/templates/github.png')} />}
        />
        <InfoItem
          label="phone"
          value={phone}
          icon={<Icon src={publicFile('img/templates/phone_icon.png')} style={{ width: '20px' }} />}
        />
        <Spacer height={50} />
        <Languages languages={languages} />
      </Sidebar>
      <Content>
        <Skills data={topics}>
          <Title icon={publicFile('img/templates/skills_icon.png')}>SKILLS</Title>
          <Spacer height={16} />
        </Skills>
        <Repositories data={repositories}>
          <Title icon={publicFile('img/templates/oss_icon.png')}>OPEN SOURCE</Title>
          <Spacer height={16} />
        </Repositories>
        <Experience data={experience}>
          <Title icon={publicFile('img/templates/experience_icon.png')}>EXPERIENCE</Title>
          <Spacer height={16} />
        </Experience>
        <Education data={education} withDescription>
          <Title icon={publicFile('img/templates/education_icon.png')}>EDUCATION</Title>
          <Spacer height={16} />
        </Education>
        {isFirstUse && <OnboardingMessage />}
      </Content>
    </BaseTemplate>
  )
}

export default Template
