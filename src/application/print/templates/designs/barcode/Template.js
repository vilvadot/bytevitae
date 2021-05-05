import React, { Fragment } from 'react'
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
  padding-right: 25px;
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
  height: 100%;
  width: ${21 - SIDEBAR_WITH}cm;
  padding-left: 25px;
`
export const Name = pdf.Text`
  text-align:center;
  font-family: "Raleway-bold"
  font-size: 32px;
  width: 100%;
  `

export const Title = pdf.Text`
  background: black;
  color: white;
  font-family: "Raleway-regular"
  font-size: 12px;
  padding: 4px;
  width: 100%;
  border: 1px solid;
  margin-bottom: 16px;
  ${({ left }) => left && 'padding-left: 25px'}
  ${({ right }) => right && 'padding-right: 25px'}
`

export const Padder = pdf.View`
  ${({ left }) => left && 'padding-left: 25px'}
  ${({ right }) => right && 'padding-right: 25px'}
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
      </Header>
      <Flex style={{ paddingRight: '25px' }}>
        <Sidebar>
          <Padder left>
            <Text style={{ fontSize: 9 }}>{bio}</Text>
          </Padder>
          <Spacer height={16} />
          <Title left>Contact</Title>
          <Padder left>
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
          </Padder>
          <Spacer height={16} />
          {languages.length ? <Title left>Languages</Title> : <Fragment />}
          <Padder left>
            <Languages data={languages} />
          </Padder>
          <Spacer height={16} />
          {education.length ? <Title left>Education</Title> : <Fragment />}
          <Padder left>
            <Education data={education} />
          </Padder>
          <Spacer height={24} />
          {topics.length ? <Title left>Skills</Title> : <Fragment />}
          <Padder left>
            <Skills data={topics} wrap={false} />
          </Padder>
        </Sidebar>
        <Content>
          {experience.length ? <Title right>Work experience</Title> : <Fragment />}
          <Padder right>
            <Experience data={experience} />
          </Padder>
          {repositories.length ? <Title right>Open Source</Title> : <Fragment />}
          <Padder right>
            <Repositories data={repositories} />
          </Padder>
        </Content>
      </Flex>
    </BaseTemplate>
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
