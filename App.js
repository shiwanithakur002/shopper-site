
import './App.css';
import Navbar from './Componenet/Navbar/Navbar';
import {BrowserReact,Routes,Route, BrowserRouter} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Componenet/Footer/Footer';
import men_banner from './Componenet/Assets/banner_mens.png'
import women_banner from './Componenet/Assets/banner_women.png'
import kid_banner from './Componenet/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid'/>}/>

        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
