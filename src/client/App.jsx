import Accordion from "../components/accordion";
import RandomColor from "../components/random-color";
import StarRating from "../components/star-rating";
import "./App.css";

function App() {

	return (
		<div className="App">
			{/* <Accordion /> */}
			{/* <RandomColor /> */}
			<StarRating numberOfStars={10}/>
		</div>
	);
}

export default App;
