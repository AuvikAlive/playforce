import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddStandard } from './AddStandard'

const mapStateToProps = ({ firebase: { auth: { uid } } }) => ({
  userId: uid,
})

export const AddStandardContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(AddStandard)
