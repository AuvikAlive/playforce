import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchInspectionRealTime,
  saveNotes,
} from '../../../store/actions/actionCreators/inspectionActions'
import { Notes } from './Notes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, notes } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    notes,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  saveNotes,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const NotesContainer = enhance(Notes)
