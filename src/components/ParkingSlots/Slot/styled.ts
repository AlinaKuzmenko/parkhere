import styled from 'styled-components';

const StyledSlot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .state {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.available {
      background-color: green;
    }

    &.inUse {
      background-color: red;
    }
  }

  .exitButton {
    padding: 4px 8px;
    background-color: white;
    border: none;
    opacity: .7;
    transition: opacity .3s;
    color: black;
    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledSlot;
