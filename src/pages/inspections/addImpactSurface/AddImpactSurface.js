import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/contextTypesTitleLeftNav'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'

export class AddImpactSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { userId, inspectionId, addSurfaceTest } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest/edit/`

    return (
      <ImpactSurfaceDetailsForm
        onSubmit={data => addSurfaceTest(userId, inspectionId, data)}
        afterSubmit={showActionGo(this, 'Test added!', pathHead)}
      />
    )
  }
}

AddImpactSurface.contextTypes = contextTypesTitleLeftNav
