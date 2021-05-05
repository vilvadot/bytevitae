import React from 'react'
import PropTypes from 'prop-types'
import pdf from '@react-pdf/styled-components'
import {
  Block,
  Text,
  Spacer,
  BaseTemplate,
  Education,
  Repositories,
  Experience,
  Skills,
  Languages,
  Contact,
} from '../../components'
import {
  setupAssets,
  setupFonts,
  phoneUrl,
  githubUrl,
  emailUrl,
  mapUrl,
  trimToSidebar,
} from '../../utilities'

const SIDEBAR_WITH = 6

export const Sidebar = pdf.View`
  margin-top: 150px;
  height: 100%;
  width: ${SIDEBAR_WITH}cm;
  padding: 25px;
  color: white;
`

export const SidebarBackground = pdf.View`
  position:absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WITH}cm;
  background: #222;
`

const SidebarCutout = pdf.View`
  position:absolute;
  top: 0;
  left: 0;
  height: 4.5cm;
  width: ${SIDEBAR_WITH + 0.1}cm;
  background: white;
`

export const Content = pdf.View`
  width: ${21 - SIDEBAR_WITH}cm;
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
  border-left: none;
  border-right: none;
  border-bottom-color: black;
  text-transform: uppercase;
`

export const TitleWhite = pdf.Text`
  color:white;
  font-family: "Raleway-regular"
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  width: 100%;
  border: 1px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: white;
  text-transform: uppercase;
`

export const Avatar = pdf.Image`
  top: -124px;
  left: 25px;
  position: absolute;
  width: 125px;
  height: 125px;
  z-index: 2;
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

  const pageStyles = {
    padding: 0,
  }

  const trimmedEmail = trimToSidebar(email)

  return (
    <BaseTemplate style={pageStyles}>
      <SidebarBackground fixed />
      <SidebarCutout />
      <Sidebar>
        <Avatar src={avatarUrl} />
        <Contact
          icon="github-white"
          url={githubUrl(username)}
          data={username}
          isWhite
        >
          <Spacer height={8} />
        </Contact>
        <Contact icon="phone-white" url={phoneUrl(phone)} data={phone} isWhite>
          <Spacer height={8} />
        </Contact>
        <Contact
          icon="location-white"
          url={mapUrl(location)}
          data={location}
          isWhite
        >
          <Spacer height={8} />
        </Contact>
        <Contact
          icon="email-white"
          url={emailUrl(email)}
          data={trimmedEmail}
          isWhite
        >
          <Spacer height={8} />
        </Contact>
        <Spacer height={16} />
        <Text style={{ fontSize: 9 }}>{bio}</Text>
        <Spacer height={16} />
        <Languages data={languages}>
          <TitleWhite>Languages</TitleWhite>
        </Languages>
        <Spacer height={16} />
        <Education data={education}>
          <TitleWhite>Education</TitleWhite>
        </Education>
      </Sidebar>
      <Content>
        <Block maxWidth={200}>
          <Name>{name}</Name>
        </Block>
        <Spacer height={8} />
        <Text fontSize={18}>{position}</Text>
        <Experience data={experience}>
          <Spacer height={36} />
          <Title>Work experience</Title>
        </Experience>
        <Repositories data={repositories}>
          <Spacer height={24} />
          <Title>Open Source</Title>
        </Repositories>
        <Skills data={topics} wrap={false}>
          <Spacer height={24} />
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
