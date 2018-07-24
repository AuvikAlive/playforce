import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'
import { submit } from './submit'

export class EditImpactSurface extends Component {
  state = { location: '', description: '', material: '', condition: '' }

  componentDidMount() {
    const title = 'Surface details'

    onComponentDidMountWithTitleLeftNav(this, title)
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
