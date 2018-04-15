import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddComplianceIssue } from './AddComplianceIssue'
import { addComplianceIssue } from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = ({
  firestore: {
    data: { users },
  },
  firebase: {
    auth: { uid },
  },
  inspection: { equipments },
}) => ({
  userId: uid,
  data: users && users[uid],
  equipments,
})

const mapDispatchToProps = { addComplianceIssue }

export const AddComplianceIssueContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(AddComplianceIssue)
