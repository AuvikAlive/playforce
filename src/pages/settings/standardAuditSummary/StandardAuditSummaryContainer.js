import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { StandardAuditSummary } from './StandardAuditSummary'

const mapStateToProps = ({ firebase }) => ({
  standardAuditSummary: firebase.profile.standardAuditSummary,
})

const mapDispatchToProps = { updateProfile }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const StandardAuditSummaryContainer = enhance(StandardAuditSummary)
