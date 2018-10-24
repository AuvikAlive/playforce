import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { StandaloneImpactGeneralInfoFormContainer } from '../standaloneImpactGeneralInfoForm/StandaloneImpactGeneralInfoFormContainer'

export class StandaloneAddImpactAttenuationTest extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Impact Attenuation Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { onSubmit, afterSubmit } = this.props

    return (
      <StandaloneImpactGeneralInfoFormContainer
        {...{ onSubmit, afterSubmit }}
      />
    )
  }
}

StandaloneAddImpactAttenuationTest.contextTypes = contextTypesTitleLeftNav
