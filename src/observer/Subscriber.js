class Subscriber {
	constructor(email) {
		this.email = email;
	}

	update() {
		console.log(`Sent newsletter to ${this.email}`);
	}
}

export default Subscriber;