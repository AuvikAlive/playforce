import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/contextTypesTitleLeftNav'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'

class BaseAddImpactSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addSurfaceTest, afterSubmit } = this.props

    return (
      <ImpactSurfaceDetailsForm
        onSubmit={addSurfaceTest}
        afterSubmit={afterSubmit}
      />
    )
  }
}

BaseAddImpactSurface.contextTypes = contextTypesTitleLeftNav

const enhance = compose(withFeedback)

export const AddImpactSurface = enhance(BaseAddImpactSurface)
