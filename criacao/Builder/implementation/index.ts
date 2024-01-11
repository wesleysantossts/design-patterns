
class Product {
  public parts: string[] = [];

  listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

// Builder sempre tem que ter um contrato (interface, type, classe abstrata) afirmando o que é obrigatório ser implementado 
interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

// Depois cria-se uma classe que realmente vai implementar os métodos obrigatórios do contrato ou adicionais (não obrigatórios)
export class ConcreteBuilder implements Builder {
  private product: Product | undefined;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  productPartA(): void {
    this.product?.parts.push('PartA1');
  }

  productPartB(): void {
    this.product?.parts.push('PartB1')
  }

  productPartC(): void {
    this.product?.parts.push('PartC1');
  }

  getProduct(): Product | undefined {
    const result = this.product;
    this.reset();
    return result;
  }
}

// opcional: a classe Director é usada para criar objetos builder pré-definidos, isto é, com um padrão específico desejado. É uma classe opcional de se criar.
export class Director {
  private builder: Builder | undefined;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  buildMinimalViableProduct(): void {
    this.builder?.productPartA();
  }

  buildFullFeaturedProduct(): void {
    this.builder?.productPartA();
    this.builder?.productPartB();
    this.builder?.productPartC();
  }
}


