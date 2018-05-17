import Rice from './foodItems/Rice';
import Fish from './foodItems/Fish';
import Chicken from './foodItems/Chicken';
import Juice from "./foodItems/Juice";

let food = new Rice();
food = new Fish(food);
food = new Chicken(food);
food = new Juice(food);

console.log('Items:', food.getDescription());
console.log('Price:', food.getPrice());