// import { testingIt } from "./linkedListClass";
// // eslint-disable-next-line no-unused-vars
// import styles from './main.css';

// testingIt();

//import { Node } from "./node";
import { LinkedList } from "./linkedListClass";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend('tiger');
list.prepend('panda');
list.prepend('lion');

list.toString();

let head = list.headFirst();
console.log(head);

let size = list.size();
console.log(size);

let tail = list.tailLast();
console.log(tail);

let atIndex = list.at(4);
console.log(atIndex);

list.pop();
list.toString();

let containsF = list.contains('whale');
console.log(containsF);

let containsT = list.contains('parrot');
console.log(containsT);

let find6 = list.find('parrot');
console.log(find6);

let findN = list.find('wolf');
console.log(findN);