document.getElementById("f").style.color = "white";
var myApi = [];
var myApiTwo = [];
var MagicMint = "#ABEBD2";
var LapisLazuli = "#2660A4";
async function getFact()
{
	
	var backgroundColorDark = ["Tomato", "Teal", "SteelBlue", "SlateGrey", "SlateBlue", "Sienna", "SeaGreen", "SaddleBrown", "RoyalBlue", "Red", "RebeccaPurple", "Purple", "Peru", "PaleVioletRed", "OrangeRed", "OliveDrab", "Olive", "Navy", "MidnightBlue", "MediumVioletRed", "MediumSlateBlue", "MediumSeaGreen", "MediumPurple", "MediumOrchid", "MediumBlue", "Maroon", "Magenta", "LightSlateGrey", "LightSeaGreen", "Indigo", "IndianRed", "Green", "Grey", "Fuchsia", "ForrestGreen", "FireBrick", "DodgerBlue", "DimGrey", "DeepSkyBlue", "DeepPink", "DarkViolet", "DarkTurquoise", "DarkSlateGrey", "DarkSlateBlue", "DarkRed", "DarkOrchid", "DarkOliveGreen", "DarkMagenta", "DarkGreen", "DarkGoldenRod", "DarkCyan", "DarkBlue", "Crimson", "CornflowerBlue", "Chocolate", "CadetBlue", "Brown", "BlueViolet", "Blue", "Black"];
	var backgroundColorLight = ["AliceBlue", "AntiqueWhite", "Aqua", "AquaMarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "BurlyWood", "Chartreuse", "Coral", "Cornsilk", "Cyan", "DarkGrey", "DarkKhaki", "DarkOrange", "DarkSalmon", "DarkSeaGreen", "FloralWhite", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "GreenYellow", "HoneyDew", "HotPink", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSkyBlue", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "MediumAquaMarine", "MediumSpringGreen", "MediumTurquoise", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "OldLace", "Orange", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurqoise", "PapayaWhip", "PeachPuff", "Pink", "Plum", "PowerBlue", "RosyBrown", "Salmon", "SandyBrown", "SeaShell", "Silver", "SkyBlue", "Snow", "SpringGreen", "Tan", "Thisle", "Turquoise", "Violet", "Wheat", "WhiteSmoke", "Yellow", "YellowGreen", MagicMint];
	let rand = Math.floor(Math.random() * 2);
	console.log(rand);
	if(rand === 1)
	{
		document.body.style.background = backgroundColorDark[Math.floor(Math.random() * backgroundColorDark.length)];
		document.getElementById("f").style.color = "#FFF";
	}
	else
	{
		document.body.style.background = backgroundColorLight[Math.floor(Math.random() * backgroundColorLight.length)];
		document.getElementById("f").style.color = "#1F2D3D";
	}
	var randomNumber = Math.floor(Math.random() * 100);
	if (randomNumber <= 10)
	{
		if(myApiTwo.length === 0)
		{
			let url = 'https://spreadsheets.google.com/feeds/cells/1vodJCRqCL2t_C7QZeoTLjgzEwPhEMIR34eUpG4Qbqz8/2/public/full?alt=json'
			let response = await fetch(url);
			let commits = await response.json(); // read response body and parse as JSON
			myApiTwo = commits.feed.entry;
		}
		
		let rn = Math.floor(Math.random() * myApiTwo.length);
		if(document.body.style.background === MagicMint && rn === 6)
		{
			fact = "I wonder what other secrets this app is hiding...."
		}
		else
		{
			fact = myApiTwo[rn].content.$t;
		}
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
		
		if(document.body.style.background === LapisLazuli && Math.floor(Math.random() * 1000) === 24 && rn === 24)
		{
			fact = "🎉 Congratulations! This is the hardest Easter Egg to find!🎉";
		}
		else
		{
			fact = myApi[rn].content.$t;
		}
	}
	
	document.getElementById("f").innerText = fact;
}

