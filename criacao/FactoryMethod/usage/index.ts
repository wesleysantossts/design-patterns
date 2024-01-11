import { ConcreteCreator1, ConcreteCreator2, Creator } from '../implementation';

function clientCode(creator: Creator) {
  console.log('Client: Im not aware of the creators class, but it still works.');
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());