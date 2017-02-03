document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var secondsHand = document.getElementById('second');
	var number = 56;



	

secondRotation(secondsHand);

function secondRotation(hand) {
	if (hand) {
		var rotation = (number / 60) * 360 % 360;
		secondsHand.style.transform = 'rotate('+rotation+'deg)';
		console.log(rotation)
	}
}

function secondInterval() {
	setInterval(rotate(), 1000);

}

function minInterval() {

}
function sixtySeconds() {
	secondInterval();
	setTimeout(clearTimeout(secondInterval), 60000)
}


// function rotate() {

// }
});















