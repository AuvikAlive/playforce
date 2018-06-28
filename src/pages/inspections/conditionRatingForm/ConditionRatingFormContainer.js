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

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  manufacturer: { manufacturersLoaded, manufacturers },
  inspection: { cover },
  equipment: { equipmentsSite, equipmentsLoaded, equipments },
}) => ({
  userId: uid,
  siteId: cover.location.id,
  manufacturersLoaded,
  manufacturers,
  equipmentsSite,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = {
  addEquipment,
  fetchEquipments,
  fetchManufacturersRealTime,
}

export const ConditionRatingFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ConditionRatingForm)
