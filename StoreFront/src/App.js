import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import banner from './components/assets/banner.png';
import ShoesCategory from './pages/ShoesCategory';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart'
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShoesCategory banner={banner} category="men"/>} />
          <Route path='/women' element={<ShoesCategory banner={banner} category="women"/>} />
          <Route path='/kid' element={<ShoesCategory banner={banner} category="kid"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/paymentpage' element={<PaymentPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;