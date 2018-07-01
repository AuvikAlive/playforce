export const onComponentWillUnmount = component => {
  const {
    removeNavTitle,
    removeLefNavComponent,
    removeRightNavComponent,
    removeSearchComponent,
  } = component.context
  const { searchBarOpen, closeSearchBar } = component.props

  removeNavTitle()
  removeLefNavComponent()
  removeRightNavComponent()
  searchBarOpen && closeSearchBar()
  removeSearchComponent()
}
