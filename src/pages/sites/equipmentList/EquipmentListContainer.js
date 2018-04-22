import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { EquipmentList } from './EquipmentList'
import {
  fetchEquipmentsRealTime,
  deleteEquipment,
} from '../../../store/actions/actionCreators/equipmentActions/'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    equipments: { equipmentsSite, equipmentsLoaded, equipments },
  },
  { siteId }
) => ({
  userId: uid,
  siteId,
  equipmentsSite,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = { fetchEquipmentsRealTime, deleteEquipment }

export const EquipmentListContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EquipmentList)
