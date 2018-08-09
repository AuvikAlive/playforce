import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { editIcon, cardMedia, listItemSelected } from '../../../styledMixins/'

export const StyledInspectionList = Styled(Content)`
  ${cardMedia};
  ${listItemSelected};

  &.grid {
    max-width: 100%;

    .list-item {
      cursor: default;
    }
  }

  .card-content {
    position: relative;
    ${editIcon};
  }

  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .placeholder {
    width: 100%;
    padding-top: 56.25%;
    background: #bdbdbd;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
