export const onClose = ({
  closeSearchBar,
  setSearchResults,
  onSearchEnd,
}) => () => {
  closeSearchBar()
  // setSearchQuery('')
  setSearchResults([])
  onSearchEnd && onSearchEnd()
}
