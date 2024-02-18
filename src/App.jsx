import "./App.css";
import ImageSlider from "./components/image-slider";
import QrCodeGenerator from "./components/qr-code-generator";
// import { LoadMoreData } from "./components/load-more-data";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
// import Accordian from "./components/accordion";
// import { RandomColor } from "./components/random-color/index";
// import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* {Accordion} */}
      {/* <Accordian /> */}

      {/* Random Color container */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating numOfStars={10} /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Tree View List */}
      {/* <TreeView menus={menus}/> */}

      {/* Qr Code */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;
