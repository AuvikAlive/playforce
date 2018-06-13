import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { StyledAddGroup } from './StyledAddGroup'

export class AddGroup extends Component {
  state = { name: '' }

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Add Group')
  }

  render() {
    const { name } = this.state

    return (
      <StyledAddGroup className="StyledAddGroup">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Group Name"
                value={name}
                margin="normal"
                onChange={this.onEventInputChange('name')}
              />
            </form>
          </CardContent>
        </Card>
      </StyledAddGroup>
    )
  }
}

AddGroup.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
