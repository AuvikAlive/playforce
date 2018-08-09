import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addPlayingSurface } from '../../../store/actions/actionCreators/inspectionActions/'
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

const mapDispatchToProps = { addPlayingSurface }

export const AddPlayingSurfaceContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddPlayingSurface)
