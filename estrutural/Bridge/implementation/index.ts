// 2 - Implementação - declara a interface que é comum para todas as Implementações Concretas. Conhecida 
  // -- conhecido como código de baixo nível (que faz o trabalho)
interface Implementation {
  operationImplementation(): string;
}

// 1 - Abstração - fornece a lógica da interface
export class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n ${result}`;
  }
}

// 4 - Abstrações refinadas - fornecem variantes para controle da lógica
class ExtendAbstraction extends Abstraction {
  operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with\n ${result}`;
  }
}

// 3 - Implementações Concretas - contém o código específico (exemplo: da plataforma específica)
export class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}
export class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}