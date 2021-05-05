import PropTypes from 'prop-types'

export const skillTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired

export const empty = {
  name: '',
}
