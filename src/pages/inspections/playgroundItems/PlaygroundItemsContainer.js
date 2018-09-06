import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deletePlayground } from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundItems } from './PlaygroundItems'

const mapStateToProps = ({ firebase, inspection }, { playgroundId }) => {
  const { id, playgrounds } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playgrounds,
    playgroundId,
    playground: playgrounds.find(({ id }) => id === playgroundId),
  }
}

const mapDispatchToProps = { deletePlayground }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundItemsContainer = enhance(PlaygroundItems)
