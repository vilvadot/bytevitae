import React, { Fragment } from 'react'
import { View } from '@react-pdf/renderer'
import {
  Block, Text, Spacer, Optional, Link, Icon, Flex,
} from './layout'
import { formatLanguages, formatSkills } from '../utilities'

export const EducationItem = ({ data, withDescription }) => {
  const {
    title, endYear, startYear, centre, description,
  } = data
  const endDate = ` - ${endYear || 'Present'}`
  const centreStr = centre ? `, ${centre}` : ''
  return (
    <Block>
      <Text>
        <Text bold>{`${title}${centreStr} | `}</Text>
        {`${startYear}${endDate}`}
        {'\n'}
        {withDescription && <Text>{description}</Text>}
      </Text>
    </Block>
  )
}

export const Education = ({
  children, data, wrap, withDescription,
}) => {
  if (!data.length) return <Fragment />
  return (
    <View wrap={wrap}>
      {children}
      {data.map(item => (
        <Fragment key={item.uuid}>
          <EducationItem data={item} withDescription={withDescription} />
          <Spacer height={16} />
        </Fragment>
      ))}
    </View>
  )
}

export const ExperienceItem = ({ data }) => {
  const {
    role, endYear, endMonth, startYear, startMonth, company, description,
  } = data
  const startDate = `${startMonth} ${startYear}`
  const endDate = endYear ? `${endMonth} ${endYear}` : 'Present'
  const companyStr = company ? `, ${company} | ` : ''
  return (
    <Block>
      <Text>
        <Text bold>
          {role}
          {companyStr}
        </Text>
        {`${startDate} - ${endDate}`}
      </Text>
      <Optional showIf={description}>
        <Spacer height={8} />
        <Text>{description}</Text>
      </Optional>
    </Block>
  )
}

export const Experience = ({ children, data, wrap }) => {
  if (!data.length) return <Fragment />
  return (
    <View wrap={wrap}>
      {children}
      {data.map(item => (
        <Fragment key={item.uuid}>
          <ExperienceItem data={item} />
          <Spacer height={16} />
        </Fragment>
      ))}
    </View>
  )
}

export const RepositoryItem = ({ data }) => {
  const { name, url, description } = data
  return (
    <Block>
      <Text bold>
        <Link src={url}>{name}</Link>
      </Text>
      <Optional showIf={description}>
        <Spacer height={8} />
        <Text>{description}</Text>
      </Optional>
    </Block>
  )
}

export const Repositories = ({ children, data, wrap }) => {
  if (!data.length) return <Fragment />
  return (
    <View wrap={wrap}>
      {children}
      {data.map(item => (
        <Fragment key={item.name}>
          <RepositoryItem data={item} />
          <Spacer height={16} />
        </Fragment>
      ))}
    </View>
  )
}

export const Skills = ({ data, children, wrap }) => {
  const skills = formatSkills(data)
  if (!skills.length) return <Fragment />
  return (
    <View wrap={wrap}>
      {children}
      <Text>{skills}</Text>
      <Spacer height={16} />
    </View>
  )
}

export const Languages = ({ data, children, wrap }) => {
  const languages = formatLanguages(data)
  if (!languages.length) return <Fragment />
  return (
    <View wrap={wrap}>
      {children}
      <Text>{languages}</Text>
      <Spacer height={16} />
    </View>
  )
}

export const Contact = ({
  icon, url, data, children, isWhite,
}) => {
  if (!data) return null
  return (
    <>
      <Flex>
        <Icon name={icon} style={{ marginRight: '8px' }} />
        <Text isWhite={isWhite}>
          <Link src={url} isWhite={isWhite}>
            {data}
          </Link>
        </Text>
      </Flex>
      {children}
    </>
  )
}
