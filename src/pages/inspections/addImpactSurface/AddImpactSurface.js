import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/contextTypesTitleLeftNav'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'
import { submit } from './submit'

export class AddImpactSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { inspectionId } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest/edit/`

    return (
      <ImpactSurfaceDetailsForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, 'Test added!', pathHead)}
      />
    )
  }
}

AddImpactSurface.contextTypes = contextTypesTitleLeftNav
