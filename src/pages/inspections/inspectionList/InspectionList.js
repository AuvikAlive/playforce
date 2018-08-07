import React, { Component } from 'react'
import { isEmpty } from 'react-redux-firebase'
import { AddButton } from '../../../components/addButton/AddButton'
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
        <AddButton to={`${match.url}/add`} pulse={isEmpty(inspections)} />

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
