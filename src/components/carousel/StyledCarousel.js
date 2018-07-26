import Styled from 'styled-components'

export const StyledCarousel = Styled.div`
  cursor: pointer;
  position: relative;
  
  .hoverEffect {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transition: all 0.3s ease;

    .icon {
      display: none;
      font-size: 48px;
    }
  }

  &:hover {
    .hoverEffect {
      background: rgba(0, 0, 0, 0.9);
    }

    .icon {
      display: block;
    }
  }

  .navs {
    padding: 16px 0;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
  }
`
