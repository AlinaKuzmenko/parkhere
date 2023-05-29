import styled from 'styled-components';

const StyledHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(120px, 200px));
  gap: 8px;

  .slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 16px 8px;

    .name {
      font-weight: bold;
    }

    .car {
      width: 100%;
      padding: 2px 4px;
      border: 1px solid red;
      font-size: 12px;
      text-align: center;

      &.exited {
        border: 1px solid green;
      }
    }
  }`;

export default StyledHistory;
