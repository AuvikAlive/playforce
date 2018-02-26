import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { closeSearchBar } from '../../store/actions/actionCreators/searchBarActions'
import { SearchBar } from './SearchBar'

const mapDispatchToProps = { closeSearchBar }

export const SearchBarContainer = compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(SearchBar)
