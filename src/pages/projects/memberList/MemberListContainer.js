import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchProjectMembersRealTime } from '../../../store/actions/actionCreators/projectActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { MemberList } from './MemberList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  project: { membersLoaded, members },
}) => ({
  userId: uid,
  membersLoaded,
  members,
})

const mapDispatchToProps = {
  fetchProjectMembersRealTime,
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
