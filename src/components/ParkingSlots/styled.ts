import styled from 'styled-components';

const StyledParkingSlots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .enterGarageButton {
    margin-bottom: 20px;
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid white;
    transition: background-color .3s;
    &:hover {
      background-color: rgba(255, 255, 255, .2);
    }
  }
  .list {
    display: grid;
    grid-template-columns: repeat(10, minmax(120px, 200px));
    gap: 8px;
    margin-bottom: 20px;
  }
`;

export default StyledParkingSlots;
