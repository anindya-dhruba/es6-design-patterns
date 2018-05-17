class FoodItem {
	getDescription() {
		throw new Error('This method must be override');
	}

	getPrice() {
		throw new Error('This method must be override');
	}
}

export default FoodItem;