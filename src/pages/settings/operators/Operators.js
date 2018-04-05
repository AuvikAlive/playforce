import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
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
    unsubscribe: null,
  }

  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, userId, fetchOperators } = this.props

    setNavTitle('Operators')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    const unsubscribe = await fetchOperators(userId)

    this.setState({ unsubscribe })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()

    this.state.unsubscribe()
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
    const { operatorsLoaded, operators, error, loading } = this.props

    return operatorsLoaded ? (
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
    ) : (
      <LinearProgress />
    )
  }
}

Operators.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
