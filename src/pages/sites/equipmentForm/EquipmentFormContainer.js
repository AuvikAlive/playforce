import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { fetchManufacturersRealTime } from '../../../store/actions/actionCreators/manufacturerActions/'
import { saveEquipment } from '../../../store/actions/actionCreators/equipmentActions/'
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

const mapDispatchToProps = { fetchManufacturersRealTime, saveEquipment }

export const EquipmentFormContainer = compose(
  withRouter,
  withImageCapture,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(EquipmentForm)
