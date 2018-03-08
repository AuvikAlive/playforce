import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledAppInspection } from './StyledAddInspection'

const inspectionTypes = ['Routine', 'Operational', 'Comprehensive']
const frequencies = ['Weekly', 'Monthly', 'Annually']
const assignees = ['Justin Kaese', 'Joe Bloggs', 'Jane Doe']

export class AddInspection extends Component {
  state = {
    type: '',
    frequency: '',
    userAssigned: '',
    error: '',
    loading: false,
  }

  componentDidMount() {
    this.context.setNavTitle('Add Inspection')
  }

  componentWillUnmount() {
    this.context.setNavTitle('Edit Site')
  }

  onSelectChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onPublish = () => {
    const { type, frequency, userAssigned } = this.state
    if (type && frequency && userAssigned) {
      this.setState({ error: '' })
      this.setState({ loading: true })

      const { firestore, history, id, site: { inspections } } = this.props

      inspections.push({
        type,
        frequency,
        userAssigned,
      })

      firestore
        .update(`sites/${id}`, { inspections })
        .then(() => {
          firestore.get({ collection: 'sites', doc: id })
          this.setState({ loading: false })
          history.goBack()
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
    const { type, frequency, userAssigned, error, loading } = this.state

    return (
      <StyledAppInspection className="StyledAppInspection">
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              id="inspection-type"
              select
              label="Inspection Type"
              value={type}
              onChange={this.onSelectChange('type')}
              margin="normal"
            >
              {inspectionTypes.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="frequency"
              select
              label="Frequency"
              value={frequency}
              onChange={this.onSelectChange('frequency')}
              margin="normal"
            >
              {frequencies.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="assigned-to"
              select
              label="Assigned To"
              value={userAssigned}
              onChange={this.onSelectChange('userAssigned')}
              margin="normal"
            >
              {assignees.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

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
                onClick={this.onPublish}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAppInspection>
    )
  }
}

AddInspection.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
