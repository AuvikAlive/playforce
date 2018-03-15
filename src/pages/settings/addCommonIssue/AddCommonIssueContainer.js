import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddCommonIssue } from './AddCommonIssue'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const AddCommonIssueContainer = compose(connect(mapStateToProps))(
  AddCommonIssue,
)
