import styled from 'styled-components';

const VERTICAL_PADDING = 20;
const HORIZONTAL_PADDING = 40;
const HEIGHT = 80;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: ${HEIGHT}px;
  padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
  border-bottom: 1px solid rgba(204, 204, 204, .3);

  a {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: ${HORIZONTAL_PADDING}px;
    transform: translateY(-50%);
  }
`;

export default StyledHeader;
