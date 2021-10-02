
import './styles/App.css';
import {Navbar} from "./pages/Navbar";
import {FirstPage} from "./pages/FirstPage";
import {KeyFeatures} from "./pages/KeyFeatures";
import {ThreeSteps} from "./pages/ThreeSteps";
import {OrangeCards} from "./pages/OrangeCards";
import {Subscribe} from "./pages/Subscribe";
import {SellHouse} from "./pages/SellHouse";
import {Footer} from "./pages/Footer";

function App() {
  return (
    <div className='App' >
            <Navbar />
          <FirstPage />
        <KeyFeatures />
        <ThreeSteps />
    <OrangeCards />
        <Subscribe />
        <SellHouse />
<Footer />
    </div>
  );
}

export default App;
