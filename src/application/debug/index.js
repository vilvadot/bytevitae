import { connect } from 'react-redux'
import Container from './Container'
import { templates } from '../print/templates'

const mapStateToProps = state => ({
  templates,
  loading: state.cv.loading,
  profile: state.cv.profile,
})

export default connect(mapStateToProps)(Container)
