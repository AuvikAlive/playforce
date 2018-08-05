import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchMembersRealTime,
  deleteMembers,
} from '../../../store/actions/actionCreators/groupActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { MemberList } from './MemberList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  group: { membersLoaded, members },
}) => ({
  userId: uid,
  membersLoaded,
  members,
})

const mapDispatchToProps = {
  fetchMembersRealTime,
  deleteMembers,
  openSearchBar,
  closeSearchBar,
}

export const MemberListContainer = compose(
  withFeedback,
  withDeleteDialog,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MemberList)