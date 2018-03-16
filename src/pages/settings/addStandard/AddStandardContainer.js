import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddStandard } from './AddStandard'

const mapStateToProps = ({ firebase: { profile, auth } }) => ({
  profile,
  auth,
})

export const AddStandardContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(AddStandard)
