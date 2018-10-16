import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  updateEquipment,
  fetchEquipment,
  deleteEquipment,
} from '../../../store/actions/actionCreators/equipmentActions/'
import { EditEquipment } from './EditEquipment'

const mapStateToProps = ({ firebase, equipment }, { match }) => {
  const { equipmentsLoaded, equipments } = equipment
  const id = match.params.id

  return {
    userId: firebase.auth.uid,
    id,
    equipmentsLoaded,
    equipments,
    equipment:
      (equipmentsLoaded && equipments.find(item => item.equipment === id)) ||
      equipment.equipment,
  }
}

const mapDispatchToProps = { updateEquipment, fetchEquipment, deleteEquipment }

const enhance = compose(
  withFeedback,
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditEquipmentContainer = enhance(EditEquipment)
