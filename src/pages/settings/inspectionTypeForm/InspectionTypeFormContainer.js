import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveInspectionType } from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { InspectionTypeForm } from './InspectionTypeForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveInspectionType }

export const InspectionTypeFormContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(InspectionTypeForm)
