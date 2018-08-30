import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'

class BaseAddImpactAttenuationTest extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Impact Attenuation Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { saveImpactGeneralInfo, afterSubmit } = this.props

    return (
      <ImpactGeneralInfoForm
        onSubmit={saveImpactGeneralInfo}
        afterSubmit={afterSubmit}
      />
    )
  }
}

BaseAddImpactAttenuationTest.contextTypes = contextTypesTitleLeftNav

const enhance = compose(withFeedback)

export const AddImpactAttenuationTest = enhance(BaseAddImpactAttenuationTest)
