import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchInspectionRealTime,
  updateCover,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditCover } from './EditCover'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, cover } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    cover,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  updateCover,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditCoverContainer = enhance(EditCover)
