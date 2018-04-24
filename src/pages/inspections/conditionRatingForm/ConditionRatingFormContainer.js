import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { fetchManufacturersRealTime } from '../../../store/actions/actionCreators/manufacturerActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { ConditionRatingForm } from './ConditionRatingForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  manufacturer: { manufacturersLoaded, manufacturers },
  inspection: { cover, equipments },
}) => ({
  userId: uid,
  manufacturersLoaded,
  manufacturers,
  equipments,
  cover,
})

const mapDispatchToProps = { fetchManufacturersRealTime }

export const ConditionRatingFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(ConditionRatingForm)
