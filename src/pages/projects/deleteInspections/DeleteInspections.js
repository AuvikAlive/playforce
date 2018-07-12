import React, { Component } from 'react'
import { showContentWhenLoaded } from '../../../functions/showContentWhenLoaded'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import { setSelectedItems } from '../../../functions/setSelectedItems'
import { inspectionContextTypes } from '../constants/inspectionContextTypes'
import {
  onInspectionComponentDidMount,
  onInspectionComponentWillUnmount,
} from '../functions/'
import { setSelectMode } from './functions/setSelectMode'
import { getInspectionsToShow } from './functions/getInspectionsToShow'
import { StyledDeleteInspections } from './StyledDeleteInspections'

const title = 'Remove Inspections'

export class DeleteInspections extends Component {
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
      <StyledDeleteInspections className="StyledDeleteInspections">
        <SelectableList
          inspections={inspectionsToShow}
          ListView={InspectionListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={setSelectedItems(this)}
          setSelectMode={setSelectMode(this, title)}
        />
      </StyledDeleteInspections>
    )
  }
}

DeleteInspections.contextTypes = inspectionContextTypes
