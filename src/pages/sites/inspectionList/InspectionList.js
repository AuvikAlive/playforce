import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import DeleteIcon from 'material-ui-icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import { LinearProgress } from 'material-ui/Progress'
import { StyledInspectionList } from './StyledInspectionList'
import Modal from '../../../components/modal/Modal'
import { ModalContent } from '../modalContent/ModalContent'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionList extends Component {
  state = {
    modalOpen: false,
    deleteIndex: null,
  }

  componentDidMount() {
    this.context.setNavTitle('Edit Site')

    const { firestore, userId, siteId } = this.props

    firestore.setListener({
      collection: `users/${userId}/sites/${siteId}/inspections`,
    })
  }

  componentWillUnmount() {
    const { firestore, userId, siteId } = this.props

    firestore.unsetListener({
      collection: `users/${userId}/sites/${siteId}/inspections`,
    })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  deletePrompt = index => () => {
    this.setState({ deleteIndex: index })
    this.openModal()
  }

  deleteItem = async () => {
    const { firestore, userId, siteId } = this.props
    const { deleteIndex } = this.state

    try {
      await firestore.delete({
        collection: `users/${userId}/sites/${siteId}/inspections`,
        doc: deleteIndex,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { inspections } = this.props

    if (inspections) {
      const { match } = this.props
      return (
        <StyledInspectionList className="StyledInspectionList">
          <StyledNavLink to={match.url + '/addInspection'} className="add-icon">
            <Button variant="fab" color="primary" aria-label="add inspection">
              <AddIcon />
            </Button>
          </StyledNavLink>
          <Paper className="paper">
            <List component="nav" disablePadding>
              {isEmpty(inspections) ? (
                <ListItem>
                  <ListItemText primary="No inspection added" />
                </ListItem>
              ) : (
                inspections.map(({ type, id }, index, list) => {
                  return (
                    <div key={id}>
                      <ListItem button>
                        <ListItemText primary={type} />
                        <ListItemIcon onClick={this.deletePrompt(id)}>
                          <DeleteIcon />
                        </ListItemIcon>
                      </ListItem>
                      {index !== list.length - 1 && <Divider />}
                    </div>
                  )
                })
              )}
            </List>
          </Paper>
          <Modal
            open={this.state.modalOpen}
            handleClose={this.closeModal}
            hideCloseIcon
          >
            <ModalContent
              handleConfirmation={this.deleteItem}
              closeModal={this.closeModal}
            />
          </Modal>
        </StyledInspectionList>
      )
    } else {
      return <LinearProgress />
    }
  }
}

InspectionList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
