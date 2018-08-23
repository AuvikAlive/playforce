import { showActionGoBack } from '../../../../functions/'

const message = 'Rating deleted!'

export const deleteConditionRating = component => async () => {
  const { deleteConditionRating } = component.props

  await deleteConditionRating()

  showActionGoBack(component, message)()
}
