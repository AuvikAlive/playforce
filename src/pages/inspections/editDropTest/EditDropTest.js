import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { DropTestForm } from '../dropTestForm/DropTestForm'

export class EditDropTest extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, id } = this.props

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
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
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
}
