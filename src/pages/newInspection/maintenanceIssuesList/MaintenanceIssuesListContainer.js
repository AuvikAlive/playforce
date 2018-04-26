import { connect } from 'react-redux'
import { compose } from 'redux'
import { MaintenanceIssuesList } from './MaintenanceIssuesList'

const mapStateToProps = ({ inspection: { maintenanceIssues } }) => ({
  maintenanceIssues,
})

export const MaintenanceIssuesListContainer = compose(connect(mapStateToProps))(
  MaintenanceIssuesList,
)
