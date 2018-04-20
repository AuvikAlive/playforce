import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import {
  closeSearchBar,
  setSearchQuery,
  setSearchResults,
} from '../../store/actions/actionCreators/searchBarActions'
import { SearchBar } from './SearchBar'

const mapStateToProps = ({ searchBar: { query } }) => ({
  query,
})

const mapDispatchToProps = { closeSearchBar, setSearchQuery, setSearchResults }

export const SearchBarContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBar)
