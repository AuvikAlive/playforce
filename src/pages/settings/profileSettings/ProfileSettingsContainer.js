import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase, withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { ProfileSettings } from './ProfileSettings'

const mapStateToProps = ({ firebase: { profile, auth: { uid } } }) => ({
  profile,
  uid,
})

export const ProfileSettingsContainer = compose(
  withErrorLoadingSubmit,
  withFirebase,
  withFirestore,
  connect(mapStateToProps),
)(ProfileSettings)
