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
import { StyledManufacturers } from './StyledManufacturers'

export class Manufacturers extends Component {
  state = {
    manufacturers: [],
    manufacturer: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Manufacturers')

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
    const { manufacturers, manufacturer } = this.state

    manufacturers.push(manufacturer)

    this.setState({ manufacturers, manufacturer: '' })
  }

  render() {
    const { manufacturers, manufacturer, error, loading } = this.state

    return (
      <StyledManufacturers className="StyledManufacturers">
        <Card className="card">
          {manufacturers.length ? (
            <List component="nav" disablePadding>
              {manufacturers.map((manufacturer, index) => {
                return (
                  <ListItem key={index} button>
                    <ListItemText primary={manufacturer} />
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
