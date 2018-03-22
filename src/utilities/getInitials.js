export const getInitials = name => {
  let initials = name.match(/\b\w/g) || []

  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()

  return initials
}
