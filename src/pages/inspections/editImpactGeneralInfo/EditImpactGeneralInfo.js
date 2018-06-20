import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { ImpactGeneralInfoForm } from '../impactGeneralInfoForm/ImpactGeneralInfoForm'

export class EditImpactGeneralInfo extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('General Info')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  submit = async data => {
    const {
      saveImpactGeneralInfo,
      userId,
      inspectionId,
      setFeedback,
    } = this.props

    await saveImpactGeneralInfo(userId, inspectionId, data)
    setFeedback({ success: 'Info updated!' })
  }

  render() {
    const { impactGeneralInfo } = this.props

    return (
      <ImpactGeneralInfoForm
        buttonText="update"
        initialData={impactGeneralInfo}
        onSubmit={this.submit}
      />
    )
  }
}

EditImpactGeneralInfo.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
