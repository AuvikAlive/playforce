import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addPlayground } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddPlayground } from './AddPlayground'

const mapStateToProps = ({ firebase, inspection }) => ({
  userId: firebase.auth.uid,
  inspectionId: inspection.id,
})

const mapDispatchToProps = { addPlayground }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddPlaygroundContainer = enhance(AddPlayground)
