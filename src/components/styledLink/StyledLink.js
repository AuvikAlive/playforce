import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledLink = Styled(NavLink)`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  outline: none;
`
