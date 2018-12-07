import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Content } from '../../../components/content/Content'
import { NavContext } from "components/NavContextProvider/"
import { onEventInputChange } from '../../../functions/'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  submit,
} from './functions/'

export class Notes extends Component {
  state = { notes: '' }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const { notes } = this.state
    const { error, loading } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Notes"
                value={notes}
                margin="normal"
                onChange={onEventInputChange(this, 'notes')}
              />
            </form>

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
                variant="contained"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

Notes.contextType = NavContext
