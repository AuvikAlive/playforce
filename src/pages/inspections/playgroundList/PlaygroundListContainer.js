import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundList } from './PlaygroundList'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, playgroundsAdded, playgrounds },
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
  playgroundsAdded,
  playgrounds,
})

export const PlaygroundListContainer = compose(connect(mapStateToProps))(
  PlaygroundList
)
