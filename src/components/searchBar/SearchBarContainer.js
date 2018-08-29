import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import {
  closeSearchBar,
  setSearchQuery,
  setSearchResults,
} from '../../store/actions/actionCreators/searchBarActions'
import { SearchBar } from './SearchBar'

const mapStateToProps = ({ searchBar }) => ({
  query: searchBar.query,
})

const mapDispatchToProps = { closeSearchBar, setSearchQuery, setSearchResults }

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const SearchBarContainer = enhance(SearchBar)
