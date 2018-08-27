import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditPlayingSurface } from './EditPlayingSurface'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id },
  },
  { match, playingSurfaces }
) => ({
  userId: uid,
  inspectionId: id,
  playingSurfaceId: match.params.id,
  playingSurface: playingSurfaces.find(item => item.id === match.params.id),
})

export const EditPlayingSurfaceContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps)
)(EditPlayingSurface)
