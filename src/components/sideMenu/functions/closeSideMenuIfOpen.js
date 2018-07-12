export const closeSideMenuIfOpen = component =>  () => {
  const { open, closeSideMenu } = component.props
  
  open && closeSideMenu()
}