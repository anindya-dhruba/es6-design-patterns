import Newsletter from './Newsletter';
import Subscriber from "./Subscriber";

const newsletter = new Newsletter();

const subscriber1 = new Subscriber('john@example.com');
const subscriber2 = new Subscriber('mark@example.com');
const subscriber3 = new Subscriber('andrew@example.com');

newsletter.add(subscriber1);
newsletter.add(subscriber2);
newsletter.add(subscriber3);
newsletter.remove(subscriber2);

newsletter.addBlogPost();
