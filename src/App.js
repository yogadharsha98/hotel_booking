import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomeScreen } from './screens/home/HomeScreen';
import HotelScreen from './screens/hotel/HotelScreen';
import ListScreen from './screens/list/ListScreen';
import LoginScreen from './screens/login/LoginScreen';
import FlightScreen from './screens/flight/FlightScreen';
import FlightListScreen from './screens/flightList/FlightListScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/hotels' element={<ListScreen />} />
        <Route path='/hotel/:id' element={<HotelScreen />} />
        <Route path='/flight' element={<FlightListScreen />} />
        <Route path='/flight/:id' element={<FlightScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
