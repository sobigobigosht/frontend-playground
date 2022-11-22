function onCalculateClick() {
	const input = document.getElementById("input_number")
	const inputValue = Number(input.value)
	console.log(Number(input.value) + 10)
	var paragraph = document.createElement("p")
	paragraph.innerHTML = inputValue + "*1=" + inputValue + "<br>"
	paragraph.innerHTML += inputValue + "*2=" + (inputValue*2) + "<br>"
	paragraph.innerHTML += inputValue + "*3=" + (inputValue*3) + "<br>"
	paragraph.innerHTML += inputValue + "*4=" + (inputValue*4) + "<br>"
	paragraph.innerHTML += inputValue + "*5=" + (inputValue*5) + "<br>"
	paragraph.innerHTML += inputValue + "*6=" + (inputValue*6) + "<br>"
	paragraph.innerHTML += inputValue + "*7=" + (inputValue*7) + "<br>"
	paragraph.innerHTML += inputValue + "*8=" + (inputValue*8) + "<br>"
	paragraph.innerHTML += inputValue + "*9=" + (inputValue*9) + "<br>"
	paragraph.innerHTML += inputValue + "*10=" + (inputValue*10) + "<br>"

	paragraph.classList.add("lol")

	document.body.appendChild(paragraph)



}

