import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'

export class AddImpactAttenuationTest extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Impact Attenuation Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { userId, inspectionId, saveImpactGeneralInfo } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest`

    return (
      <ImpactGeneralInfoForm
        onSubmit={data => saveImpactGeneralInfo(userId, inspectionId, data)}
        afterSubmit={showActionGo(this, 'Impact test added!', pathHead)}
      />
    )
  }
}

AddImpactAttenuationTest.contextTypes = contextTypesTitleLeftNav
