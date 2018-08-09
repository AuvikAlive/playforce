import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  updatePlayingSurface,
  deletePlayingSurface,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditPlayingSurface } from './EditPlayingSurface'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, playingSurfaces },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  playingSurfaceId: match.params.id,
  playingSurface: playingSurfaces.find(item => item.id === match.params.id),
})

const mapDispatchToProps = { updatePlayingSurface, deletePlayingSurface }

export const EditPlayingSurfaceContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditPlayingSurface)
