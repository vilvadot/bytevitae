import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Container from './Container'
import { templates } from './templates'

const mapStateToProps = state => ({
  templates,
  loading: state.cv.loading,
  profile: state.cv.profile,
})

const mapDispatchToProps = dispatch => ({
  openSubscribePage: () => dispatch(push('/upgrade')),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
