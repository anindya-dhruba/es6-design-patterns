class Login {
	constructor(strategy) {
		this.strategy = strategy;
	}

	login() {
		return this.strategy.login();
	}

	success(data) {
		return this.strategy.success(data);
	}

	failure(err) {
		return this.strategy.failure(err);
	}
}

export default Login;