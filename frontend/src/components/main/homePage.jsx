import { Navbar } from "../main/Home/Navbar/Navbar";
import { SlideShow } from "../main/Coverpage/SlidShow";
import { Destination } from "../main/Home/Destination/Destinaton";
// import { WhatsNew } from "../main/Home/whatsnew/Whatsnew";
import { Zostelhomes } from "../main/Home/ZostelHomes/zostelhome";
import { FeaturesHotels } from "../main/Home/FeaturedHotels/FeaturesHostels";
import { Escape } from "../main/Escape/Escape";
import { Footer } from "../main/Footer/Footer";
import { Awards } from "../main/awards/Awards";

function HomePage() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SlideShow></SlideShow>
      <Destination></Destination>
      {/* <WhatsNew></WhatsNew> */}
      <Zostelhomes></Zostelhomes>
      <Escape></Escape>
      <FeaturesHotels></FeaturesHotels>
      <Awards></Awards>
      <Footer></Footer>
    </div>
  );
}

export { HomePage };
