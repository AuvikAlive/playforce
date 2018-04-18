import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { EquipmentList } from './EquipmentList'
import {
  fetchEquipments,
  deleteEquipment,
} from '../../../store/actions/actionCreators/equipmentActions/'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    equipments: { equipmentsLoaded, equipments },
  },
  { siteId }
) => ({
  userId: uid,
  siteId,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = { fetchEquipments, deleteEquipment }

export const EquipmentListContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EquipmentList)
