import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionList } from './InspectionList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const InspectionListContainer = compose(
  connect(null, mapDispatchToProps),
)(InspectionList)
