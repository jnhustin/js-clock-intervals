document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	
	// global variable declarations
	var secsHand = document.getElementById('second');
	var minsHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');
	var secs = 55;
	var mins = 59;
	var hours = 9;
	
	// set correct time per variables and updates every 1 second
	correctStartTimes();
	setInterval(checkUpdates, 1000);

	//functions
	function hoursUpdate() {
		if (mins === 59 && secs === 0) {
			hours += 1;
			hours %= 24;
		}
		var hourRotation = (hours / 12) * 360;
		//rotateHandbyDegree(hourHand, hourRotation);
		hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
	}
	function minsUpdate() {
		if (secs === 0) {
			mins += 1;
			mins %= 60;
		}
		var minsRotation = (mins * 6) % 360;
		rotateHandbyDegree(minsHand, minsRotation);
	}
	function secsRotation() {
		var secsDegree = (secs / 60) * 360 % 360;
		rotateHandbyDegree(secsHand, secsDegree);
		secs += 1;
		secs %= 60;
	}
	function checkUpdates() {
		hoursUpdate();
		minsUpdate();
		secsRotation();
	}
	function rotateHandbyDegree(hand, degree) {
		hand.style.transform = 'rotate(' + degree + 'deg)';
	}
	function correctStartTimes() {
		hoursUpdate();
		minsUpdate();
		secsRotation();
	}
});







