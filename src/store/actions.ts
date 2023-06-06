import { IAddCarAction, ISetCarExitTimeAction, IParkingSlot } from './types';

export function addCarAction(parkingSlotId: IParkingSlot['id'], licencePlate: string): IAddCarAction {
  return {
    type: 'ADD_CAR',
    payload: {
      parkingSlotId,
      licencePlate,
    }
  };
}

export function setCarExitTimeAction(parkingSlotId: IParkingSlot['id']): ISetCarExitTimeAction {
  return {
    type: 'SET_CAR_EXIT_TIME',
    payload: {
      parkingSlotId,
    },
  };
}

