import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchManufacturersRealTime } from '../../../store/actions/actionCreators/manufacturerActions/'
import {
  addEquipment,
  fetchEquipments,
} from '../../../store/actions/actionCreators/equipmentActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { ConditionRatingForm } from './ConditionRatingForm'

const mapStateToProps = ({ firebase, manufacturer, inspection, equipment }) => {
  const { manufacturersLoaded, manufacturers } = manufacturer
  const { equipmentsSite, equipmentsLoaded, equipments } = equipment

  return {
    userId: firebase.auth.uid,
    siteId: inspection.cover.location.id,
    manufacturersLoaded,
    manufacturers,
    equipmentsSite,
    equipmentsLoaded,
    equipments,
  }
}

const mapDispatchToProps = {
  addEquipment,
  fetchEquipments,
  fetchManufacturersRealTime,
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

export const ConditionRatingFormContainer = enhance(ConditionRatingForm)
