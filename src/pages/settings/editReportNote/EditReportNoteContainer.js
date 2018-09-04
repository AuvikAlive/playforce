import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import {
  updateReportNote,
  deleteReportNote,
} from '../../../store/actions/actionCreators/reportNoteActions/'
import { EditReportNote } from './EditReportNote'

const mapStateToProps = ({ firebase, reportNote }, { match }) => ({
  userId: firebase.auth.uid,
  reportNoteId: match.params.id,
  reportNote: reportNote.reportNotes.find(({ id }) => id === match.params.id),
})

const mapDispatchToProps = { updateReportNote, deleteReportNote }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditReportNoteContainer = enhance(EditReportNote)
