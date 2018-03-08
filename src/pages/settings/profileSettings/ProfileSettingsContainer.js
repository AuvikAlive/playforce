import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase, withFirestore } from 'react-redux-firebase'
import { ProfileSettings } from './ProfileSettings'

const mapStateToProps = ({
  firebase: { profile: { displayName, photoURL }, auth: { uid } },
}) => ({
  displayName,
  photoURL,
  uid,
})

export const ProfileSettingsContainer = compose(
  withFirebase,
  withFirestore,
  connect(mapStateToProps),
)(ProfileSettings)
