import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundConditionRatingRoutes } from './PlaygroundConditionRatingRoutes'
import {
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = ({ firebase, inspection }, { playgroundId }) => {
  const { id, playgrounds } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playgrounds,
    playground: playgrounds.find(({ id }) => id === playgroundId),
  }
}

const mapDispatchToProps = {
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundConditionRatingRoutesContainer = enhance(
  PlaygroundConditionRatingRoutes
)
