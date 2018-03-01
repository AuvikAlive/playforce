import React, { Component } from 'react'
import { StyledGeneralTab } from './StyledGeneralTab'
import Card, { CardContent } from 'material-ui/Card'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { data } from '../../../data'

const operators = data.operators

export class GeneralTab extends Component {
  state = {
    operator: { id: '', name: '' },
  }

  componentDidMount() {
    const { id } = this.props
    const operatorId = parseInt(data.sites[id].operator, 10) - 1
    const operator = {
      id: data.operators[operatorId].id,
      label: data.operators[operatorId].name,
    }

    this.setState({ operator })
  }

  handleChange = event => {
    const operatorId = parseInt(event.target.value, 10) - 1

    this.setState({
      operator: data.operators[operatorId],
    })
  }
  render() {
    return (
      <StyledGeneralTab>
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              id="operator"
              select
              label="Operator"
              value={this.state.operator.id}
              onChange={this.handleChange}
              margin="normal"
            >
              {operators.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </StyledGeneralTab>
    )
  }
}
