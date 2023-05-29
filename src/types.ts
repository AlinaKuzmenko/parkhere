export interface IParkingSlots {
  [key: string]: IParkingSlot; // TODO use generic for key and id value
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
