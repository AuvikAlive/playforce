import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AuditSummary } from './AuditSummary'
import { updateAuditSummary } from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { profile, auth } = firebase
  const {
    standardAuditSummary,
    displayName,
    title,
    company,
    signature,
  } = profile

  const { cover, auditSummary } = inspection

  return {
    userId: auth.uid,
    inspectionId: inspection.id,
    standardAuditSummary,
    displayName,
    title,
    company,
    signature,
    cover,
    auditSummary,
  }
}

const mapDispatchToProps = {
  updateAuditSummary,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AuditSummaryContainer = enhance(AuditSummary)
