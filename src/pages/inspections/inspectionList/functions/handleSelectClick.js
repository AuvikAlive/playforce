import { inspectionTypes } from '../inspectionTypes'

export const handleSelectClick = component => (id, inspectionType) => {
  const { history, match } = component.props
  const inspectionTypeUrl = inspectionTypes.find(
    ({ name, value }) => name === inspectionType
  )
    ? inspectionType
    : inspectionTypes[0].value

  history.push(`${match.url}/${inspectionTypeUrl}/edit/${id}`)
}
