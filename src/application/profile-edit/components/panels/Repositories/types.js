import PropTypes from 'prop-types'

export const repoTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  stars: PropTypes.number.isRequired,
}).isRequired

export const empty = {
  name: '',
  description: '',
  stars: 0,
}
