import React, { Component } from 'react'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'
import { contextTypes } from './contextTypes'
import { submit } from './submit'

const message = 'General info added!'

export class AddImpactAttenuationTest extends Component {
  componentDidMount() {
    const title = 'Impact Attenuation Test'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { inspectionId } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest/`

    return (
      <ImpactGeneralInfoForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddImpactAttenuationTest.contextTypes = contextTypes
