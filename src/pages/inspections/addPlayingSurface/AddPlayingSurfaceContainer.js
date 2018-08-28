import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddPlayingSurface } from './AddPlayingSurface'

const mapStateToProps = ({ firebase, inspection }) => ({
  userId: firebase.auth.uid,
  inspectionId: inspection.id,
})

const enhance = compose(
  withFeedback,
  connect(mapStateToProps)
)

export const AddPlayingSurfaceContainer = enhance(AddPlayingSurface)
