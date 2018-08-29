import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddInspection } from './AddInspection'

const mapStateToProps = ({ firebase }, { match }) => ({
  userId: firebase.auth.uid,
  siteId: match.params.id,
})

const enhance = compose(
  withFeedback,
  withFirestore,
  connect(mapStateToProps)
)

export const AddInspectionContainer = enhance(AddInspection)
