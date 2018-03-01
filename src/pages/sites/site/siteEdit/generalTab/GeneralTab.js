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
    name: '',
    address: '',
    division: '',
  }

  componentDidMount() {
    const { id } = this.props
    const site = data.sites[id]
    const {
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

    const name = data.sites[id].name
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

  // onNameChange = event => {
  //   this.setState({
  //     name: event.target.value,
  //   })
  // }

  // onAdressChange = event => {
  //   this.setState({
  //     address: event.target.value,
  //   })
  // }

  render() {
    const { operator, name, address, division } = this.state

    return (
      <StyledGeneralTab>
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
          </CardContent>
        </Card>
      </StyledGeneralTab>
    )
  }
}
