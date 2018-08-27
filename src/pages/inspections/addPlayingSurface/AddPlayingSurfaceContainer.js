import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddPlayingSurface } from './AddPlayingSurface'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id },
}) => ({
  userId: uid,
  inspectionId: id,
})

export const AddPlayingSurfaceContainer = compose(
  withFeedback,
  connect(mapStateToProps)
)(AddPlayingSurface)
