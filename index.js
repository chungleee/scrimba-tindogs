import { dogs as dogsData } from "./data.js";
import Dog from "./Dog.js";

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);

currentDog.renderDog();

function nextDog() {
	currentDogIndex++;
	if (!dogsData[currentDogIndex]) {
		let html = `<div class='no-more'><p>No more dogs in your area</p></div>`;

		document.getElementById("dog-profile-content").innerHTML = html;
		document.getElementById("buttons-group").style.display = "none";

		return;
	}
	currentDog = new Dog(dogsData[currentDogIndex]);
	currentDog.renderDog();
}

document.getElementById("like-btn").addEventListener("click", () => {
	currentDog.renderStamp("liked");
	setTimeout(() => {
		nextDog();
	}, 1500);
});

document.getElementById("dislike-btn").addEventListener("click", () => {
	currentDog.renderStamp("nope");
	setTimeout(() => {
		nextDog();
	}, 1500);
});
