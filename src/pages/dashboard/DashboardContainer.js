import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  setUserMode,
  fetchUserGroupsRealTime,
  setUserGroup,
} from '../../store/actions/actionCreators/userModeActions/'
import { Dashboard } from './Dashboard'

const mapStateToProps = ({ firebase, group }) => {
  const { auth, profile } = firebase
  const { userMode, userGroup } = profile
  const { userGroupsLoaded, userGroups } = group

  return {
    userId: auth.uid,
    userMode,
    userGroup,
    userGroupsLoaded,
    userGroups,
  }
}

const mapDispatchToProps = {
  setUserMode,
  fetchUserGroupsRealTime,
  setUserGroup,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const DashboardContainer = enhance(Dashboard)
