import { connect } from 'react-redux'
import { compose } from 'redux'
import { Inspections } from './Inspections'
import { openSearchBar, closeSearchBar } from '../../store/actions/actionCreators/searchBarActions'

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const InspectionsContainer = compose(connect(null, mapDispatchToProps))(
  Inspections,
)
