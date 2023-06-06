export interface IParkingSlots {
  [key: string]: IParkingSlot;
}

export interface ICar {
  licencePlate: string;
  enter: number;
  exit: number | null;
}

export interface IParkingSlot {
  id: string;
  name: string;
  cars: ICar[];
}

export interface IAddCarAction {
  type: 'ADD_CAR';
  payload: {
    parkingSlotId: IParkingSlot['id'];
    licencePlate: string;
  }
}
export interface ISetCarExitTimeAction {
  type: 'SET_CAR_EXIT_TIME';
  payload: {
    parkingSlotId: IParkingSlot['id'];
  }
}
