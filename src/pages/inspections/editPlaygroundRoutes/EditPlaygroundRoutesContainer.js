import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditPlaygroundRoutes } from './EditPlaygroundRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, inspectionLoaded, playgroundsLoaded } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playgroundId: match.params.id,
    inspectionLoaded,
    playgroundsLoaded,
  }
}

const enhance = compose(connect(mapStateToProps))

export const EditPlaygroundRoutesContainer = enhance(EditPlaygroundRoutes)
