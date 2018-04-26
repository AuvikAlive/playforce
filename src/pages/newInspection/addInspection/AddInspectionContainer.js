import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addInspection } from '../../../store/actions/actionCreators/newInspectionActions/'
import { AddInspection } from './AddInspection'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile: { inspectionCount },
  },
}) => ({
  userId: uid,
  inspectionCount,
})

const mapDispatchToProps = {
  addInspection,
}

export const AddInspectionContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddInspection)
