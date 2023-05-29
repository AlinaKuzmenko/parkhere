import { ICar, IParkingSlot, IParkingSlots } from './types';
import { getTimestamp } from './utils';

interface IAddCarAction {
  type: 'ADD_CAR';
  payload: {
    parkingSlot: IParkingSlot;
    licencePlate: string;
  }
}

interface ISetCarExitTimeAction {
  type: 'SET_CAR_EXIT_TIME';
  payload: {
    parkingSlot: IParkingSlot;
  }
}

export default function parkingSlotsReducer(parkingSlots: IParkingSlots, action: IAddCarAction | ISetCarExitTimeAction) {
  let newState;
  switch(action.type) {
    case 'ADD_CAR':
      newState = {
        ...parkingSlots,
        [action.payload.parkingSlot.id]: {
          ...action.payload.parkingSlot,
          cars: [
            ...action.payload.parkingSlot.cars,
            {
              licencePlate: action.payload.licencePlate,
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
        [action.payload.parkingSlot.id]: {
          ...action.payload.parkingSlot,
          cars: action.payload.parkingSlot.cars.map((car: ICar) => {
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
