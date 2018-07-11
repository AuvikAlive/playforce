export const addUnsubscriber = component => unsubscriber => {
  component.setState({
    unsubscribers: [...component.state.unsubscribers, unsubscriber],
  })
}
