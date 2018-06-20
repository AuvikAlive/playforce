import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchManufacturersRealTime } from '../../../store/actions/actionCreators/manufacturerActions/'
import { EquipmentForm } from './EquipmentForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  manufacturer: { manufacturersLoaded, manufacturers },
}) => ({
  userId: uid,
  manufacturersLoaded,
  manufacturers,
})

const mapDispatchToProps = { fetchManufacturersRealTime }

export const EquipmentFormContainer = compose(
  withRouter,
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EquipmentForm)
