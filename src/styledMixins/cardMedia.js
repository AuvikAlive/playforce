import { theme } from '../globals/theme'

export const cardMedia = `
  img {
    width: 100%;
  }
  .card-media {
    width: 100%;
    height: 100vw;

    @media (min-width: 600px) {
      height: ${theme.lanscapeWidth};
      min-height: 600px;
    }
  }
`
