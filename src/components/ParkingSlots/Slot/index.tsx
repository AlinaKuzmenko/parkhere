import { IParkingSlot } from '../../../store/types';
import StyledSlot from './styled';

enum ParkingSlotState {
  available= 'available',
  inUse = 'inUse'
}

function getParkingSlotState(slot: IParkingSlot): keyof typeof ParkingSlotState {
  return slot.cars.find(({ exit }) => !exit) ? ParkingSlotState.inUse : ParkingSlotState.available;
}

interface IParkingSlotProps {
  slot: IParkingSlot;
  onExit: () => void;
}

function Slot(props: IParkingSlotProps) {
  const { slot, onExit } = props;
  const parkingSlotState = getParkingSlotState(slot);
  return (
    <StyledSlot>
      <span className="name">
        {slot.name}
      </span>
      <span className={`state ${parkingSlotState}`} />
      <button
        type="button"
        className="exitButton"
        onClick={onExit}
        disabled={parkingSlotState == ParkingSlotState.available}
      >
        Exit
      </button>
    </StyledSlot>
  );
}

export default Slot;
