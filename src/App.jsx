import "./App.css";
// import Accordian from "./components/accordion";
import { RandomColor } from "./components/random-color/index";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* {Accordion} */}
      {/* <Accordian /> */}

      {/* Random Color container */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating />
    </div>
  );
}

export default App;
