import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { fetchManufacturers } from '../../../store/actions/actionCreators/manufacturerActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { ConditionRatingForm } from './ConditionRatingForm'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  manufacturer: { manufacturersLoaded, manufacturers },
}) => ({
  userId: uid,
  manufacturersLoaded,
  manufacturers,
})

const mapDispatchToProps = { fetchManufacturers }

export const ConditionRatingFormContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(ConditionRatingForm)
