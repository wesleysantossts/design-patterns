import { Abstraction, ConcreteImplementationA, ConcreteImplementationB } from '../implementation';

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
};

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new Abstraction(implementation);
clientCode(abstraction);