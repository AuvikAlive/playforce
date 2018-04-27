import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditInspection } from './EditInspection'
import {
  fetchInspectionRealTime,
  discardInspection,
  fetchMaintenanceIssuesRealTime,
} from '../../../store/actions/actionCreators/newInspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
      profile: { displayName },
    },
    firestore: {
      data: { users },
    },
    inspection,
    standard: { standardsLoaded, standards },
    equipments: { equipmentsSite, equipments },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspection,
  displayName,
  standardsLoaded,
  standards,
  equipmentsSite,
  equipments,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchStandards,
  discardInspection,
  fetchEquipmentsRealTime,
}

export const EditInspectionContainer = compose(
  withDeleteModal,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(EditInspection)
