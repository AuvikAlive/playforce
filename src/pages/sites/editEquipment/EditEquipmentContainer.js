import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import {
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

const mapDispatchToProps = { fetchEquipment, deleteEquipment }

export const EditEquipmentContainer = compose(
  withDeleteModal,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditEquipment)
