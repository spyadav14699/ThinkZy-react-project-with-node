
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/products';
import Product from './components/product';
import Cart from './components/cart';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/product/:id" component={Product}/>
      <Route path="/cart" component={Cart}/>
      

    </Switch>
   
  
    
    
    </>
  );
}

export default App;
