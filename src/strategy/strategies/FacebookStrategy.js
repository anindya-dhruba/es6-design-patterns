class FacebookStrategy {
	constructor() {
		this.loginSuccess = true;
	}

	login() {
		console.log('REQUEST: logging in with facebook');

		return new Promise((resolve, reject) => {
			return setTimeout(() => {

				if (this.loginSuccess) {
					return resolve({
						id: 1,
						name: 'John Doe'
					})
				}

				return reject({
					email: 'Email is required'
				});
			}, 2000)
		});
	}
}

export default FacebookStrategy;