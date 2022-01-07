import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Sliders from "./Components/slider/Slides";
import TeamThinker from "./Components/teamThinker/TeamThinker";
import Cards from "./Components/cards/Cards";
import WhatWeDo from "./Components/whatWeDo/WhatWeDo";
import NewCards from "./Components/newCards/NewCards";
import NumberSlider from "./Components/numberSlider/NumberSlider";
import SpendMoney from "./Components/spendMoney/SpendMoney";
import WhatPeopleSay from "./Components/whatpeoplesay/WhatPeopleSay";
import CardSlider from "./Components/cardSlider/CardSlider";
import Flexebile from "./Components/flexible/Flexebile";
import Flexebilecard from "./Components/flexebilecard/Flexebilecard";
import LastCards from "./Components/lastcards/LastCards";
import StartProject from "./Components/startProject/StartProject";
import Footer from "./Components/footer/Footer";
import BelowPricing from "./Components/belowPricingCards/BelowPricing";
import CopyRight from "./Components/copyRight/CopyRight";
function App() {
  return (
    <>
        <Navbar />
        <Sliders />
      <div className="container-fluid ">
        <TeamThinker />
        <Cards />
        <WhatWeDo />
        <NewCards />
        <NumberSlider />
        <SpendMoney />
        <WhatPeopleSay />
        <CardSlider />
        <Flexebile />
        <Flexebilecard />
        <LastCards />
        {/* <BelowPricing/> */}
      </div>
        <StartProject />
        <Footer/>
        <CopyRight />
    </>
  );
}

export default App;
