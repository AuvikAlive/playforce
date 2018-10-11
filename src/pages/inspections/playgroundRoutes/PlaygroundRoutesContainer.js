import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundRoutes } from './PlaygroundRoutes'

const mapStateToProps = ({ firebase, inspection }) => {
  return {
    userId: firebase.auth.uid,
    inspectionId: inspection.id,
  }
}

const enhance = compose(connect(mapStateToProps))

export const PlaygroundRoutesContainer = enhance(PlaygroundRoutes)
