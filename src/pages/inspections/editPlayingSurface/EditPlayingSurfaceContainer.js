import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditPlayingSurface } from './EditPlayingSurface'

const mapStateToProps = (
  { firebase, inspection },
  { match, playingSurfaces }
) => {
  const playingSurfaceId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: inspection.id,
    playingSurfaceId,
    playingSurface: playingSurfaces.find(item => item.id === playingSurfaceId),
  }
}

const enhance = compose(
  withFeedback,
  withDialog,
  connect(mapStateToProps)
)

export const EditPlayingSurfaceContainer = enhance(EditPlayingSurface)
