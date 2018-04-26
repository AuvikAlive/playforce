import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'

export class AddInspection extends Component {
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
