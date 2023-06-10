import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import ThirdComponent from './components/ThirdComponent';
import SecondComponent from './components/SecondComponent';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import MyButton from './components/CountButton';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent'
class App extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    dishes: DISHES
  };}
  render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Header/>
        <Menu dishes={this.state.dishes} />
        <Footer/>
    </div>
  )}

}
export default App;


