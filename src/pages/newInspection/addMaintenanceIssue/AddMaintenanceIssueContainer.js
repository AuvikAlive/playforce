import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddMaintenanceIssue } from './AddMaintenanceIssue'
import { addMaintenanceIssue } from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = ({ inspection: { equipments } }) => ({
  equipments,
})

const mapDispatchToProps = { addMaintenanceIssue }

export const AddMaintenanceIssueContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AddMaintenanceIssue)
