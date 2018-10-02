import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  setUserMode,
  fetchUserGroupsRealTime,
} from '../../store/actions/actionCreators/userModeActions/'
import { Dashboard } from './Dashboard'

const mapStateToProps = ({ firebase, group, databaseRoot }) => {
  const { auth, profile } = firebase
  const { userMode } = profile
  const { inspectionCount = 0, inspectionCompleteCount = 0 } = databaseRoot.root
  const { userGroupsLoaded, userGroups } = group

  return {
    userId: auth.uid,
    userMode,
    inspectionCount,
    inspectionCompleteCount,
    userGroupsLoaded,
    userGroups,
  }
}

const mapDispatchToProps = {
  setUserMode,
  fetchUserGroupsRealTime,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const DashboardContainer = enhance(Dashboard)
