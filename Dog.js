class Dog {
	constructor(data) {
		Object.assign(this, data);
	}

	renderDog() {
		const { age, avatar, bio, name } = this;
		let html = `
			<img class='dog-image' src="${avatar}" alt="${name}" />
			<div class="dog-description">
				<h1>${name}, ${age}</h1>
				<h2>${bio}</h2>
			</div>
		`;

		document.getElementById("dog-profile-content").innerHTML = html;
	}

	renderStamp(stampString) {
		let html = `
			<div 
				class='${stampString === "nope" ? "stamp red-stamp" : "stamp"}' id='stamp'>
				${stampString}
			</div>`;
		document
			.getElementById("dog-profile-content")
			.insertAdjacentHTML("afterbegin", html);
	}
}

export default Dog;
