import { getIntersectionWithId } from './getIntersectionWithId'

export const getInspectionsToShow = component => {
  const {
    inspections,
    projectMembers,
    searchBarOpen,
    searchResults,
  } = component.props

  const inspectionsToShow =
    searchBarOpen && searchResults && searchResults.length > 0
      ? getIntersectionWithId(searchResults, projectMembers)
      : getIntersectionWithId(inspections, projectMembers)

  return inspectionsToShow
}
