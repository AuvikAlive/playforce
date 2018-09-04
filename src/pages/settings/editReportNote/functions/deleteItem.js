import { showActionGoBack } from '../../../../functions/'

export const deleteItem = component => async () => {
  const { deleteReportNote, userId, reportNoteId } = component.props

  await deleteReportNote(userId, reportNoteId)

  showActionGoBack(component, 'Report note deleted!')()
}
