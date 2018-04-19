import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddInspection } from './AddInspection'

const mapStateToProps = (
  {
    firestore: {
      data: { users },
    },
    firebase: {
      auth: { uid },
    },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
})

export const AddInspectionContainer = compose(
  withFeedback,
  withFirestore,
  connect(mapStateToProps)
)(AddInspection)
