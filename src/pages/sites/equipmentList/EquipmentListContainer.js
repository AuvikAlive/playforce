import { connect } from 'react-redux'
import { compose } from 'redux'
import { EquipmentList } from './EquipmentList'
import {
  fetchEquipments,
  fetchEquipmentsRealTime,
  deleteEquipment,
} from '../../../store/actions/actionCreators/equipmentActions/'

const mapStateToProps = ({ firebase, equipment }, { siteId }) => {
  const { equipmentsSite, equipmentsLoaded, equipments } = equipment

  return {
    userId: firebase.auth.uid,
    siteId,
    equipmentsSite,
    equipmentsLoaded,
    equipments,
  }
}

const mapDispatchToProps = {
  fetchEquipments,
  fetchEquipmentsRealTime,
  deleteEquipment,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EquipmentListContainer = enhance(EquipmentList)
