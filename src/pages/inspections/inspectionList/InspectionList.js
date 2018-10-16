import React, { Component } from 'react'
import { AddButton } from '../../../components/addButton/AddButton'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import {
  onComponentWillUnmountTitleSearchRightNav,
  setSelectedItems,
  showContentWhenLoaded,
} from '../../../functions/'
import { GridView } from './GridView'
import { StyledInspectionList } from './StyledInspectionList'
import { contextTypes } from './contextTypes'
import { inspectionTypes } from './inspectionTypes'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  handleSelectClick,
  setSelectMode,
  onAddInspection,
} from './functions/'

export class InspectionList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
    inspectionType: inspectionTypes[0].value,
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
        {/* <AddButton
          to={`${match.url}/ComprehensiveInspection/add`}
          pulse={!inspections || inspections.length === 0}
        /> */}

        <AddButton
          onClick={onAddInspection(this)}
          pulse={!inspections || inspections.length === 0}
        />

        {isListView ? (
          <SelectableList
            inspections={inspectionsToShow}
            selectedItems={selectedItems}
            selectMode={selectMode}
            setSelectedItems={setSelectedItems(this)}
            setSelectMode={setSelectMode(this)}
            handleClick={handleSelectClick(this)}
            ListView={InspectionListView}
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
