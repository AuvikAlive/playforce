import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/contextTypesTitleLeftNav'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'
import { submit } from './submit'

const message = 'Test added!'

export class AddImpactSurface extends Component {
  componentDidMount() {
    const title = 'Add test'

    onComponentDidMountWithTitleLeftNav(this, title)
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
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddImpactSurface.contextTypes = contextTypesTitleLeftNav
