import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/Edit'
import { StyledSite } from './StyledSite'
import { StyledNavLink } from '../../../../components/styledNavLink/StyledNavLink'
import Modal from '../../../../components/modal/Modal'
import Loadable from '../../../../components/loadable/LoadableCircular'
import { ModalContent } from './modalContent/ModalContent'
import { data } from '../../data'

const Map = Loadable({
  loader: () => import('./Map'),
})

export class SiteDetail extends Component {
  state = {
    modalOpen: false,
  }

  componentDidMount() {
    const {
      setLeftNavComponent,
      setNavTitle,
      setRightNavComponent,
      match,
      history,
    } = this.props

    const id = parseInt(match.params.id, 10) - 1
    const title = data.sites[id].name

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setNavTitle(title)

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={this.openModal}>
        <DeleteIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      removeNavTitle,
      removeRightNavComponent,
    } = this.props

    removeLefNavComponent()
    removeNavTitle()
    removeRightNavComponent()
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    const { match } = this.props

    const id = parseInt(match.params.id, 10) - 1
    const site = data.sites[id]
    const {
      latitidue,
      longitude,
      street,
      suburb,
      state,
      postcode,
      country,
      operator,
      division,
      inspections,
    } = site
    const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`
    const operatorName = data.operators[operator - 1].name
    const chips = inspections.map(({ type }) => (
      <Chip
        style={{ marginTop: 8, marginRight: 8 }}
        component="span"
        label={type}
        key={type}
      />
    ))

    return (
      <StyledSite>
        <Card className="card">
          <StyledNavLink to={match.url + '/edit'} className="edit-icon">
            <Button variant="fab" color="primary" aria-label="edit inspection">
              <EditIcon />
            </Button>
          </StyledNavLink>
          <Map lat={latitidue} lng={longitude} />
          <CardContent>
            <List>
              <ListItem divider>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Operator" secondary={operatorName} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Division" secondary={division} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Inspection Types" secondary={chips} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Modal
          open={this.state.modalOpen}
          handleClose={this.closeModal}
          hideCloseIcon
        >
          <ModalContent closeModal={this.closeModal} />
        </Modal>
      </StyledSite>
    )
  }
}
