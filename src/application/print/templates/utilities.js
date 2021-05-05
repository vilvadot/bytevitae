import { Font } from '@react-pdf/renderer'
import MontserratRegular from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'
import MontserratLight from './fonts/Montserrat-Light.ttf'
import RalewayRegular from './fonts/Raleway-Regular.ttf'
import RalewayBold from './fonts/Raleway-Bold.ttf'

export const publicFile = fileName => `${process.env.PUBLIC_URL}/${fileName}`

export const setupFonts = () => {
  Font.register({ family: 'Montserrat-regular', src: MontserratRegular })
  Font.register({ family: 'Montserrat-light', src: MontserratLight })
  Font.register({ family: 'Montserrat-bold', src: MontserratBold })
  Font.register({ family: 'Raleway-regular', src: RalewayRegular })
  Font.register({ family: 'Raleway-bold', src: RalewayBold })
}

export const setupAssets = () => {
  Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/',
  })
  Font.registerHyphenationCallback(word => [word])
}

export const styleProps = ({
  bold, maxWidth, color, fontSize, textAlign,
}) => `
  ${bold ? 'font-family: "Montserrat-bold";' : 'font-family: "Montserrat-light"'}
  ${maxWidth ? `max-width: ${maxWidth}` : ''}
  ${color ? `color: ${color}` : ''}
  ${fontSize ? `font-size: ${fontSize}` : ''}
  ${textAlign ? `textAlign: ${textAlign}` : ''}
`

export const formatVisibleRepos = (repos) => {
  const repositories = repos.filter(repo => repo.isVisible)
  return repositories
}

export const formatLanguages = languages => languages.map(({ name }, index) => {
  const isLast = index === languages.length - 1
  return `${name}${!isLast ? ' - ' : ''}`
})

export const formatSkills = skills => skills.map((skill, index) => {
  const isLast = index === skills.length - 1
  return `${skill}${!isLast ? ' - ' : ''}`
})

export const githubUrl = username => `https://github.com/${username}`
export const emailUrl = email => `mailto:${email}`
export const phoneUrl = phone => `tel:${phone}`
export const mapUrl = location => `https://www.openstreetmap.org/search?query=${location}`

const longerThan20Chars = /.{1,20}/g
const truncate = string => string && string.match(longerThan20Chars).join('\n')
const splitEmail = email => email.replace('@', '\n@')

export const trimToSidebar = (value) => {
  let clean = splitEmail(value)
  clean = truncate(clean)
  return clean
}
