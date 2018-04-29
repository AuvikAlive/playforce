import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addInspection } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddInspection } from './AddInspection'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = {
  addInspection,
}

export const AddInspectionContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddInspection)
