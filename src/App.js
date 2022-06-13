
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/products';
import Product from './components/product';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/product/:id" component={Product}/>

    </Switch>
   
  
    
    
    </>
  );
}

export default App;
