import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { deleteEquipment } from '../../../store/actions/actionCreators/equipmentActions/'
import { EditEquipment } from './EditEquipment'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    equipments: { equipmentsLoaded, equipments },
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
  assetId: id,
})

const mapDispatchToProps = { deleteEquipment }

export const EditEquipmentContainer = compose(
  withDeleteModal,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditEquipment)
