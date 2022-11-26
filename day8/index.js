function onColorChange(eventDetails) {
	const cell = eventDetails.target;

	console.log(cell)
	cell.classList.toggle("grid_p__color")
}
	
