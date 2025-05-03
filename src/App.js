import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import GetServices from './components/GetServices';
import MpesaPayment from './components/MpesaPayment'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import Footer from './components/Footer';
import AddProducts from './components/AddProducts';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <Router>
      {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/mpesa-payment' element={<MpesaPayment/>}/>
          <Route path='/get-services' element={<GetServices/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/add-service' element={<AddProducts/>}/>
        </Routes>
        <ScrollToTopButton/>
      <Footer/>
      </div>
      )}
    </Router>
  );
}

export default App;
