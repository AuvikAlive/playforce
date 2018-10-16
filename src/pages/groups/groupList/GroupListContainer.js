import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
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
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const GroupListContainer = enhance(GroupList)
