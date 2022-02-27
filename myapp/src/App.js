import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Navbar } from './Components/Home/Navbar/Navbar';
import { SlideShow } from './Components/Coverpage/SlidShow';
import {Destination} from "./Components/Home/Destination/Destinaton"
import {WhatsNew} from "./Components/Home/whatsnew/Whatsnew"
import {Zostelhomes} from "./Components/Home/ZostelHomes/zostelhome"

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <SlideShow></SlideShow>
     <Destination></Destination>
    <WhatsNew></ WhatsNew>
    <Zostelhomes></Zostelhomes>
   
    </div>
  );
}

export default App;
