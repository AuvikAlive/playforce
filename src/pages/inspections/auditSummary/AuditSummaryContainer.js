import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AuditSummary } from './AuditSummary'
import {
  fetchInspectionRealTime,
  updateAuditSummary,
} from '../../../store/actions/actionCreators/inspectionActions/'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { profile, auth } = firebase
  const { inspectionLoaded, cover, auditSummary } = inspection

  return {
    userId: auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    profile,
    cover,
    auditSummary,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
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
