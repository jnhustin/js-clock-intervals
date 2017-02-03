document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var secondsHand = document.getElementById('second');
	var minsHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');
	var seconds = 55;
	var minutes = 58;
	var hours = 5;
	var secsDegree = 0;
	
	minuteUpdate();
	hourUpdate();

	setInterval(hourUpdate, 1000);
	setInterval(minuteUpdate, 1000);
	setInterval(secondsRotation, 1000);


	function hourUpdate() {
		var hourRotation = (5 / 12) * 360;
		hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
		
		if (minutes === 0) {
			hour++;
			hour %= 24;
		}
	}
	function minuteUpdate() {
		var minsRotation = (minutes * 6)% 360;
		minsHand.style.transform = 'rotate(' + minsRotation + 'deg)';
		if (seconds === 0) {
			minutes++;
			minutes %= 60;
			console.log(minutes);
		}
	}
	function secondsRotation() {
		secsDegree = (seconds / 60) * 360 % 360;
		secondsHand.style.transform = 'rotate(' + secsDegree + 'deg)';
		seconds++;
		seconds %= 60;
	}
	function checkUpdates() {
		hourUpdate();
		minuteUpdate();
		secondsRotation();
	}
});















