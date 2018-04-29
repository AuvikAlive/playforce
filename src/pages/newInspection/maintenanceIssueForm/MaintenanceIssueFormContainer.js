import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions/'
import { MaintenanceIssueForm } from './MaintenanceIssueForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { cover },
  equipments: { equipmentsSite, equipmentsLoaded, equipments },
}) => ({
  userId: uid,
  siteId: cover.location.id,
  equipmentsSite,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = {
  fetchEquipmentsRealTime,
}

export const MaintenanceIssueFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(MaintenanceIssueForm)
