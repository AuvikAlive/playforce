import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchGroupsRealTime } from '../../../store/actions/actionCreators/groupActions/'
import { GroupList } from './GroupList'

const mapStateToProps = ({ firebase, group }) => {
  const { groupsLoaded, groups } = group

  return {
    userId: firebase.auth.uid,
    groupsLoaded,
    groups,
  }
}

const mapDispatchToProps = { fetchGroupsRealTime }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const GroupListContainer = enhance(GroupList)
