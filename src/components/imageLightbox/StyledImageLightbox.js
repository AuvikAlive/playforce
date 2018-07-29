import Styled from 'styled-components'

export const StyledImageLightbox = Styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;


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
`
