import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'

import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledMaintenanceIssuesList = Styled(Content)`
  
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .add-icon {
    position: fixed;
    left: calc(100% - 24px - 56px);
    bottom: calc(54px/2);
    z-index: 100;
  }

  @keyframes pulse-animation {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }

  .pulse::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: inherit;
    border-radius: inherit;
    transition: opacity .3s, transform .3s;
    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    z-index: -1;
  }

  .card-media {
    height: 100vw;

    @media (min-width: 600px) {
      height: 50vw;
    }
  }
`
