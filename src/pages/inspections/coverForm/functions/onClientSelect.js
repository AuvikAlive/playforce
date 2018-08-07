export const onClientSelect = component => value => {
  const { clients } = component.props
  const client = clients.find(({ name }) => name === value)

  if (client) {
    component.setState({
      client: client.name,
      ...(client.address && { clientAddress: client.address }),
    })
  }
}
