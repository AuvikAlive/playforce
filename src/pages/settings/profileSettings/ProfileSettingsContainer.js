import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase, withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { ProfileSettings } from './ProfileSettings'

const mapStateToProps = ({
  firebase: {
    profile,
    auth: { uid },
  },
}) => ({
  profile,
  uid,
})

export const ProfileSettingsContainer = compose(
  withImageCapture,
  withFeedback,
  withFirebase,
  withFirestore,
  connect(mapStateToProps)
)(ProfileSettings)
