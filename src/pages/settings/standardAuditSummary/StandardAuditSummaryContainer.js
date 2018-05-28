import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { StandardAuditSummary } from './StandardAuditSummary'

const mapStateToProps = ({
  firebase: {
    profile: { standardAuditSummary },
  },
}) => ({
  standardAuditSummary,
})

const mapDispatchToProps = { updateProfile }

export const StandardAuditSummaryContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(StandardAuditSummary)
