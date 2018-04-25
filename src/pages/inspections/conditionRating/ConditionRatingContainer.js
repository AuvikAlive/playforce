import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchInspection } from '../../../store/actions/actionCreators/inspectionActions/'
import { ConditionRating } from './ConditionRating'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
})

const mapDispatchToProps = {
  fetchInspection,
}

export const ConditionRatingContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ConditionRating)
