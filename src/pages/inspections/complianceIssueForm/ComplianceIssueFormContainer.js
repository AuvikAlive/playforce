import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchCommonIssuesRealTime } from '../../../store/actions/actionCreators/commonIssueActions'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions/'
import { ComplianceIssueForm } from './ComplianceIssueForm'

const mapStateToProps = ({ firebase, inspection, equipment, commonIssue }) => {
  const { auth, profile } = firebase
  const { preimplementationRecommendation } = profile
  const { cover } = inspection
  const { equipmentsSite, equipmentsLoaded, equipments } = equipment
  const { commonIssuesLoaded, commonIssues } = commonIssue

  return {
    userId: auth.uid,
    siteId: cover.location.id,
    commonIssuesLoaded,
    commonIssues,
    equipmentsSite,
    equipmentsLoaded,
    equipments,
    preimplementationRecommendation,
  }
}

const mapDispatchToProps = {
  fetchCommonIssuesRealTime,
  fetchEquipmentsRealTime,
}

const enhance = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ComplianceIssueFormContainer = enhance(ComplianceIssueForm)
