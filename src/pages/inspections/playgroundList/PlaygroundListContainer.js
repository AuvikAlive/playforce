import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundList } from './PlaygroundList'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, playgroundsAdded, playgrounds } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    playgroundsAdded,
    playgrounds,
  }
}

const enhance = compose(connect(mapStateToProps))

export const PlaygroundListContainer = enhance(PlaygroundList)
