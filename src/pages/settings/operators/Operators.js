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
import { StyledOperators } from './StyledOperators'

export class Operators extends Component {
  state = {
    operator: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId } = this.props

    setNavTitle('Operators')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'operators' }],
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
      subcollections: [{ collection: 'operators' }],
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = async () => {
    const { operator } = this.state
    const { firestore, userId, setErrorLoadingState } = this.props

    if (operator) {
      setErrorLoadingState({ error: '', loading: true })

      try {
        await firestore.add(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'operators' }],
          },
          { name: operator },
        )
        setErrorLoadingState({ loading: false })
        this.setState({ operator: '' })
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  deletePrompt = deleteItemId => {
    const { openModal } = this.props

    this.setState({ deleteItemId })

    openModal(this.delete)
  }

  delete = async () => {
    const { firestore, userId } = this.props
    const { deleteItemId } = this.state

    return firestore.delete({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'operators', doc: deleteItemId }],
    })
  }

  render() {
    const { operator } = this.state
    const { operators, error, loading } = this.props

    return (
      <StyledOperators className="StyledOperators">
        <Card className="card">
          {!!operators && operators.length > 0 ? (
            <List component="nav" disablePadding>
              {operators.map(({ id, name }) => {
                return (
                  <ListItem key={id} button>
                    <ListItemText primary={name} />
                    <ListItemIcon onClick={() => this.deletePrompt(id)}>
                      <DeleteIcon />
                    </ListItemIcon>
                  </ListItem>
                )
              })}
            </List>
          ) : (
            <ListItem>
              <ListItemText
                primary={
                  <Typography component="span" variant="title" align="center">
                    Try adding an item to get started!
                  </Typography>
                }
              />
            </ListItem>
          )}
          <CardContent>
            <TextField
              fullWidth
              label="operator"
              value={operator}
              onChange={this.onInputChange('operator')}
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
                Add operator
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledOperators>
    )
  }
}

Operators.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
