import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditInspectionRoutes } from './EditInspectionRoutes'
import {
  fetchInspectionRealTime,
  discardInspection,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions'
import { fetchReportNotesRealTime } from '../../../store/actions/actionCreators/reportNoteActions/'

const mapStateToProps = (
  { firebase, inspection, standard, reportNote },
  { match }
) => {
  const { inspectionLoaded } = inspection
  const { standardsLoaded } = standard
  const { reportNotesLoaded } = reportNote

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    standardsLoaded,
    reportNotesLoaded,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchStandardsRealTime,
  fetchReportNotesRealTime,
  discardInspection,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditInspectionRoutesContainer = enhance(EditInspectionRoutes)
