import { getCurrentPosition } from '../../../functions/'

export const getPosition = async component => {
  const { position } = component.state

  if (position) {
    return position
  } else {
    const position = await getCurrentPosition()

    component.setState({ position: { ...position } })

    return position
  }
}
