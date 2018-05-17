import FacebookStrategy from "./strategies/FacebookStrategy";
import GoogleStrategy from "./strategies/GoogleStrategy";
import TwitterStrategy from "./strategies/TwitterStrategy";

export default media => {
	switch (media) {
		case 'facebook':
			return new FacebookStrategy();
		case 'google':
			return new GoogleStrategy();
		case 'twitter':
			return new TwitterStrategy();
		default:
			throw new Error(`Media ${media} not found`);
	}
}
