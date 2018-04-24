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
    const { history, userId, fetchOperatorsRealTime } = this.props

    setNavTitle('Operators')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    const unsubscribe = await fetchOperatorsRealTime(userId)

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
    const { saveOperator, userId, setFeedback } = this.props

    if (operator) {
      setFeedback({ error: '', loading: true })

      try {
        await saveOperator(userId, { name: operator })
        setFeedback({ loading: false })
        this.setState({ operator: '' })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  deletePrompt = deleteItemId => {
    const { openDialog } = this.props

    this.setState({ deleteItemId })

    openDialog(this.delete)
  }

  delete = async () => {
    const { deleteOperator, userId } = this.props
    const { deleteItemId } = this.state

    return deleteOperator(userId, deleteItemId)
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
