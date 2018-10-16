import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  deleteInspectionType,
  fetchInspectionTypesRealTime,
} from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { InspectionTypes } from './InspectionTypes'

const mapStateToProps = ({ firebase, inspectionType }) => {
  const { inspectionTypesLoaded, inspectionTypes } = inspectionType

  return {
    userId: firebase.auth.uid,
    inspectionTypesLoaded,
    inspectionTypes,
  }
}

const mapDispatchToProps = {
  deleteInspectionType,
  fetchInspectionTypesRealTime,
}

const enhance = compose(
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const InspectionTypesContainer = enhance(InspectionTypes)
