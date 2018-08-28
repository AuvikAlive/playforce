import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions/'
import { MaintenanceIssueForm } from './MaintenanceIssueForm'

const mapStateToProps = ({ firebase, inspection, equipment }) => {
  const { equipmentsSite, equipmentsLoaded, equipments } = equipment

  return {
    userId: firebase.auth.uid,
    siteId: inspection.cover.location.id,
    equipmentsSite,
    equipmentsLoaded,
    equipments,
  }
}

const mapDispatchToProps = {
  fetchEquipmentsRealTime,
}

const enhance = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const MaintenanceIssueFormContainer = enhance(MaintenanceIssueForm)
