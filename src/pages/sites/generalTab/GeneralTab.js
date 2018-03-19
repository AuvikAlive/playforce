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
    operator: '',
    name: '',
    address: '',
    division: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    this.context.setNavTitle('Edit Site')
    const { firestore, userId, siteId } = this.props

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'sites', doc: siteId }],
    })
  }

  componentWillUnmount() {
    const { firestore, userId, siteId } = this.props

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'sites', doc: siteId }],
    })
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
    const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`

    this.setState({ operator, name, address, division })
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

  handleEdit = async () => {
    const { name, address, division, operator } = this.state
    if (name && address && division && operator) {
      this.setState({ error: '', loading: true })

      const { firestore, userId, siteId } = this.props
      const updatedData = { name, address, division, operator }

      try {
        await firestore.update(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'sites', doc: siteId }],
          },
          updatedData,
        )

        this.setState({ loading: false })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
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
              value={operator}
              onChange={this.handleChange('operator')}
              margin="normal"
            >
              {operators.map(option => (
                <MenuItem key={option.id} value={option.name}>
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
                Publish
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
