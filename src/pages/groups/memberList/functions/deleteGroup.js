import { showActionGoBack } from '../../../../functions/'

export const deleteGroup = component => async () => {
  const { deleteGroup, id, members } = component.props

  try {
    await deleteGroup(id, members)

    showActionGoBack(component, 'Group deleted!')()
  } catch (error) {
    console.log(error)
  }
}
