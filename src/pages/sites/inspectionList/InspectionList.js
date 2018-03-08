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

  deleteItem = () => {
    const { firestore, site: { inspections }, match } = this.props
    const { deleteIndex } = this.state

    const updatedInspections = inspections.filter(
      (item, index) => index !== deleteIndex,
    )

    firestore
      .update(`sites/${match.params.id}`, { inspections: updatedInspections })
      .then(() => {
        firestore.get({ collection: 'sites', doc: match.params.id })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { site } = this.props

    if (site) {
      const { site: { inspections }, match } = this.props
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
                inspections.map(({ type }, index, list) => {
                  return (
                    <div key={type}>
                      <ListItem button>
                        <ListItemText primary={type} />
                        <ListItemIcon onClick={this.deletePrompt(index)}>
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
