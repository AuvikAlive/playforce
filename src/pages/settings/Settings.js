import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { Content } from '../../components/content/Content'
import { StyledSettings } from './StyledSettings'

class Settings extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Settings')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    return (
      <StyledSettings>
        <Content>
          <Paper elevation={4} className="paper">
            <Grid container spacing={0} className="container">
              <Grid item xs={4} className="left">
                Settings
              </Grid>
              <Grid item xs={4} className="right" />
            </Grid>
          </Paper>
        </Content>
      </StyledSettings>
    )
  }
}

export default Settings

Settings.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
