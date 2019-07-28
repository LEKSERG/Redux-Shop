import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './containers/header';
import SideBar from './components/sidebar';
import ProductList from './containers/product-list';
import Cart from './containers/cart';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <BrowserRouter>
          <Header />
          <div className="App-wrapper">
            <SideBar />          
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />          
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;