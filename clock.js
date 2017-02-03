document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	var timeInSecond = document.getElementById('second');

	rotate();

});





function secondInterval() {
	setInterval(rotate, 1000);


function sixtySeconds() {
	secondInterval();
	setTimeout(clearTimeout(secondInterval), 60000)}
}
function rotate(clockHand) {
	if (clockHand) {
		clockHand.style.transform = 'rotate(100deg)';
	}
}
secondInterval();