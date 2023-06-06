import { ICar, IParkingSlots } from './types';
import { getTimestamp } from '../utils';
import { IAddCarAction, ISetCarExitTimeAction } from './types';

export default function parkingSlotsReducer(
  parkingSlots: IParkingSlots,
  action: IAddCarAction | ISetCarExitTimeAction
): IParkingSlots {
  let newState;
  const { type, payload } = action;
  const parkingSlot = parkingSlots[payload.parkingSlotId];
  switch(type) {
    case 'ADD_CAR':
      newState = {
        ...parkingSlots,
        [payload.parkingSlotId]: {
          ...parkingSlot,
          cars: [
            ...parkingSlot.cars,
            {
              licencePlate: payload.licencePlate,
              enter: getTimestamp(Date.now()),
              exit: null,
            },
          ],
        },
      };
      break;
    case 'SET_CAR_EXIT_TIME':
      newState = {
        ...parkingSlots,
        [payload.parkingSlotId]: {
          ...parkingSlot,
          cars: parkingSlot.cars.map((car: ICar) => {
            return (car.exit) ? car : {
              ...car,
              exit: getTimestamp(Date.now()),
            };
          }),
        },
      };
      break;
    default:
      newState = { ...parkingSlots };
      break;
  }
  return newState;
}
