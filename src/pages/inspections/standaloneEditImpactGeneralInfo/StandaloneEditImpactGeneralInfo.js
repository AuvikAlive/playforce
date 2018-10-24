import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { StandaloneImpactGeneralInfoFormContainer } from '../standaloneImpactGeneralInfoForm/StandaloneImpactGeneralInfoFormContainer'
import { submit } from './submit'

class BaseStandaloneEditImpactGeneralInfo extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'General Info')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { impactGeneralInfo } = this.props

    return (
      <StandaloneImpactGeneralInfoFormContainer
        buttonText="update"
        initialData={impactGeneralInfo}
        onSubmit={submit(this)}
      />
    )
  }
}

BaseStandaloneEditImpactGeneralInfo.contextTypes = contextTypesTitleLeftNav

export const enhance = compose(withFeedback)

export const StandaloneEditImpactGeneralInfo = enhance(
  BaseStandaloneEditImpactGeneralInfo
)
