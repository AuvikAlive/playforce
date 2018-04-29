import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AuditSummary } from './AuditSummary'
import {
  fetchInspectionRealTime,
  saveAuditSummary,
} from '../../../store/actions/actionCreators/newInspectionActions/'

const mapStateToProps = (
  {
    firebase: {
      profile,
      auth: { uid },
    },
    inspection: { inspectionLoaded, cover, auditSummary },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  profile,
  cover,
  auditSummary,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  saveAuditSummary,
}

export const AuditSummaryContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AuditSummary)
