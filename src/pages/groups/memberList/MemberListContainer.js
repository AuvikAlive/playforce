import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchMembersRealTime,
  deleteMembers,
  deleteGroup,
} from '../../../store/actions/actionCreators/groupActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { MemberList } from './MemberList'

const mapStateToProps = ({ firebase, group }) => {
  const { membersLoaded, members } = group

  return {
    userId: firebase.auth.uid,
    membersLoaded,
    members,
  }
}

const mapDispatchToProps = {
  fetchMembersRealTime,
  deleteMembers,
  deleteGroup,
  openSearchBar,
  closeSearchBar,
}

const enhance = compose(
  withFeedback,
  withDialog,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const MemberListContainer = enhance(MemberList)
