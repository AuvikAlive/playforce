import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addInspection } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddInspection } from './AddInspection'

const mapStateToProps = ({ firebase }) => {
  const { auth, profile } = firebase

  return {
    userId: auth.uid,
    inspectionCount: profile.inspectionCount,
  }
}

const mapDispatchToProps = {
  addInspection,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddInspectionContainer = enhance(AddInspection)
