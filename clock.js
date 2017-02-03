document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var secondsHand = document.getElementById('second');
	var minsHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');
	var seconds = 0;
	var minutes = 45;
	var hours = 0;
	var secsDegree = 0;
	setInterval(secondsRotation, 1000);

	if (secsDegree === 0) {
		var minsRotation = (minutes * 6) % 360;
		minutes++;
		minutes %= 60;
		minsHand.style.transform = 'rotate(' + minsRotation + 'deg)';

	}

	function secondsRotation() {
		secsDegree = (seconds / 60) * 360 % 360;
		secondsHand.style.transform = 'rotate(' + secsDegree + 'deg)';
		seconds++;
		seconds %= 60;
	}

});















