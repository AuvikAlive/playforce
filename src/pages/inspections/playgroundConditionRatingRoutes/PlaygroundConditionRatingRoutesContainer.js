import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundConditionRatingRoutes } from './PlaygroundConditionRatingRoutes'
import {
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, playgrounds },
  },
  { playgroundId }
) => ({
  userId: uid,
  inspectionId: id,
  playgrounds,
  playground: playgrounds.find(({ id }) => id === playgroundId),
})

const mapDispatchToProps = {
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
}

export const PlaygroundConditionRatingRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundConditionRatingRoutes)
