import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchManufacturersRealTime } from '../../../store/actions/actionCreators/manufacturerActions/'
import { EquipmentForm } from './EquipmentForm'

const mapStateToProps = ({ firebase, manufacturer }) => {
  const { manufacturersLoaded, manufacturers } = manufacturer

  return {
    userId: firebase.auth.uid,
    manufacturersLoaded,
    manufacturers,
  }
}

const mapDispatchToProps = { fetchManufacturersRealTime }

const enhance = compose(
  withRouter,
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EquipmentFormContainer = enhance(EquipmentForm)
