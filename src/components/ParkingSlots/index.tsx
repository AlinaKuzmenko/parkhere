import { IParkingSlot, IParkingSlots } from '../../store/types';
import Slot from './Slot';
import StyledParkingSlots from './styled';

interface IParkingSlotsProps {
  parkingSlots: IParkingSlots;
  onEnter: () => void;
  onExit: (parkingSlot: IParkingSlot) => void;
}

function ParkingSlots({ parkingSlots, onEnter, onExit }: IParkingSlotsProps) {
  return (
    <StyledParkingSlots>
      <button
        type="button"
        className="enterGarageButton"
        onClick={onEnter}
      >
        Enter Garage
      </button>
      <ul className="list">
        {Object.values(parkingSlots).map((parkingSlot: IParkingSlot) => (
          <Slot
            key={parkingSlot.id}
            slot={parkingSlot}
            onExit={() => onExit(parkingSlot)}
          />
        ))}
      </ul>
    </StyledParkingSlots>
  );
}

export default ParkingSlots;
