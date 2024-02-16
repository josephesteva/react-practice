import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import './styles.css'


export default function StarRating({numberOfStars}){

	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	console.log(numberOfStars);

	function handleClick(currentIndex){
		setRating(currentIndex)
	}

	function handleMouseEnter(currentIndex){
		setHover(currentIndex)

	}

	function handleMouseLeave(currentIndex){
		setHover(rating)
	}


	return <div className="star-rating">
		{
			[...Array(numberOfStars)].map((_,index) => {
				index += 1 

				return <FaStar
				className={index <= rating || index <= hover ? "active" : "inactive"}
				key={index}
				onClick={()=> handleClick(index)}
				onMouseMove={()=> handleMouseEnter(index)}
				onMouseLeave={()=> handleMouseLeave(index)}
				size={40}
				/>
			})
		}
	</div>
}