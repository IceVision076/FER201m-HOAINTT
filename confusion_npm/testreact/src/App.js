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
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './components/HomeComponent';
import Main from './components/MainComponent';
class App extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    dishes: DISHES
  };}
  render() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        {/* <Menu dishes={this.state.dishes} /> */}
        <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/menu" element={<Main></Main>}></Route>
            {/* <Route path="/contactus" element={<Contact></Contact>}></Route> */}
          </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
    
  )}

}
export default App;


