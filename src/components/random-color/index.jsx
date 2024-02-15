import { useEffect, useState } from "react"



export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState('hex')
	const [color, setColor] = useState("#000000");

	function randomColorUtility(length) {
		return Math.floor(Math.random() * length)
	}

	function handleCreateRandomHexColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)]
		}
		console.log(hexColor);
		setColor(hexColor)
	}

	function handleCreateRandomRgbColor() {
		const r = randomColorUtility(256)
		const g = randomColorUtility(256)
		const b = randomColorUtility(256)

		setColor(`rgb(${r}, ${g}, ${b})`)
	}

	useEffect(()=> {
		{typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}
	}, [typeOfColor])

	return (
		<div style={{
			width: "100vw",
			height: "100vh",
			// border: '2px solid black',
			background: color
		}}>
			<button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
			{/* <button onClick={() => {setTypeOfColor('hex'), handleCreateRandomHexColor()}}>Create HEX Color</button> */}
			<button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
			{/* <button onClick={() => {setTypeOfColor('rgb'), handleCreateRandomRgbColor()}}>Create RGB Color</button> */}
			<button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#fff',
				fontSize: '30px',
				marginTop: '25px'
			}}>
				<h3>{typeOfColor === 'hex' ? "HEX Color:" : 'RGB Color:'}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	)
}