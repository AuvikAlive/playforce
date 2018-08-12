export const cardMediaPortrait = `
  .card-media {
    height: 50vw;
    width: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 600px) {
      height: calc(600px / 2 * 253 / 188);
    }
  }
`
