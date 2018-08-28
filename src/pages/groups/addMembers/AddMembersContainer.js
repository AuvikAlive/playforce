import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchUsersRealTime,
  fetchMembersRealTime,
  addMembers,
} from '../../../store/actions/actionCreators/groupActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { AddMembers } from './AddMembers'

const mapStateToProps = ({ firebase, group }) => {
  const { usersLoaded, users, membersLoaded, members } = group

  return {
    userId: firebase.auth.uid,
    usersLoaded,
    users,
    membersLoaded,
    members,
  }
}

const mapDispatchToProps = {
  fetchUsersRealTime,
  fetchMembersRealTime,
  addMembers,
  openSearchBar,
  closeSearchBar,
}

const enhance = compose(
  withFeedback,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddMembersContainer = enhance(AddMembers)
