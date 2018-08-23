import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftNav } from '../../../constants/contextTypesTitleLeftNav'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { submit } from './submit'

export class AddPlayground extends Component {
  state = { name: '' }

  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add playground')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { name } = this.state
    const { error, loading } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                margin="normal"
                label="Playground"
                value={name}
                onChange={onEventInputChange(this, 'name')}
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
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

AddPlayground.contextTypes = contextTypesTitleLeftNav
