import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveInspectionType } from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { InspectionTypeForm } from './InspectionTypeForm'

const mapStateToProps = ({ firebase }) => ({
  userId: firebase.auth.uid,
})

const mapDispatchToProps = { saveInspectionType }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const InspectionTypeFormContainer = enhance(InspectionTypeForm)
