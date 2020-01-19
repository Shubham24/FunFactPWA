
var myApi = [];
async function getFact()
{
	var backgroundColor = ["Tomato", "Teal", "SteelBlue", "SlateGrey", "SlateBlue", "Sienna", "SeaGreen", "SaddleBrown", "RoyalBlue", "Red", "RebeccaPurple", "Purple", "Peru", "PaleVioletRed", "OrangeRed", "OliveDrab", "Olive", "Navy", "MidnightBlue", "MediumVioletRed", "MediumSlateBlue", "MediumSeaGreen", "MediumPurple", "MediumOrchid", "MediumBlue", "Maroon", "Magenta", "LimeGreen", "Lime", "LightSlateGrey", "LightSeaGreen", "Indigo", "IndianRed", "Green", "Grey", "Fuchsia", "ForrestGreen", "FireBrick", "DodgerBlue", "DimGrey", "DeepSkyBlue", "DeepPink", "DarkViolet", "DarkTurquoise", "DarkSlateGrey", "DarkSlateBlue", "DarkRed", "DarkOrchid", "DarkOliveGreen", "DarkMagenta", "DarkGreen", "DarkGoldenRod", "DarkCyan", "DarkBlue", "Crimson", "CornflowerBlue", "Chocolate", "CadetBlue", "Brown", "BlueViolet", "Blue", "Black"];
	console.log(backgroundColor[Math.floor(Math.random() * backgroundColor.length)]);
	document.body.style.background = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
	var randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 1)
	{
		let url = 'https://uselessfacts.jsph.pl/random.json?language=en';
		let response = await fetch(url);
		let commits = await response.json(); // read response body and parse as JSON
		console.log('From Useless Facts Api');
		fact = commits.text;
	}
	
	else{
		if(myApi.length === 0)
		{
			let url = 'https://spreadsheets.google.com/feeds/cells/1vodJCRqCL2t_C7QZeoTLjgzEwPhEMIR34eUpG4Qbqz8/1/public/full?alt=json'
			let response = await fetch(url);
			let commits = await response.json(); // read response body and parse as JSON
			myApi = commits.feed.entry;
		}
		
		let rn = Math.floor(Math.random() * myApi.length);
		console.log("From Shubham's Api");
		fact = myApi[rn].content.$t;
	}
	
	document.getElementById("f").innerText = fact;
}

