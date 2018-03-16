import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Modal from '../../../components/modal/Modal'
import { ModalDeleteContent } from '../../../components/modalDeleteContent/ModalDeleteContent'
import { StyledManufacturers } from './StyledManufacturers'

export class Manufacturers extends Component {
  state = {
    manufacturer: '',
    modalOpen: false,
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId } = this.props

    setNavTitle('Manufacturers')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  publish = async () => {
    const { manufacturer } = this.state
    const { firestore, userId } = this.props

    if (manufacturer) {
      this.setState({ error: '', loading: true })

      try {
        await firestore.add(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'manufacturers' }],
          },
          { name: manufacturer },
        )
        this.setState({ loading: false, manufacturer: '' })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.setState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  deletePrompt = id => () => {
    this.setState({ deleteItemId: id })
    this.openModal()
  }

  delete = async () => {
    const { firestore, userId } = this.props
    const { deleteItemId } = this.state

    try {
      await firestore.delete({
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'manufacturers', doc: deleteItemId }],
      })

      this.setState({ loading: false })
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    const { manufacturer, modalOpen, error, loading } = this.state

    const { manufacturers } = this.props

    return (
      <StyledManufacturers className="StyledManufacturers">
        <Card className="card">
          <List component="nav" disablePadding>
            {manufacturers.length === 0 ? (
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="title" align="center">
                      Try adding an item to get started!
                    </Typography>
                  }
                />
              </ListItem>
            ) : (
              manufacturers.map(({ id, name }) => {
                return (
                  <ListItem key={id} button>
                    <ListItemText primary={name} />
                    <ListItemIcon onClick={this.deletePrompt(id)}>
                      <DeleteIcon />
                    </ListItemIcon>
                  </ListItem>
                )
              })
            )}
          </List>
          <CardContent>
            <TextField
              fullWidth
              label="Manufacturer"
              value={manufacturer}
              onChange={this.onInputChange('manufacturer')}
              margin="normal"
            />

            {error && <p className="error">{error}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Add manufacturer
              </Button>
            )}
          </CardContent>
        </Card>

        <Modal open={modalOpen} handleClose={this.closeModal} hideCloseIcon>
          <ModalDeleteContent
            handleConfirmation={this.delete}
            closeModal={this.closeModal}
          />
        </Modal>
      </StyledManufacturers>
    )
  }
}

Manufacturers.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
