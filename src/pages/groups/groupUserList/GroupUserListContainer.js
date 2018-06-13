import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchGroupUsersRealTime,
  deleteMembers,
} from '../../../store/actions/actionCreators/groupActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { GroupUserList } from './GroupUserList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  groups: { groupUsersLoaded, groupUsers },
}) => ({
  userId: uid,
  groupUsersLoaded,
  groupUsers,
})

const mapDispatchToProps = {
  fetchGroupUsersRealTime,
  deleteMembers,
  openSearchBar,
  closeSearchBar,
}

export const GroupUserListContainer = compose(
  withFeedback,
  withDeleteModal,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GroupUserList)
