import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'
import { submit } from './submit'

class BaseEditImpactGeneralInfo extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'General Info')
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

BaseEditImpactGeneralInfo.contextTypes = contextTypesTitleLeftNav

export const enhance = compose(withFeedback)

export const EditImpactGeneralInfo = enhance(BaseEditImpactGeneralInfo)
