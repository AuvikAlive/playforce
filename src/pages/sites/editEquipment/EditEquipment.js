import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EquipmentForm from '../equipmentForm/'

export class EditEquipment extends Component {
  componentDidMount() {
    const { setNavTitle, setRightNavComponent } = this.context
    const {
      openDialog,
      equipment,
      fetchEquipment,
      userId,
      siteId,
      assetId,
    } = this.props

    setNavTitle('Edit Equipment')
    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="Search"
        onClick={() => openDialog(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )

    !equipment && fetchEquipment(userId, siteId, assetId)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeRightNavComponent } = this.context

    removeNavTitle()
    removeRightNavComponent()
  }

  submit = async data => {
    const { saveEquipment, userId, setFeedback, siteId, assetId } = this.props

    data.assetId = assetId

    await saveEquipment(userId, siteId, data)
    setFeedback({ success: 'Equipment updated!' })
  }

  showActionGoBack = async () => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: 'Equipment deleted!' })
    history.goBack()
  }

  delete = async () => {
    const { deleteEquipment, userId, siteId, assetId } = this.props

    await deleteEquipment(userId, siteId, assetId)
    this.showActionGoBack()
  }

  render() {
    const { equipment } = this.props

    return (
      <EquipmentForm
        buttonText="update"
        initialData={equipment}
        onSubmit={this.submit}
      />
    )
  }
}

EditEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
