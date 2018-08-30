import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'
import { state } from './state'
import { submit } from './submit'

class BaseEditImpactSurface extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Surface details')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { impactTest } = this.props

    return (
      <ImpactSurfaceDetailsForm
        buttonText="update"
        initialData={impactTest.surface}
        onSubmit={submit(this)}
      />
    )
  }
}

BaseEditImpactSurface.contextTypes = contextTypesTitleLeftNav

const enhance = compose(withFeedback)

export const EditImpactSurface = enhance(BaseEditImpactSurface)
