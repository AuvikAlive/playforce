import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { Content } from '../content/Content'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
} from '../../functions/'
import { submit } from './submit'

class ClientFormWithout extends Component {
  state = {
    name: '',
    address: '',
  }

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const { name, address } = this.state
    const { error, loading, buttonText } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              label="Client"
              value={name}
              onChange={onEventInputChange(this, 'name')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Address"
              value={address}
              onChange={onEventInputChange(this, 'address')}
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
                onClick={submit(this)}
              >
                {buttonText || 'Add Client'}
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

export const ClientForm = withFeedback(ClientFormWithout)
