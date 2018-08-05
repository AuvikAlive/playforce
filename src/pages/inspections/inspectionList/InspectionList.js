import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import {
  onComponentWillUnmountTitleSearchRightNav,
  setSelectedItems,
  showContentWhenLoaded,
} from '../../../functions/'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { StyledInspectionList } from './StyledInspectionList'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  handleSelectClick,
  setSelectMode,
} from './functions/'

export class InspectionList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountTitleSearchRightNav(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  setSelectMode = setSelectMode(this)

  render() {
    const {
      match,
      inspectionsLoaded,
      inspections,
      standardsLoaded,
      standards,
      view,
      searchBarOpen,
      searchResults,
    } = this.props

    const { selectedItems, selectMode } = this.state

    const isSearchMode =
      searchBarOpen && searchResults && searchResults.length > 0

    const inspectionsToShow = isSearchMode ? searchResults : inspections

    const isListView = view === 'list'

    const isLoaded = inspectionsLoaded && (isListView || standardsLoaded)

    return showContentWhenLoaded(
      isLoaded,
      <StyledInspectionList
        className={`StyledInspectionList ${view === 'grid' && 'grid'}`}
      >
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={isEmpty(inspections) ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {isListView ? (
          <SelectableList
            inspections={inspectionsToShow}
            selectedItems={selectedItems}
            selectMode={selectMode}
            setSelectedItems={setSelectedItems(this)}
            setSelectMode={setSelectMode(this)}
            handleClick={handleSelectClick(this)}
            ListView={ListView}
          />
        ) : (
          <GridView
            inspections={inspectionsToShow}
            match={match}
            standards={standards}
          />
        )}
      </StyledInspectionList>
    )
  }
}

InspectionList.contextTypes = contextTypes
