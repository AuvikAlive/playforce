import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchProjectsRealTime } from '../../../store/actions/actionCreators/projectActions/'
import { ProjectList } from './ProjectList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  project: { projectsLoaded, projects },
}) => ({
  userId: uid,
  projectsLoaded,
  projects,
})

const mapDispatchToProps = { fetchProjectsRealTime }

export const ProjectListContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProjectList)
