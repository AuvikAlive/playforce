import React, { Component } from 'react'
import { showContentWhenLoaded } from '../../../functions/showContentWhenLoaded'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import { setSelectedItems } from '../../../functions/setSelectedItems'
import { onInspectionComponentDidMount } from '../functions/onInspectionComponentDidMount'
import { onInspectionComponentWillUnmount } from '../functions/onInspectionComponentWillUnmount'
import { setSelectMode } from './functions/setSelectMode'
import { getInspectionsToShow } from './functions/getInspectionsToShow'
import { contextTypes } from './contextTypes'
import { StyledAddInspections } from './StyledAddInspections'

export class AddInspections extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onInspectionComponentDidMount(this, 'Add Inspections')
  }

  componentWillUnmount() {
    onInspectionComponentWillUnmount(this)
  }

  render() {
    const { selectedItems, selectMode } = this.state
    const { inspectionsLoaded, projectMembersLoaded } = this.props
    const inspectionsToShow = getInspectionsToShow(this)
    const isLoaded = inspectionsLoaded && projectMembersLoaded

    return showContentWhenLoaded(
      isLoaded,
      <StyledAddInspections className="StyledAddInspections">
        <SelectableList
          inspections={inspectionsToShow}
          ListView={InspectionListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={setSelectedItems(this)}
          setSelectMode={setSelectMode(this)}
        />
      </StyledAddInspections>
    )
  }
}

AddInspections.contextTypes = contextTypes
