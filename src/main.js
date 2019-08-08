

let dodgyButton = document.getElementById('clickedy')


dodgyButton.addEventListener('mouseover', function() {
	// Adds clicked class to button
	// 'this' is set to the element that fired the event in an event listener
	this.classList.add('clicked')
})




















const redirect = () => {
    console.log("testing");
    window.location.href = "https://stackoverflow.com/";
};

// var isClicked = false;

// function mainButton() {
// 	isClicked = true;
// };


const changePages = (page) => {
	let k = 1;
}



const mainButton = () => {
	isClicked = true;
};


// let toggled = 0;
// document.getElementById('button1').addEventListener('click', () => {
// 	toggled = (toggled + 1)%3;
// 	let x = document.getElementById("toggledTxt");
// 	if (toggled === 1) {
// 		x.innerHTML = "You found the secret message!!!";
// 	} else if (toggled === 0) {
// 		x.innerHTML = "Secret Message";
// 	} else if (toggled === 2) {
// 		x.innerHTML = "Just Kidding! This is the actual secret message!";
// 	}
// });


let toggled = 0;
const toggleSecret = () => {
	toggled += 1;
	toggled = toggled % 3;
	let x = document.getElementById("toggledTxt");
	if (toggled === 1) {
		x.innerHTML = "You found the secret message!!!";
	} else if (toggled === 0) {
		x.innerHTML = "Secret Message";
	} else if (toggled === 2) {
		x.innerHTML = "Just Kidding! This is the actual secret message!";
	}

};