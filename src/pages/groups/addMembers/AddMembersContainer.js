import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchUsersRealTime,
  fetchGroupUsersRealTime,
  addMembers,
} from '../../../store/actions/actionCreators/groupActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { AddMembers } from './AddMembers'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  group: { usersLoaded, users, membersLoaded, members },
}) => ({
  userId: uid,
  usersLoaded,
  users,
  membersLoaded,
  members,
})

const mapDispatchToProps = {
  fetchUsersRealTime,
  fetchGroupUsersRealTime,
  addMembers,
  openSearchBar,
  closeSearchBar,
}

export const AddMembersContainer = compose(
  withFeedback,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddMembers)
