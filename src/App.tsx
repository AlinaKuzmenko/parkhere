import { useReducer } from 'react';
import { ICar, IParkingSlot } from './store/types';
import { getRandomLicencePlate } from './utils';
import parkingSlotsReducer from './store/reducer';
import { defaultParkingSlots } from './data';
import Header from './components/Header';
import ParkingSlots from './components/ParkingSlots';
import ParkingHistory from './components/ParkingHistory';
import { addCarAction, setCarExitTimeAction } from './store/actions';
import StyledApp from './App.styled';

function App() {
  const [parkingSlots, dispatch] = useReducer(parkingSlotsReducer, defaultParkingSlots);
  function handleEnterGarage () {
    const firstAvailableParkingSlot = Object.values(parkingSlots).find(
      (parkingSlot: IParkingSlot) => !parkingSlot.cars.find((car: ICar) => !car.exit),
    );
    if (!firstAvailableParkingSlot) {
      alert('Sorry, no available parking slots');
      return;
    }
    const licencePlate = getRandomLicencePlate();
    dispatch(addCarAction(firstAvailableParkingSlot.id, licencePlate));
  }
  function handleExitGarage (parkingSlot: IParkingSlot) {
    dispatch(setCarExitTimeAction(parkingSlot.id));
  }
  return (
    <StyledApp>
      <Header />
      <div className="container">
        <ParkingSlots
          parkingSlots={parkingSlots}
          onEnter={handleEnterGarage}
          onExit={handleExitGarage}
        />
        <ParkingHistory parkingSlots={parkingSlots} />
      </div>
    </StyledApp>
  )
}


export default App;
