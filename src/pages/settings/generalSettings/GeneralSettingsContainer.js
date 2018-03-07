import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase, withFirestore } from 'react-redux-firebase'
import { GeneralSettings } from './GeneralSettings'

const mapStateToProps = ({
  firebase: { profile: { displayName, photoURL }, auth: { uid } },
}) => ({
  displayName,
  photoURL,
  uid,
})

export const GeneralSettingsContainer = compose(
  withFirebase,
  withFirestore,
  connect(mapStateToProps),
)(GeneralSettings)
