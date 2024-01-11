// 1. Produtos Abstratos - interfaces que vão estabelecer como será uma família de produtos
interface AbstractProductA {
  usefulFunctonA(): string;
}
interface AbstractProductB {
  usefulFunctonB(): string;
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

// 2. Produtos Concretos - são as classes que implementam os métodos de cada família de produtos (exemplo: cadeira/sofá - vitoriano/moderno)
  // -- Implementar os métodos da interface AbstractProduct
class ConcreteProductA1 implements AbstractProductA {
  usefulFunctonA(): string {
    return 'The result of the product A1.';
  }
}
class ConcreteProductA2 implements AbstractProductA {
  usefulFunctonA(): string {
    return 'The result of the product A2.';
  }
}
class ConcreteProductB1 implements AbstractProductB {
  usefulFunctonB(): string {
    return 'The result of the product B1.';
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctonA();
    return `The result of the B1 collaboration with the (${result})`;
  }
}
class ConcreteProductB2 implements AbstractProductB {
  usefulFunctonB(): string {
    return 'The result of the product B2.';
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctonA();
    return `The result of the B2 collaboration with the (${result})`;
  }
}

// 3. Fábrica Abstrata - declara um conjunto de métodos de criação de cada um dos produtos abstratos
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// 4. Fábricas Concretas - implementam os médotos da Abstract Factory.
export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
export class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}