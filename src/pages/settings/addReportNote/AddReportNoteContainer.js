import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addReportNote } from '../../../store/actions/actionCreators/reportNoteActions/'
import { AddReportNote } from './AddReportNote'

const mapStateToProps = ({ firebase }) => ({
  userId: firebase.auth.uid,
})

const mapDispatchToProps = { addReportNote }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddReportNoteContainer = enhance(AddReportNote)
