import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { StyledPreimplementationRecommendation } from './StyledPreimplementationRecommendation'
import { onComponentDidMount, submit } from './functions/'

export class PreimplementationRecommendation extends Component {
  state = { preimplementationRecommendation: '' }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { preimplementationRecommendation } = this.state
    const { error, loading } = this.props

    return (
      <StyledPreimplementationRecommendation className="StyledPreimplementationRecommendation">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Recommendation"
                value={preimplementationRecommendation}
                margin="normal"
                onChange={onEventInputChange(
                  this,
                  'preimplementationRecommendation'
                )}
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
      </StyledPreimplementationRecommendation>
    )
  }
}

PreimplementationRecommendation.contextType = NavContext
