import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'

export class AddImpactSurface extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add test')

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

  showActionGoBack = surfaceId => {
    const { setFeedback, history, inspectionId } = this.props

    setFeedback({ success: 'Test added!' })
    history.replace(
      `/inspections/edit/${inspectionId}/impactTest/edit/${surfaceId}`
    )
  }

  submit = async data => {
    const { addSurfaceTest, userId, inspectionId } = this.props
    const surfaceId = await addSurfaceTest(userId, inspectionId, data)

    return surfaceId
  }

  render() {
    return (
      <ImpactSurfaceDetailsForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddImpactSurface.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
