import './App.css';
import Slider from './Components/Slider/Slider';
import { ParallaxProvider } from "react-scroll-parallax";
import Parallex from './Components/Parallex/Parallex';

function App() {
  return (
    <div className="App">
        {/* <ParallaxProvider>
        <Slider />
        </ParallaxProvider> */}
      <Parallex />
    </div>
  );
}

export default App;
