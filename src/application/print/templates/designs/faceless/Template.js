import React from 'react'
import PropTypes from 'prop-types'
import pdf from '@react-pdf/styled-components'
import {
  Text,
  Spacer,
  BaseTemplate,
  Education,
  Repositories,
  Experience,
  Skills,
  Languages,
  Flex,
  Contact,
} from '../../components'
import {
  setupAssets, setupFonts, phoneUrl, githubUrl, emailUrl, mapUrl,
} from '../../utilities'

const SIDEBAR_WITH = 10

export const Sidebar = pdf.View`
  height: 100%;
  width: ${SIDEBAR_WITH}cm;
  padding: 25px;
`

export const SidebarBackground = pdf.View`
  position:absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WITH}cm;
  background: #222;
`

const Header = pdf.View`
  width: 100%;
  height: 130px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

export const Content = pdf.View`
  border: 1px solid;
  border-top:none;
  border-color: white;
  border-left-color: black;
  width: ${21 - SIDEBAR_WITH - 0.9}cm;
  padding: 25px;
`
export const Name = pdf.Text`
  text-align:center;
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
  border-color: white;
  border-bottom-color: black;
  text-transform: uppercase;
`
const LineDectoration = pdf.View`
  height: 10px;
  width: 100%;
  position:absolute;
  bottom: 0;
  border: 1px solid;
  border-color: white;
  border-bottom-color: black;
  border-top-color: black;
`

const Template = ({ data }) => {
  setupFonts()
  setupAssets()
  const {
    name,
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
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
  }

  return (
    <BaseTemplate style={pageStyles}>
      <Header>
        <Name>{name}</Name>
        <Spacer height={8} />
        <Text fontSize={18}>{position}</Text>
        <LineDectoration />
      </Header>
      <Flex style={{ paddingRight: '25px' }}>
        <Sidebar>
          <Contact icon="github" url={githubUrl(username)} data={username}>
            <Spacer height={8} />
          </Contact>
          <Contact icon="phone" url={phoneUrl(phone)} data={phone}>
            <Spacer height={8} />
          </Contact>
          <Contact icon="location" url={mapUrl(location)} data={location}>
            <Spacer height={8} />
          </Contact>
          <Contact icon="email" url={emailUrl(email)} data={email}>
            <Spacer height={8} />
          </Contact>
          <Spacer height={16} />
          <Text style={{ fontSize: 9 }}>{bio}</Text>
          <Spacer height={16} />
          <Languages data={languages}>
            <Title>Languages</Title>
          </Languages>
          <Spacer height={16} />
          <Education data={education}>
            <Title>Education</Title>
          </Education>
          <Skills data={topics} wrap={false}>
            <Spacer height={24} />
            <Title>Skills</Title>
          </Skills>
        </Sidebar>
        <Content>
          <Experience data={experience}>
            <Title>Work experience</Title>
          </Experience>
          <Repositories data={repositories}>
            <Spacer height={24} />
            <Title>Open Source</Title>
          </Repositories>
        </Content>
      </Flex>
    </BaseTemplate>
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
