import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { SidenavBackground } from './SidenavBackground'

const mapDispatchToProps = { updateProfile }

export const SidenavBackgroundContainer = compose(
  withFeedback,
  connect(null, mapDispatchToProps)
)(SidenavBackground)
