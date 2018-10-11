import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveNotes } from '../../../store/actions/actionCreators/inspectionActions'
import { Notes } from './Notes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, notes } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    notes,
  }
}

const mapDispatchToProps = {
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
