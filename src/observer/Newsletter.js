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
		this.subscribes.forEach(subscriber => subscriber.update());
	}

	addBlogPost() {
		// ... add blog post
		this.send();
	}
}

export default Newsletter;