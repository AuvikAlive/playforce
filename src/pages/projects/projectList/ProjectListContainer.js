import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchProjectsRealTime } from '../../../store/actions/actionCreators/projectActions/'
import { ProjectList } from './ProjectList'

const mapStateToProps = ({ firebase, project }) => {
  const { projectsLoaded, projects } = project

  return {
    userId: firebase.auth.uid,
    projectsLoaded,
    projects,
  }
}

const mapDispatchToProps = { fetchProjectsRealTime }

const enhance = compose(
  withFeedback,
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ProjectListContainer = enhance(ProjectList)
