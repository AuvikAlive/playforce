import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'
import { submit } from './submit'

export class EditImpactGeneralInfo extends Component {
  componentDidMount() {
    const title = 'General Info'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { impactGeneralInfo } = this.props

    return (
      <ImpactGeneralInfoForm
        buttonText="update"
        initialData={impactGeneralInfo}
        onSubmit={submit(this)}
      />
    )
  }
}

EditImpactGeneralInfo.contextTypes = contextTypesTitleLeftNav
