import { useReducer } from 'react';
import { ICar, IParkingSlot } from './types';
import { getRandomLicencePlate } from './utils';
import parkingSlotsReducer from './reducer';
import { defaultParkingSlots } from './data';
import Header from './components/Header';
import ParkingSlots from './components/ParkingSlots';
import ParkingHistory from './components/ParkingHistory';
import StyledApp from './App.styled';

function App() {
  const [parkingSlots, dispatch] = useReducer(parkingSlotsReducer, defaultParkingSlots);
  function handleEnterGarage () {
    const licencePlate = getRandomLicencePlate();
    const firstAvailableParkingSlot = Object.values(parkingSlots).find(
      (parkingSlot: IParkingSlot) => !parkingSlot.cars.find((car: ICar) => !car.exit),
    );
    if (!firstAvailableParkingSlot) {
      alert('Sorry, no available parking slots');
      return;
    }
    dispatch({
      type: 'ADD_CAR',
      payload: {
        parkingSlot: firstAvailableParkingSlot,
        licencePlate,
      }
    });
  }
  function handleExitGarage (parkingSlot: IParkingSlot) {
    dispatch({
      type: 'SET_CAR_EXIT_TIME',
      payload: {
        parkingSlot: parkingSlot,
      },
    });
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
