import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'

export class AddImpactAttenuationTest extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Impact Attenuation Test')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  showActionGoBack = () => {
    const { setFeedback, history, inspectionId } = this.props

    setFeedback({ success: 'General info added!' })
    history.replace(`/inspections/edit/${inspectionId}/impactTest`)
  }

  submit = async data => {
    const { saveImpactGeneralInfo, userId, inspectionId } = this.props

    await saveImpactGeneralInfo(userId, inspectionId, data)
  }

  render() {
    return (
      <ImpactGeneralInfoForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddImpactAttenuationTest.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
