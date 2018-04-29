import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'

export class AddInspection extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Inspection')

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

  showActionGoBack = async inspectionId => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: 'Inspection added!' })
    history.replace(`edit/${inspectionId}`)
  }

  submit = async cover => {
    const { addInspection, userId } = this.props
    const inspectionId = await addInspection(userId, cover)

    this.showActionGoBack(inspectionId)
  }

  render() {
    return <CoverFormContainer onSubmit={this.submit} />
  }
}

AddInspection.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
