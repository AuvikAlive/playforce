import { getDifferenceWithId } from './getDifferenceWithId'

export const getInspectionsToShow = component => {
  const {
    inspections,
    projectMembers,
    searchBarOpen,
    searchResults,
  } = component.props

  const inspectionsToShow =
    searchBarOpen && searchResults && searchResults.length > 0
      ? getDifferenceWithId(searchResults, projectMembers)
      : getDifferenceWithId(inspections, projectMembers)

  return inspectionsToShow
}
