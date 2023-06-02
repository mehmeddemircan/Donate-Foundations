import { BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PaymentPage from './pages/PaymentPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactUsPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutPage';
import DonationDetailsPage from './pages/DonationDetailsPage';


function App() {


  return (
    <Router>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/donation' element={<PaymentPage />} />
        <Route path='/donation/:donationName/details' element={<DonationDetailsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/our-about' element={<AboutPage />}  />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
