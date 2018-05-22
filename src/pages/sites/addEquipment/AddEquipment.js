import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EquipmentForm from '../equipmentForm/'

export class AddEquipment extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context
    setNavTitle('Add an Equipment')
  }

  componentWillMount() {
    const { removeNavTitle } = this.context
    removeNavTitle()
  }

  showActionGoBack = assetId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Equipment published!' })
    history.replace(`${assetId}/edit`)
  }

  submit = async data => {
    const { addEquipment, userId, siteId } = this.props

    return await addEquipment(userId, siteId, data)
  }

  render() {
    return (
      <EquipmentForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
