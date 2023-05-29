import StyledHistory from './styled';
import { ICar, IParkingSlot, IParkingSlots } from '../../types';

interface IParkingHistoryProps {
  parkingSlots: IParkingSlots;
}

function ParkingHistory({ parkingSlots }: IParkingHistoryProps) {
  return (
    <StyledHistory>
      {Object.values(parkingSlots).map((parkingSlot: IParkingSlot) => (
        <div
          key={parkingSlot.id}
          className="slot"
        >
          <div className="name">
            Slot#: {parkingSlot.name}
          </div>
          {parkingSlot.cars.map((car: ICar) => (
            <div
              key={car.licencePlate}
              className={`car${car.exit ? ' exited' : ''}`}
            >
              Plate Nr.: {car.licencePlate}
            </div>
          ))}
        </div>
      ))}
    </StyledHistory>
  )
}

export default ParkingHistory;
