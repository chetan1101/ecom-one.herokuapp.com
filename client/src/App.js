import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProductView from './Pages/ProductView';
import MainHeader from './Components/MainHeader';
import MainFooter from './Components/MainFooter';
import Cart from './Components/Cart';
import SigninPage from './Pages/SigninPage';
import RegisterPage from './Pages/RegisterPage';
import CreateProduct from './Pages/CreateProductPage';
import Dashbord from './Pages/Dashbord';
import EditProductPage from './Pages/EditProductPage';
import ShippingPage from './Pages/ShippingPage';
import PaymentPage from './Pages/PaymentPage';
import ReviewOrder from './Pages/ReviewOrder';

function App() {
  return (
    <BrowserRouter>
    <MainHeader/>
    <main>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/view-item/:id/:name" component={ProductView} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/create-product" component={CreateProduct} />
      <Route path="/dashbord" component={Dashbord} />
      <Route path="/edit-product/:id" component={EditProductPage} />
      <Route path="/shipping" component={ShippingPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/review-order" component={ReviewOrder} />




    </Switch>
    </main>
    <MainFooter/>
    </BrowserRouter>
  );
}

export default App;