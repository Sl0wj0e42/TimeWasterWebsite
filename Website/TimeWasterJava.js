function SubmitionHit(){
	let inWork = parseInt(document.getElementById("inWork").value);
	let workSchedule = parseInt(document.getElementById("workSchedule").value);
	let outWork = parseInt(document.getElementById("outWork").value);
	let sleep = parseInt(document.getElementById("sleep").value);
	
	if ((inWork > workSchedule) || (inWork + outWork > 148) || (outWork + sleep > 168) || (inWork + outWork + sleep > 168)){
		text = "Error: You have inputed to meany hours";
	}
	
	else{
		let leisureTime = 168 - (inWork + outWork + sleep);
		let correctLeisureTime = 168 - ((workSchedule * 3) + workSchedule + sleep);
		
		if (correctLeisureTime >= leisureTime){
			text = "This is correct leisure time";
			var colourCheck = "Green";
			document.body.style.animationPlayState = "paused";
			document.getElementById("PageChange1").style.display = "none";
			document.getElementById("PageChange2").style.display = "none";
		}
		else{
			if (correctLeisureTime + (correctLeisureTime * 0.1) >= leisureTime){
				text = "To much leisure time but you are only over by ten persent";
				document.body.style.backgroundColor = "#F3EF19";
				document.getElementById("PageChange1").style.display = "none";
				document.getElementById("PageChange2").style.display = "none";
			}
			else{
				text = "To much leisure time";
				document.body.style.backgroundColor = "#FF0000";
				document.getElementById("PageChange1").style.display = "none";
				document.getElementById("PageChange2").style.display = "none";
			}
		}
	}
	
	document.getElementById("error1").innerHTML = text;
}