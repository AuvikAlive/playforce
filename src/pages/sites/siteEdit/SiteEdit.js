import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { StyledSiteEdit } from './StyledSiteEdit'
import GeneralTab from '../generalTab'
import { InspectionTabRoutes } from '../inspectionTabRoutes/InspectionTabRoutes'
import { EquipmentTabRoutes } from '../equipmentTabRoutes/EquipmentTabRoutes'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  onTabChange,
} from './functions/'

export class SiteEdit extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const {
      match: {
        params: { tabstate, id },
      },
    } = this.props

    const tabId = parseInt(id, 10)

    return (
      <StyledSiteEdit className="StyledSiteEdit">
        <Tabs
          fullWidth
          // centered
          classes={{ root: 'my-root' }}
          value={tabstate}
          onChange={onTabChange(this)}
        >
          <Tab className="tab-title" value="general" label="General" />
          <Tab className="tab-title" value="inspections" label="Inspections" />
          <Tab className="tab-title" value="equipments" label="Equipments" />
        </Tabs>

        <div className="tab-content">
          {tabstate === 'general' && <GeneralTab id={tabId} />}
          {tabstate === 'inspections' && <InspectionTabRoutes id={tabId} />}
          {tabstate === 'equipments' && <EquipmentTabRoutes id={tabId} />}
        </div>
      </StyledSiteEdit>
    )
  }
}

SiteEdit.contextTypes = contextTypes
