interface Product {
  operation(): string;
}

//> os Produtos Concretos são implementações diferentes do contrato (interface ou classe abstrata)
class ConcreteProduct1 implements Product {
  public operation(): string {
    return `{Result of the ConcreteProduct1}`;
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return `{Result of the ConcreteProduct2}`;    
  }
}

// a classe Criador declara o método fábrica, que retorna novos objetos produto. 
  // -- É importate que o tipo de retorno desse método corresponda a interface do Produto.
export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: the same creator's code has just worked with ${product.operation()}`;
  }
}

// Criadores Concretos sobrescrevem o método fábrica base para retornar um tipo diferente de produto
  // -- Observe que o método fábrica não precisa criar novas instancias o tempo todo. Ele também pode retornar objetos existentes de um cache, um conjunto de objetos ou outra fonte.
export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

