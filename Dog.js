class Dog {
	constructor(data) {
		Object.assign(this, data);
	}

	test() {
		console.log(`hi my name is ${this.name}`);
	}
}

export default Dog;
