import { connect } from 'react-redux'
import Container from './Container'
import { editProfile } from '../actions'

const mapStateToProps = state => ({
  profile: state.cv.profile,
  isSubmitting: state.cv.isSubmitting,
  githubUsername: state.cv.githubUsername,
  isLoading: state.cv.loading,
})

const mapDispatchToProps = dispatch => ({
  editProfile: values => dispatch(editProfile(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
