import Accordion from "../components/accordion";
import RandomColor from "../components/random-color";
import StarRating from "../components/star-rating";
import ImageSlider from "../components/image-slider";
import "./App.css";

function App() {

	return (
		<div className="App">
			{/* <Accordion /> */}
			{/* <RandomColor /> */}
			{/* <StarRating numberOfStars={10}/> */}
			<ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />

		</div>
	);
}

export default App;
