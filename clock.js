document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var secsHand = document.getElementById('second');
	var minsHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');
	var secs = 55;
	var minutes = 59;
	
	minuteUpdate();
	hourUpdate();

	setInterval(checkUpdates, 1000);

	function hourUpdate() {
		if (minutes === 0) {
			hour += 1;
			hour %= 24;
		}
		var hours = 5;
		var hourRotation = (5 / 12) * 360;
		rotateHandbyDegree(hourHand, hourRotation);
	}
	function minuteUpdate() {
		if (secs === 0) {
			minutes += 1;
			minutes %= 60;
			console.log(minutes);
		}
		var minsRotation = (minutes * 6)% 360;
		rotateHandbyDegree(minsHand, minsRotation);
	}
	function secsRotation() {
		var secsDegree = (secs / 60) * 360 % 360;
		rotateHandbyDegree(secsHand, secsDegree);
		secs += 1;
		secs %= 60;
	}
	function checkUpdates() {
		hourUpdate();
		minuteUpdate();
		secsRotation();
	}
	function rotateHandbyDegree(hand, degree) {
		hand.style.transform = 'rotate(' + degree + 'deg)';
	}

});















