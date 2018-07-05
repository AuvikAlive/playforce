export const onComponentWillUnmountTitleSearchRightNav = component => {
  const { searchBarOpen, closeSearchBar } = component.props
  const {
    removeNavTitle,
    removeRightNavComponent,
    removeSearchComponent,
  } = component.context

  removeNavTitle()
  removeRightNavComponent()
  searchBarOpen && closeSearchBar()
  removeSearchComponent()
}
