class Newsletter {
	constructor() {
		this.subscribes = [];
	}

	add(subscriber) {
		this.subscribes.push(subscriber);
	}

	remove(subscriber) {
		this.subscribes = this.subscribes.filter(item => item.email !== subscriber.email);
	}

	send() {
		this.subscribes.forEach(subscriber => console.log(`Sent newsletter to ${subscriber.email}`))
	}
}

export default Newsletter;