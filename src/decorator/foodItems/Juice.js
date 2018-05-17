import FoodItem from "../FoodItem";

class Juice extends FoodItem {
	constructor(food) {
		super();
		this.food = food;
	}

	getDescription() {
		return this.food.getDescription()+', Juice';
	}

	getPrice() {
		return this.food.getPrice() + 5;
	}
}

export default Juice;