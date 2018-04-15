import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
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

export const EditEquipmentContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(EditEquipment)
