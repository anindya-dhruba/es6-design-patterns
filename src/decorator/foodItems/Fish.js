import FoodItem from "../FoodItem";

class Fish extends FoodItem {
	constructor(food) {
		super();
		this.food = food;
	}

	getDescription() {
		return this.food.getDescription()+', Fish';
	}

	getPrice() {
		return this.food.getPrice() + 10;
	}
}

export default Fish;