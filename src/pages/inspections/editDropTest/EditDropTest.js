import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { DropTestForm } from '../dropTestForm/DropTestForm'

export class EditDropTest extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, id, openDialog } = this.props

    setNavTitle(`Edit drop ${id}`)

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete surface test"
        onClick={() => openDialog(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  showActionGoBack = message => {
    const { setFeedback, history } = this.props

    setFeedback({ success: message })
    history.goBack()
  }

  delete = async () => {
    const {
      inspectionId,
      userId,
      impactTestId,
      id,
      deleteDropTest,
    } = this.props

    await deleteDropTest(userId, inspectionId, impactTestId, id)

    this.showActionGoBack(`Drop ${id} deleted!`)
  }

  submit = async data => {
    const {
      updateDropTest,
      userId,
      inspectionId,
      impactTestId,
      id,
      setFeedback,
    } = this.props

    await updateDropTest({
      userId,
      inspectionId,
      impactTestId,
      id,
      data,
    })

    setFeedback({ success: 'Test updated!' })
  }

  render() {
    const { dropTest } = this.props

    return (
      <DropTestForm
        buttonText="update"
        initialData={dropTest}
        onSubmit={this.submit}
      />
    )
  }
}

EditDropTest.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
