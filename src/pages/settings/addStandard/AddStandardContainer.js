import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddStandard } from './AddStandard'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = ({ firebase: { auth: { uid } } }) => ({
  userId: uid,
})

export const AddStandardContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(AddStandard)
