import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ComplianceIssueRoutes } from './ComplianceIssueRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, playingSurfaces, complianceIssues } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playingSurfaces,
    complianceIssues,
  }
}

const mapDispatchToProps = {
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ComplianceIssueRoutesContainer = enhance(ComplianceIssueRoutes)
