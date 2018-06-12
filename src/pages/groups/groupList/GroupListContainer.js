import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchGroupsRealTime } from '../../../store/actions/actionCreators/groupActions/'
import { GroupList } from './GroupList'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    groups: { groupsLoaded, groups },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  groupsLoaded,
  groups,
})

const mapDispatchToProps = { fetchGroupsRealTime }

export const GroupListContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GroupList)
