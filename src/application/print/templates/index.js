import React from 'react'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'
import Plain from './designs/plain/Template'
import Micado from './designs/micado/Template'
import LongBlack from './designs/long-black/Template'
import Barcode from './designs/barcode/Template'
import Faceless from './designs/faceless/Template'
import { publicFile, formatVisibleRepos } from './utilities'

const FREE_TEMPLATE = 'plain'

export const templates = [
  {
    code: 'plain',
    name: 'Simple',
    component: <Plain />,
    description: 'A simple yet elegant design.',
    isPremium: false,
    sample: publicFile('templates/bytevitae_plain.pdf'),
    preview: publicFile('templates/plain.png'),
  },
  {
    code: 'micado',
    name: 'Micado',
    component: <Micado />,
    description: 'An editorial layout with a color accent.',
    isPremium: true,
    sample: publicFile('templates/bytevitae_micado.pdf'),
    preview: publicFile('templates/micado.png'),
  },
  {
    code: 'faceless',
    name: 'Faceless',
    component: <Faceless />,
    description: 'Clean two column layout, type contrast and no picture.',
    isPremium: true,
    sample: publicFile('templates/bytevitae_faceless.pdf'),
    preview: publicFile('templates/faceless.png'),
  },
  {
    code: 'long-black',
    name: 'Long Black',
    component: <LongBlack />,
    description: 'A bolder look with a high contrast sidebar.',
    isPremium: true,
    sample: publicFile('templates/bytevitae_long-black.pdf'),
    preview: publicFile('templates/long-black.png'),
  },
  {
    code: 'barcode',
    name: 'barcode',
    component: <Barcode />,
    description: 'Heavy section contrast to keep all info organized.',
    isPremium: true,
    sample: publicFile('templates/bytevitae_barcode.pdf'),
    preview: publicFile('templates/barcode.png'),
  },
]

const orderData = (data) => {
  const {
    education, experience, repositories, ...rest
  } = data
  return {
    education: orderBy(education, 'startYear', 'desc'),
    experience: orderBy(experience, 'startYear', 'desc'),
    repositories: formatVisibleRepos(repositories),
    ...rest,
  }
}

const Template = ({
  name, data, isFirstUse,
}) => {
  let chosenTemplate = templates.find(template => template.code === name)
  if (!chosenTemplate) {
    chosenTemplate = templates.find(template => template.code === FREE_TEMPLATE)
  }
  return React.cloneElement(chosenTemplate.component, {
    data: orderData(data),
    isFirstUse,
  })
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
  isFirstUse: PropTypes.bool,
}

Template.defaultProps = {
  name: 'plain',
  isFirstUse: false,
}

export default Template
