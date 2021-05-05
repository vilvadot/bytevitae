import PropTypes from 'prop-types'

export const languageTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired

export const empty = {
  name: '',
}
