import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { EquipmentList } from './EquipmentList'
import { fetchEquipments } from '../../../store/actions/actionCreators/siteListActions'

const mapStateToProps = (
  { firebase: { auth: { uid } }, siteList: { equipmentsLoaded, equipments } },
  { siteId }
) => ({
  userId: uid,
  siteId,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = { fetchEquipments }

export const EquipmentListContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EquipmentList)
