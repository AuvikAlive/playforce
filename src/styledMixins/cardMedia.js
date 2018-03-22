import { theme } from '../globals/theme'

export const cardMedia = `
  .card-media {
    height: 100vw;

    @media screen and (orientation: landscape) {
      height: ${theme.lanscapeWidth};
    }
  }
`
