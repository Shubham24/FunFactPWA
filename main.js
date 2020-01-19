
var myApi = [];
async function getFact()
{
	var backgroundColor = ['#484D6D', '#EE6352', '#2E2D4D', '#0A1128', "#001F54", "#034078", "#312F2F", "#22181C"];
	console.log(backgroundColor[Math.floor(Math.random() * backgroundColor.length)]);
	document.body.style.background = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
	var randomNumber = Math.floor(Math.random() * 3);
	if(randomNumber === 0)
	{
		let response = await fetch('http://numbersapi.com/random/');
		console.log('From Numbers Api');
		var fact = await response.text(); // read response body as text
	}
	else if (randomNumber === 1)
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

