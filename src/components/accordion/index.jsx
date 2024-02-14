// single selection
import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordion() {
	const [selected, setSelected] = useState(null)
	const [enableMultiSelection, setEnableMultiSelection] = useState(false)
	const [multiple, setMultiple] = useState([])

	function handleSingleSelection(currentId) {
		setSelected(currentId === selected ? null : currentId)
	}

	function handleMultiSelection(currentId) {
		let copyMultiple = [...multiple];
		const findIndexOfCurrentId = copyMultiple.indexOf(currentId)

		console.log(findIndexOfCurrentId);
		if (findIndexOfCurrentId === -1) {
			copyMultiple.push(currentId)
		} else {
			copyMultiple.splice(findIndexOfCurrentId, 1)
		}
		setMultiple(copyMultiple)
		console.log(copyMultiple);
	}

	return (
		<div className="wrapper">
			<button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{!enableMultiSelection ? "Enable Multi Selection" : "Disable Multi Selection"}</button>
			<div className="accordion">
				{
					data && data.length > 0 ?
						data.map(dataItem => <div className="item">
							<div
								onClick={enableMultiSelection
									? () => handleMultiSelection(dataItem.id)
									: () => handleSingleSelection(dataItem.id)}
								className="title"
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{
								selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
									<div className="content">{dataItem.answer}</div>
								) : null
							}
						</div>)
						: <div>No data found</div>
				}
			</div>
		</div>
	)
}