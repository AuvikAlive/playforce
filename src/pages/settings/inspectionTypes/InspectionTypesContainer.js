import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  deleteInspectionType,
  fetchInspectionTypesRealTime,
} from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
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
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const InspectionTypesContainer = enhance(InspectionTypes)
