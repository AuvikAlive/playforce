import React, { Component } from 'react'
import { showContentWhenLoaded } from '../../../functions/showContentWhenLoaded'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import { setSelectedItems } from '../../../functions/setSelectedItems'
import {
  onInspectionComponentDidMount,
  onInspectionComponentWillUnmount,
} from '../functions/'
import { setSelectMode } from './functions/setSelectMode'
import { getInspectionsToShow } from './functions/getInspectionsToShow'
import { inspectionContextTypes } from '../constants/inspectionContextTypes'
import { StyledAddInspections } from './StyledAddInspections'

const title = 'Add Inspections'

export class AddInspections extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onInspectionComponentDidMount(this, title)
  }

  componentWillUnmount() {
    onInspectionComponentWillUnmount(this)
  }

  render() {
    const { selectedItems, selectMode } = this.state
    const { inspectionsLoaded, projectMembersLoaded } = this.props
    const isLoaded = inspectionsLoaded && projectMembersLoaded
    const inspectionsToShow = getInspectionsToShow(this)

    return showContentWhenLoaded(
      isLoaded,
      <StyledAddInspections className="StyledAddInspections">
        <SelectableList
          inspections={inspectionsToShow}
          ListView={InspectionListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={setSelectedItems(this)}
          setSelectMode={setSelectMode(this, title)}
        />
      </StyledAddInspections>
    )
  }
}

AddInspections.contextTypes = inspectionContextTypes
