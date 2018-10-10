import React, { Component } from 'react'
import { contextTypesTitleLeftBottomNav } from '../../../constants/'
import GeneralTab from '../generalTab'
import { InspectionTabRoutes } from '../inspectionTabRoutes/InspectionTabRoutes'
import { EquipmentTabRoutes } from '../equipmentTabRoutes/EquipmentTabRoutes'
import { StyledSiteEdit } from './StyledSiteEdit'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  setTabBar,
} from './functions/'

export class SiteEdit extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentDidUpdate() {
    setTabBar(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { match } = this.props
    const { tabstate, id } = match.params
    const tabId = parseInt(id, 10)

    return (
      <StyledSiteEdit className="StyledSiteEdit">
        <div className="tab-content">
          {tabstate === 'general' && <GeneralTab id={tabId} />}
          {tabstate === 'inspections' && <InspectionTabRoutes id={tabId} />}
          {tabstate === 'equipments' && <EquipmentTabRoutes id={tabId} />}
        </div>
      </StyledSiteEdit>
    )
  }
}

SiteEdit.contextTypes = contextTypesTitleLeftBottomNav
