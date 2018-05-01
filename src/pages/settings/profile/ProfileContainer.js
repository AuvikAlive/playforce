import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { Profile } from './Profile'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

const mapDispatchToProps = {
  updateProfile,
}

export const ProfileContainer = compose(
  withImageCapture,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile)
