import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { ImpactSurfaceDetailsForm } from '../impactSurfaceDetailsForm/ImpactSurfaceDetailsForm'

export class EditImpactSurface extends Component {
  state = { location: '', description: '', material: '', condition: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Surface details')

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
      updateImpactSurface,
      userId,
      id,
      inspectionId,
      setFeedback,
    } = this.props

    await updateImpactSurface(userId, inspectionId, id, data)

    setFeedback({ success: 'Surface updated!' })
  }

  render() {
    const {
      impactTest: { surface },
    } = this.props

    return (
      <ImpactSurfaceDetailsForm
        buttonText="update"
        initialData={surface}
        onSubmit={this.submit}
      />
    )
  }
}

EditImpactSurface.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
