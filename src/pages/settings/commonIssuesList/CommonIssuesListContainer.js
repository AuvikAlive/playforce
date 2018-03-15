import { connect } from 'react-redux'
import { compose } from 'redux'
import { CommonIssuesList } from './CommonIssuesList'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const CommonIssuesListContainer = compose(connect(mapStateToProps))(
  CommonIssuesList,
)
