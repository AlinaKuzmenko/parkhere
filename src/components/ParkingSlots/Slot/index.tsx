import { IParkingSlot } from '../../../types';
import StyledSlot from './styled';

function getParkingSlotState(slot: IParkingSlot) {
  return slot.cars.find(({ exit }) => !exit) ? 'inUse' : 'available';
}

interface IParkingSlotProps {
  slot: IParkingSlot;
  onExit: () => void;
}

function Slot(props: IParkingSlotProps) {
  const { slot, onExit } = props;
  return (
    <StyledSlot>
      <span className="name">
        {slot.name}
      </span>
      <span className={`state ${getParkingSlotState(slot)}`} />
      <button
        type="button"
        className="exitButton"
        onClick={onExit}
      >
        Exit
      </button>
    </StyledSlot>
  );
}

export default Slot;
