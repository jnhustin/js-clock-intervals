document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var secondsHand = document.getElementById('second');
	var number = 56;
	var rotation = 0;
	setInterval(function() {
		rotation = (number / 60) * 360 % 360;
		secondsHand.style.transform = 'rotate(' + rotation + 'deg)';
		number++;
	}, 1000)




// function secondRotation(hand) {
// 	if (hand) {
// 		var rotation = (number / 60) * 360 % 360;
// 		secondsHand.style.transform = 'rotate('+rotation+'deg)';
// 		console.log(rotation)
// 	}
// }

// function secondInterval(rotation) {
// 	setInterval(rotation, 1000);

// }

// function minInterval() {

// }
// function sixtySeconds() {
// 	secondInterval();
// 	setTimeout(clearTimeout(secondInterval), 60000)
// }



});















