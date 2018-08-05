import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../../hocs/withDeleteDialog/withDeleteDialog'
import {
  fetchInspectionsByIdWithComplianceIssues,
  fetchInspectionsByIdWithMaintenanceIssues,
  archiveInspections,
  unarchiveInspections,
  deleteInspections,
} from '../../../../store/actions/actionCreators/inspectionListActions/'
import { SelectRightComponent } from './SelectRightComponent'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = {
  fetchInspectionsByIdWithComplianceIssues,
  fetchInspectionsByIdWithMaintenanceIssues,
  archiveInspections,
  unarchiveInspections,
  deleteInspections,
}

export const SelectRightComponentContainer = compose(
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SelectRightComponent)
