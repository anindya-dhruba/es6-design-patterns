import getStrategy from './getStrategy';
import Login from './Login';

const loginRequest = (media) => {
	try {
		const strategy = getStrategy(media);

		new Login(strategy).login()
			.then(loginSuccess)
			.catch(loginFailure);
	} catch (e) {
		console.log(e.message);
	}
};

const loginSuccess = (data) => {
	console.log('SUCCESS: log in completed');
	console.log('DATA:', data);
};

const loginFailure = (err) => {
	console.log('FAILURE: could not login');
	console.log('MESSAGE:', err);
};

// facebook/google/twitter
loginRequest('facebook');