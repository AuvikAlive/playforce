import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { fetchManufacturers } from '../../../store/actions/actionCreators/manufacturerActions/'
import { saveEquipment } from '../../../store/actions/actionCreators/equipmentActions'
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

const mapDispatchToProps = { fetchManufacturers, saveEquipment }

export const EquipmentFormContainer = compose(
  withRouter,
  withImageCapture,
  withErrorLoadingSubmit,
  connect(mapStateToProps, mapDispatchToProps)
)(EquipmentForm)
