import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBooking from './pages/CreateBooking';
import AdminBookings from './pages/AdminBookings';
import CustomerBookings from './pages/CustomerBookings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBooking />} />
        <Route path="/admin" element={<AdminBookings />} />
        <Route path="/customer" element={<CustomerBookings />} />
      </Routes>
    </Router>
  );
};

export default App;
