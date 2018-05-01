import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  updateEquipment,
  fetchEquipment,
  deleteEquipment,
} from '../../../store/actions/actionCreators/equipmentActions/'
import { EditEquipment } from './EditEquipment'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    equipments: { equipmentsLoaded, equipments, equipment },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  equipmentsLoaded,
  equipments,
  equipment:
    (equipmentsLoaded && equipments.find(item => item.assetId === id)) ||
    equipment,
  assetId: id,
})

const mapDispatchToProps = { updateEquipment, fetchEquipment, deleteEquipment }

export const EditEquipmentContainer = compose(
  withFeedback,
  withDeleteModal,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditEquipment)
