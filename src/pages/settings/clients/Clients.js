import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { StyledClients } from './StyledClients'

export class Clients extends Component {
  state = {
    clients: [],
    client: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Clients')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = () => {
    const { clients, client } = this.state

    clients.push(client)

    this.setState({ clients, client: '' })
  }

  render() {
    const { clients, client, error, loading } = this.state

    return (
      <StyledClients className="StyledClients">
        <Card className="card">
          {clients.length ? (
            <List component="nav" disablePadding>
              {clients.map((client, index) => {
                return (
                  <ListItem key={index} button>
                    <ListItemText primary={client} />
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
              label="Client"
              value={client}
              onChange={this.onInputChange('client')}
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
                Add Client
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledClients>
    )
  }
}

Clients.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
