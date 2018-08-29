import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addCommonIssue } from '../../../store/actions/actionCreators/commonIssueActions/'
import { AddCommonIssue } from './AddCommonIssue'

const mapStateToProps = ({ firebase }) => ({
  userId: firebase.auth.uid,
})

const mapDispatchToProps = { addCommonIssue }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddCommonIssueContainer = enhance(AddCommonIssue)
