import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Card, { CardContent } from 'material-ui/Card'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import { StyledGeneralTab } from './StyledGeneralTab'
import { data } from '../data'

const operators = data.operators

export class GeneralTab extends Component {
  state = {
    operator: { id: '', name: '' },
    name: '',
    address: '',
    division: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    this.context.setNavTitle('Edit Site')

    const { site } = this.props

    if (site) {
      this.setup(site)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { site } = nextProps

    if (site) {
      this.setup(site)
    }
  }

  setup = site => {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      operator,
      division,
    } = site
    const operatorId = parseInt(operator, 10) - 1

    const operatorData = {
      id: data.operators[operatorId].id,
      label: data.operators[operatorId].name,
    }
    const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`

    this.setState({ operator: operatorData, name, address, division })
  }

  onSelectChange = event => {
    const operatorId = parseInt(event.target.value, 10) - 1

    this.setState({
      operator: data.operators[operatorId],
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleEdit = () => {
    const { name, address, division, operator } = this.state
    if (name && address && division && operator) {
      this.setState({ error: '' })
      this.setState({ loading: true })
      const { firestore, match } = this.props
      const updatedData = { name, address, division, operator: operator.id }

      firestore
        .update(`sites/${match.params.id}`, updatedData)
        .then(() => {
          firestore.get({ collection: 'sites', doc: match.params.id })
          this.setState({ loading: false })
        })
        .catch(error => {
          this.setState({ error: error.message })
          this.setState({ loading: false })
        })
    } else {
      this.setState({ error: 'Please fill up the form properly!' })
    }
  }

  render() {
    const { operator, name, address, division, error, loading } = this.state

    return (
      <StyledGeneralTab className="StyledGeneralTab">
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              id="operator"
              select
              label="Operator"
              value={operator.id}
              onChange={this.onSelectChange}
              margin="normal"
            >
              {operators.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="name"
              label="Name"
              value={name}
              onChange={this.handleChange('name')}
              margin="normal"
            />

            <TextField
              fullWidth
              id="address"
              label="Address"
              value={address}
              onChange={this.handleChange('address')}
              margin="normal"
            />

            <TextField
              fullWidth
              id="division"
              label="Division"
              value={division}
              onChange={this.handleChange('division')}
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
                onClick={this.handleEdit}
              >
                Publish Changes
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledGeneralTab>
    )
  }
}

GeneralTab.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
