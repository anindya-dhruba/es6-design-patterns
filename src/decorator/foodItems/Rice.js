import FoodItem from "../FoodItem";

class Rice extends FoodItem {
	constructor(){
		super();
	}

	getDescription() {
		return 'Rice';
	}

	getPrice() {
		return 30;
	}
}

export default Rice;