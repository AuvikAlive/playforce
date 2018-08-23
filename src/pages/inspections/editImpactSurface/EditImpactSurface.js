import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'
import { state } from './state'
import { submit } from './submit'

export class EditImpactSurface extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Surface details')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const {
      impactTest: { surface },
    } = this.props

    return (
      <ImpactSurfaceDetailsForm
        buttonText="update"
        initialData={surface}
        onSubmit={submit(this)}
      />
    )
  }
}

EditImpactSurface.contextTypes = contextTypesTitleLeftNav
