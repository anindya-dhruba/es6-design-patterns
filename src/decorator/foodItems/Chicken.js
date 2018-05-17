import FoodItem from "../FoodItem";

class Chicken extends FoodItem {
	constructor(food) {
		super();
		this.food = food;
	}

	getDescription() {
		return this.food.getDescription()+', Chicken';
	}

	getPrice() {
		return this.food.getPrice() + 15;
	}
}

export default Chicken;