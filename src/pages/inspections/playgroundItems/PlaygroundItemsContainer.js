import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deleteImpactTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundItems } from './PlaygroundItems'

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

const mapDispatchToProps = { deleteImpactTest }

export const PlaygroundItemsContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundItems)
