import { connect } from 'react-redux'
import { compose } from 'redux'
import { ReportNoteRoutes } from './ReportNoteRoutes'
import { fetchReportNotesRealTime } from '../../../store/actions/actionCreators/reportNoteActions/'

const mapStateToProps = ({ firebase, reportNote }) => {
  const { reportNotesLoaded, reportNotes } = reportNote

  return {
    userId: firebase.auth.uid,
    reportNotesLoaded,
    reportNotes,
  }
}

const mapDispatchToProps = { fetchReportNotesRealTime }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ReportNoteRoutesContainer = enhance(ReportNoteRoutes)
