import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/newInspectionActions/'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, equipments },
}) => ({
  userId: uid,
  inspectionId: id,
  equipments,
})

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddMaintenanceIssue)
