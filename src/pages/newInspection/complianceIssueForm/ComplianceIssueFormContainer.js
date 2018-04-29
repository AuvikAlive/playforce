import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchCommonIssuesRealTime } from '../../../store/actions/actionCreators/commonIssueActions'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions/'
import { ComplianceIssueForm } from './ComplianceIssueForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { cover },
  equipments: { equipmentsSite, equipmentsLoaded, equipments },
  commonIssue: { commonIssuesLoaded, commonIssues },
}) => ({
  userId: uid,
  siteId: cover.location.id,
  commonIssuesLoaded,
  commonIssues,
  equipmentsSite,
  equipmentsLoaded,
  equipments,
})

const mapDispatchToProps = {
  fetchCommonIssuesRealTime,
  fetchEquipmentsRealTime,
}

export const ComplianceIssueFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(ComplianceIssueForm)
