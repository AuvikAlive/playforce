import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addImpactSurface } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddImpactSurface } from './AddImpactSurface'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id },
}) => ({
  userId: uid,
  inspectionId: id,
})

const mapDispatchToProps = { addImpactSurface }

export const AddImpactSurfaceContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddImpactSurface)
