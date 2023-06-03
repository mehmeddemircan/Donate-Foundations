import { BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PaymentPage from './pages/PaymentPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactUsPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutPage';
import DonationDetailsPage from './pages/DonationDetailsPage';
import { isUserLoggedIn } from './redux/actions/authActions';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
    
        dispatch(isUserLoggedIn());
   
   
  
    }
 
 
  }, [dispatch,auth.authenticate]);

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
