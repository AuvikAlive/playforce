import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchInspectionRealTime,
  saveNotes,
} from '../../../store/actions/actionCreators/inspectionActions'
import { Notes } from './Notes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, notes },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  notes,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  saveNotes,
}

export const NotesContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Notes)
