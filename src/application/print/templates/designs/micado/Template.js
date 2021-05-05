import React from 'react'
import PropTypes from 'prop-types'
import pdf from '@react-pdf/styled-components'
import {
  Block,
  Text,
  Spacer,
  Education,
  Languages,
  Skills,
  Repositories,
  Experience,
  Contact,
  BaseTemplate,
} from '../../components'
import {
  setupAssets, setupFonts, phoneUrl, githubUrl, emailUrl, mapUrl, trimToSidebar,
} from '../../utilities'

const SIDEBAR_WITH = 6

export const Sidebar = pdf.View`
  height: 100%;
  width: ${SIDEBAR_WITH}cm;
  padding: 25px;
`

export const Content = pdf.View`
  width: ${21 - SIDEBAR_WITH - 1.5}cm;
  padding: 25px;
`
export const Name = pdf.Text`
  font-family: "Raleway-bold"
  font-size: 32px;
  width: 100%;
  `

export const Title = pdf.Text`
  font-family: "Raleway-regular"
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  width: 100%;
  border: 1px solid;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-color: black;
  text-transform: uppercase;
`

const Bar = pdf.View`
  height: 100%;
  width: 10px;
  top: 0;
  left: 0;
  position:absolute;
  text-align: center;
`

const BarAccent = pdf.View`
  height: 20%;
  background: #FFDE85;
`

const BarBlack = pdf.View`
  height: 100%;
  background: black;
`

const AvatarAccent = pdf.View`
  height: 8px;
  width: 70px;
  position: absolute;
  right: 0;
  top: 99;
  background: black;
`

export const Avatar = pdf.Image`
  top: 0;
  right: 0;
  position: absolute;
  width: 100px;
  height: 100px;
`

const Template = ({ data }) => {
  setupFonts()
  setupAssets()
  const {
    name,
    position,
    avatarUrl,
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

  const trimmedEmail = trimToSidebar(email)

  return (
    <BaseTemplate>
      <Bar fixed>
        <BarAccent />
        <BarBlack />
      </Bar>
      <AvatarAccent />
      <Avatar src={avatarUrl} />
      <Sidebar>
        <Spacer height={112} />
        <Text style={{ fontSize: 9 }}>{bio}</Text>
        <Spacer height={16} />
        <Title>Contact</Title>
        <Contact icon="github" url={githubUrl(username)} data={username}>
          <Spacer height={8} />
        </Contact>
        <Contact icon="phone" url={phoneUrl(phone)} data={phone}>
          <Spacer height={8} />
        </Contact>
        <Contact icon="location" url={mapUrl(location)} data={location}>
          <Spacer height={8} />
        </Contact>
        <Contact icon="email" url={emailUrl(email)} data={trimmedEmail}>
          <Spacer height={8} />
        </Contact>
        <Spacer height={16} />
        <Languages data={languages}>
          <Title>Languages</Title>
        </Languages>
        <Education data={education}>
          <Title>Education</Title>
        </Education>
      </Sidebar>
      <Content>
        <Block maxWidth={200}>
          <Name>{name}</Name>
        </Block>
        <Spacer height={8} />
        <Text fontSize={18}>{position}</Text>
        <Spacer height={35} />
        <Experience data={experience}>
          <Title>Work experience</Title>
          <Spacer height={16} />
        </Experience>
        <Repositories data={repositories}>
          <Title>Open Source</Title>
          <Spacer height={12} />
        </Repositories>
        <Skills data={topics}>
          <Title>Skills</Title>
        </Skills>
      </Content>
    </BaseTemplate>
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
