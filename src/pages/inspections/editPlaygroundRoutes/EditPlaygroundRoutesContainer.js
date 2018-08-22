import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditPlaygroundRoutes } from './EditPlaygroundRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, inspectionLoaded, playgroundsLoaded },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  playgroundId: match.params.id,
  inspectionLoaded,
  playgroundsLoaded,
})

export const EditPlaygroundRoutesContainer = compose(connect(mapStateToProps))(
  EditPlaygroundRoutes
)
