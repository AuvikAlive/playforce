import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { DropTestForm } from '../dropTestForm/DropTestForm'

export class AddDropTest extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add drop test')

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

  showActionGoBack = dropNumber => {
    const { setFeedback, history, inspectionId, impactTestId } = this.props

    setFeedback({ success: 'Drop added!' })
    history.replace(
      `/inspections/edit/${inspectionId}/impactTest/edit/${impactTestId}/editDrop/${dropNumber}`
    )
  }

  submit = async data => {
    const { addDropTest, userId, inspectionId, impactTestId } = this.props
    const dropNumber = await addDropTest(
      userId,
      inspectionId,
      impactTestId,
      data
    )

    return dropNumber
  }

  render() {
    return (
      <DropTestForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddDropTest.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
