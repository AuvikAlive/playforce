import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import DeleteIcon from 'material-ui-icons/Delete'
import { StyledInspectionList } from './StyledInspectionList'
import Modal from '../../../../../../components/modal/Modal'
import { ModalContent } from '../../../siteDetail/modalContent/ModalContent'
import { StyledNavLink } from '../../../../../../components/styledNavLink/StyledNavLink'
import { data } from '../../../../data'

export class InspectionList extends Component {
  state = {
    inspections: [],
    modalOpen: false,
  }

  componentDidMount() {
    const { id } = this.props
    const { inspections } = data.sites[id]

    this.setState({ inspections })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }
  render() {
    const { match } = this.props

    return (
      <StyledInspectionList>
        <StyledNavLink to={match.url + '/addInspection'} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add inspection">
            <AddIcon />
          </Button>
        </StyledNavLink>
        <Paper className="paper">
          <List component="nav" disablePadding>
            {this.state.inspections.map(({ type }, index, list) => {
              return (
                <div key={type}>
                  <ListItem button>
                    <ListItemText primary={type} />
                    <ListItemIcon onClick={this.openModal}>
                      <DeleteIcon />
                    </ListItemIcon>
                  </ListItem>
                  {index !== list.length - 1 && <Divider />}
                </div>
              )
            })}
          </List>
        </Paper>
        <Modal
          open={this.state.modalOpen}
          handleClose={this.closeModal}
          hideCloseIcon
        >
          <ModalContent closeModal={this.closeModal} />
        </Modal>
      </StyledInspectionList>
    )
  }
}
